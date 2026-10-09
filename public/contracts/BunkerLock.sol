// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

interface IPositionManager {
    struct CollectParams {
        uint256 tokenId;
        address recipient;
        uint128 amount0Max;
        uint128 amount1Max;
    }

    function positions(uint256 tokenId)
        external
        view
        returns (
            uint96 nonce,
            address operator,
            address token0,
            address token1,
            uint24 fee,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            uint256 feeGrowthInside0LastX128,
            uint256 feeGrowthInside1LastX128,
            uint128 tokensOwed0,
            uint128 tokensOwed1
        );

    function collect(CollectParams calldata params) external payable returns (uint256 amount0, uint256 amount1);
}

/// @title  bunker mode position lock
/// @notice Accepts one Uniswap v3 position NFT and never releases the liquidity.
///         The position must be BUNKER/STRK, fee 1%, full range, with liquidity.
///         collect() forwards only the pool's earned fees to the treasury.
contract BunkerLock {
    address public constant MANAGER = 0xC36442b4a4522E871399CD717aBDD847Ab11FE88;
    address public constant STRK = 0xCa14007Eff0dB1f8135f4C25B34De49AB0d42766;
    address public constant TREASURY = 0xFc8a8f57142f53c4a48fBf44fb72a2864c92B6c6;
    int24 public constant MIN_TICK = -887200;
    int24 public constant MAX_TICK = 887200;

    address public immutable bunker;
    uint256 public tokenId;

    event Locked(uint256 indexed tokenId, uint128 liquidity);
    event Collected(uint256 amount0, uint256 amount1);

    constructor(address bunkerToken) {
        require(bunkerToken != address(0) && bunkerToken != STRK, "bunker");
        bunker = bunkerToken;
    }

    function onERC721Received(address, address, uint256 id, bytes calldata) external returns (bytes4) {
        require(msg.sender == MANAGER, "manager");
        require(tokenId == 0, "already");

        (
            ,
            ,
            address token0,
            address token1,
            uint24 fee,
            int24 tickLower,
            int24 tickUpper,
            uint128 liquidity,
            ,
            ,
            ,
        ) = IPositionManager(MANAGER).positions(id);

        address tokenA = bunker < STRK ? bunker : STRK;
        address tokenB = bunker < STRK ? STRK : bunker;
        require(token0 == tokenA && token1 == tokenB, "pair");
        require(fee == 10_000, "fee");
        require(tickLower == MIN_TICK && tickUpper == MAX_TICK, "range");
        require(liquidity > 0, "empty");

        tokenId = id;
        emit Locked(id, liquidity);
        return this.onERC721Received.selector;
    }

    /// @notice Send the position's earned fees to the treasury.
    ///         Does not remove liquidity and cannot move the NFT.
    function collect() external returns (uint256 amount0, uint256 amount1) {
        require(tokenId != 0, "empty");
        (amount0, amount1) = IPositionManager(MANAGER).collect(
            IPositionManager.CollectParams({
                tokenId: tokenId,
                recipient: TREASURY,
                amount0Max: type(uint128).max,
                amount1Max: type(uint128).max
            })
        );
        emit Collected(amount0, amount1);
    }
}
