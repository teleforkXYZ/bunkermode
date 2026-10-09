// Shared config — update CONTRACT_ADDRESS after deploy
export const SITE = {
  name: 'Bunker Mode',
  ticker: 'BUNKER',
  domain: 'bunkerstrk.xyz',
  // Fill after mainnet deploy:
  CONTRACT_ADDRESS: '0x0000000000000000000000000000000000000000',
  STRK_ADDRESS: '0xCa14007Eff0dB1f8135f4C25B34De49AB0d42766',
  UNISWAP_POOL: '',
  ETHERSCAN_TOKEN: 'https://etherscan.io/token/',
  UNISWAP_SWAP: 'https://app.uniswap.org/swap?outputCurrency=',
  SUBJECT_URL: 'https://x.com/EliBenSasson/status/2108110129572741426',
  STARKNET_POST: 'https://x.com/Starknet/status/2108113391525204034',
  TOTAL_SUPPLY: '1,000,000,000',
  BURNED: '500,000,000',
  CIRCULATING: '500,000,000',
  FOUNDER_ALLOC: '20,000,000',
  FOUNDER_LOCK: '6 months',
  POOL_ALLOC: '480,000,000',
}

export function Nav() {
  return (
    <nav>
      <a href="/" className="nav-logo">
        <img src="/mark.jpg" alt="Bunker Mode" />
        Bunker Mode
      </a>
      <a href="/buy">Buy</a>
      <a href="/tokenomics">Tokenomics</a>
      <a href="/method">Method</a>
      <span className="badge">BUNKER</span>
    </nav>
  )
}

export function Footer() {
  return (
    <footer>
      Bunker Mode, ticker BUNKER. The market is BUNKER / STRK on Ethereum.
      Not STRK, and not Starknet.{' '}
      <a href={SITE.SUBJECT_URL} target="_blank" rel="noopener noreferrer">
        The post this is about
      </a>.
    </footer>
  )
}
