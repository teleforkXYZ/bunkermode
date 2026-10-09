import Head from 'next/head'
import { Nav, Footer, SITE } from '../components/shared'

export default function Tokenomics() {
  return (
    <>
      <Head>
        <title>BUNKER Tokenomics</title>
        <meta name="description" content="BUNKER supply, distribution, burn, and founder allocation." />
      </Head>
      <Nav />
      <main>
        <div className="tag">Supply</div>
        <h1>Tokenomics</h1>
        <p>
          Fixed supply. Minted once at deploy. No further mint, ever.
          500 million burned at launch. Founder allocation locked 6 months.
        </p>

        <hr className="divider" />

        <section className="section">
          <h2>Supply</h2>
          <table className="table">
            <tbody>
              <tr><td>Total supply</td><td>{SITE.TOTAL_SUPPLY} BUNKER</td></tr>
              <tr><td>Burned at launch</td><td>{SITE.BURNED} BUNKER (50%)</td></tr>
              <tr><td>Circulating max</td><td>{SITE.CIRCULATING} BUNKER</td></tr>
              <tr><td>Further mint</td><td>None. Ever.</td></tr>
              <tr><td>Decimals</td><td>18</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Distribution</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>Uniswap v3 pool</td>
                <td>480,000,000 BUNKER (48%)</td>
              </tr>
              <tr>
                <td>Early community</td>
                <td>200,000,000 BUNKER (20%)</td>
              </tr>
              <tr>
                <td>Marketing treasury</td>
                <td>150,000,000 BUNKER (15%)</td>
              </tr>
              <tr>
                <td>Ecosystem / dev</td>
                <td>100,000,000 BUNKER (10%)</td>
              </tr>
              <tr>
                <td>Airdrop reserve</td>
                <td>50,000,000 BUNKER (5%)</td>
              </tr>
              <tr>
                <td>Founder (6 mo lock)</td>
                <td>20,000,000 BUNKER (2%)</td>
              </tr>
              <tr>
                <td>Burned at launch</td>
                <td>500,000,000 BUNKER (50% of original)</td>
              </tr>
            </tbody>
          </table>
          <p>
            Founder allocation is time-locked for 6 months on-chain.
            LP tokens are locked. Burn is permanent — sent to the dead address.
          </p>
        </section>

        <section className="section">
          <h2>Launch mechanics</h2>
          <table className="table">
            <tbody>
              <tr><td>Tax</td><td>None</td></tr>
              <tr><td>Max wallet</td><td>2% (20,000,000 BUNKER)</td></tr>
              <tr><td>Max tx</td><td>2% (20,000,000 BUNKER)</td></tr>
              <tr><td>Limits removal</td><td>Owner callable after launch</td></tr>
              <tr><td>Trading guard</td><td>openTrading() before pool is live</td></tr>
              <tr><td>Sniper protection</td><td>addBots() blacklist</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Contracts</h2>
          <table className="table">
            <tbody>
              <tr>
                <td>BUNKER</td>
                <td style={{wordBreak: 'break-all', fontSize: '0.8rem'}}>
                  {SITE.CONTRACT_ADDRESS !== '0x0000000000000000000000000000000000000000'
                    ? SITE.CONTRACT_ADDRESS
                    : 'Deploying soon'}
                </td>
              </tr>
              <tr>
                <td>STRK</td>
                <td style={{wordBreak: 'break-all', fontSize: '0.8rem'}}>
                  {SITE.STRK_ADDRESS}
                </td>
              </tr>
              <tr><td>Network</td><td>Ethereum mainnet</td></tr>
              <tr><td>Compiler</td><td>Solidity 0.8.24</td></tr>
            </tbody>
          </table>
        </section>

        <img src="/mark.jpg" alt="" className="mark-center" />
      </main>
      <Footer />
    </>
  )
}
