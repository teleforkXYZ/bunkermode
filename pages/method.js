import Head from 'next/head'
import { Nav, Footer, SITE } from '../components/shared'

export default function Method() {
  return (
    <>
      <Head>
        <title>How BUNKER / STRK opens</title>
        <meta name="description" content="How the BUNKER/STRK pool is deployed and opened on Uniswap v3." />
      </Head>
      <Nav />
      <main>
        <div className="tag">Method</div>
        <h1>Real STRK.<br />Real BUNKER.</h1>
        <p>
          Nothing is virtual in this pool. You put STRK in, and you put
          BUNKER in. No bonding curve. No virtual reserve. No tax on the swap.
        </p>

        <hr className="divider" />

        <section className="section">
          <h2>Step 01</h2>
          <h3>Deploy Bunker on Ethereum.</h3>
          <p>
            Foundry, compiler 0.8.24, Ethereum mainnet. Constructor takes
            nothing. One billion BUNKER lands on the deployer. No second mint,
            no fee function, no owner backdoor after renounce.
          </p>
        </section>

        <section className="section">
          <h2>Step 02</h2>
          <h3>Burn 500 million.</h3>
          <p>
            Half the supply is sent to the dead address immediately after
            deploy. This is permanent and on-chain verifiable.
          </p>
          <table className="table">
            <tbody>
              <tr><td>Burn address</td><td>0x000...dead</td></tr>
              <tr><td>Amount</td><td>500,000,000 BUNKER</td></tr>
              <tr><td>Reversible</td><td>No</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Step 03</h2>
          <h3>Open the Uniswap v3 pool.</h3>
          <p>
            Position manager: 0xC36442b4a4522E871399CD717aBDD847Ab11FE88.
            Fee tier 1% (10000). Both BUNKER and STRK are approved to the
            manager. The pool is initialized before openTrading() is called —
            this prevents front-running at launch.
          </p>
          <table className="table">
            <tbody>
              <tr><td>Pool</td><td>BUNKER / STRK</td></tr>
              <tr><td>Fee tier</td><td>1%</td></tr>
              <tr><td>Liquidity</td><td>480,000,000 BUNKER + 2,500 STRK</td></tr>
              <tr><td>LP lock</td><td>6 months, on-chain</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>Step 04</h2>
          <h3>Call openTrading().</h3>
          <p>
            Until openTrading() is called, only the deployer can transfer
            tokens. After the call, max wallet (2%) and max tx (2%) limits
            are active. Limits can be removed by the owner after launch
            stabilises.
          </p>
        </section>

        <section className="section">
          <h2>Price sorting</h2>
          <h3>token0 is the smaller address.</h3>
          <p>
            If BUNKER address {'<'} STRK address, BUNKER is token0 and
            the price is expressed as STRK per BUNKER. If STRK is token0,
            it is inverted. The pool initialization handles this correctly.
            Getting it wrong opens the pool at a nonsense rate.
          </p>
        </section>

        <a href="/buy" className="btn">Buy BUNKER →</a>
        <a href="/tokenomics" className="btn btn-ghost">Tokenomics</a>

        <img src="/mark.jpg" alt="" className="mark-center" />
      </main>
      <Footer />
    </>
  )
}
