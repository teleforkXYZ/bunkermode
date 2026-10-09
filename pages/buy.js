import Head from 'next/head'
import { Nav, Footer, SITE } from './_shared'

export default function Buy() {
  const uniswapLink = SITE.CONTRACT_ADDRESS !== '0x0000000000000000000000000000000000000000'
    ? `${SITE.UNISWAP_SWAP}${SITE.CONTRACT_ADDRESS}`
    : 'https://app.uniswap.org'

  const etherscanLink = SITE.CONTRACT_ADDRESS !== '0x0000000000000000000000000000000000000000'
    ? `${SITE.ETHERSCAN_TOKEN}${SITE.CONTRACT_ADDRESS}`
    : '#'

  return (
    <>
      <Head>
        <title>Buy BUNKER</title>
        <meta name="description" content="How to buy BUNKER on Uniswap v3 with ETH or STRK." />
      </Head>
      <Nav />
      <main>
        <div className="tag">BUNKER / STRK</div>
        <h1>Buy BUNKER</h1>
        <p>
          BUNKER trades on Uniswap v3 against the real STRK on Ethereum.
          You can swap with ETH — Uniswap routes ETH → STRK → BUNKER in one
          transaction. No extra steps.
        </p>

        <a href={uniswapLink} className="btn" target="_blank" rel="noopener noreferrer">
          Swap on Uniswap →
        </a>
        {SITE.CONTRACT_ADDRESS !== '0x0000000000000000000000000000000000000000' && (
          <a href={etherscanLink} className="btn btn-ghost" target="_blank" rel="noopener noreferrer">
            Etherscan
          </a>
        )}

        <hr className="divider" />

        <section className="section">
          <h2>Step by step</h2>
          <h3>Swap with ETH (easiest)</h3>
          <p>
            Open Uniswap, set input to ETH, set output to BUNKER.
            Paste the contract address if it does not appear automatically.
            Uniswap routes through the ETH/STRK pool automatically.
          </p>
          <table className="table">
            <tbody>
              <tr>
                <td>Contract</td>
                <td style={{wordBreak: 'break-all', fontSize: '0.8rem'}}>
                  {SITE.CONTRACT_ADDRESS !== '0x0000000000000000000000000000000000000000'
                    ? SITE.CONTRACT_ADDRESS
                    : 'Deploying soon'}
                </td>
              </tr>
              <tr><td>Network</td><td>Ethereum mainnet</td></tr>
              <tr><td>Pair</td><td>BUNKER / STRK</td></tr>
              <tr><td>Fee tier</td><td>1%</td></tr>
              <tr><td>Tax</td><td>None</td></tr>
              <tr><td>Slippage</td><td>1–2% recommended</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Swap with STRK directly</h2>
          <h3>Pair STRK → BUNKER</h3>
          <p>
            If you already hold STRK, you can swap directly into BUNKER
            on Uniswap v3. The pool is BUNKER / STRK at 1% fee tier.
          </p>
          <table className="table">
            <tbody>
              <tr><td>STRK contract</td>
                <td style={{wordBreak: 'break-all', fontSize: '0.8rem'}}>
                  {SITE.STRK_ADDRESS}
                </td>
              </tr>
              <tr><td>Decimals</td><td>18</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Important</h2>
          <p>
            Always verify the contract address before swapping.
            BUNKER is not STRK and not Starknet.
            This is not investment advice.
          </p>
        </section>

        <img src="/mark.jpg" alt="" className="mark-center" />
      </main>
      <Footer />
    </>
  )
}
