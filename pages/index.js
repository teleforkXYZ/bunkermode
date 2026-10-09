import Head from 'next/head'
import { Nav, Footer, SITE } from './_shared'

export default function Home() {
  return (
    <>
      <Head>
        <title>Bunker Mode</title>
        <meta name="description" content="BUNKER / STRK on Uniswap v3, Ethereum. Not STRK. Not Starknet." />
        <meta property="og:title" content="Bunker Mode" />
        <meta property="og:image" content="/og.jpg" />
        <meta name="theme-color" content="#07051c" />
      </Head>
      <Nav />
      <main>
        <div className="tag">Token2049 · Oct 2026</div>

        <h1>This calls for<br />bunker mode.</h1>

        <p>
          Eli Ben-Sasson asked whether Starknet should become an L1 for
          post-quantum agility. Two things, in his words: the quantum threat
          may be closer than people think, and AI is already breaking math
          that was treated as safe. A chain that wants to last needs the right
          cryptography, crypto agility, and the option to be an L1.
        </p>

        <a href={SITE.SUBJECT_URL} className="btn" target="_blank" rel="noopener noreferrer">
          The thread
        </a>
        <a href="/buy" className="btn btn-ghost">
          BUNKER / STRK →
        </a>

        <hr className="divider" />

        <section className="section">
          <h2>The question</h2>
          <h3>Modern history of money</h3>
          <p>
            Gold, then digital gold, then private digital gold. The thread
            stops on a question mark and asks which quality comes next.
          </p>
          <table className="table">
            <tbody>
              <tr><td>1</td><td>Gold</td></tr>
              <tr><td>2</td><td>Digital Gold</td></tr>
              <tr><td>3</td><td>Private Digital Gold</td></tr>
              <tr><td>4</td><td>?</td></tr>
            </tbody>
          </table>
        </section>

        <section className="section">
          <h2>The custody axiom</h2>
          <h3>Your keys, your coins*</h3>
          <p>*Provided the math remains hard.</p>
        </section>

        <section className="section">
          <h2>Put the quantum threat aside</h2>
          <h3>Post-quantum secure ≠ Post-AI secure</h3>
          <p>
            The thread points at the pace of mathematical results coming out
            of AI, and at work like ecdsa/fail, which it says can pull a
            quantum-style break closer. Quantum-ready is not the same claim
            as AI-ready. Both are the ask.
          </p>
        </section>

        <section className="section">
          <h2>What it takes</h2>
          <h3>Staying future-proofed</h3>
          <p>ZK-STARKs. Crypto agility. Migration roadmap to PQS.</p>
          <p>
            Starknet has a migration roadmap to PQS, and still depends on
            Ethereum for as long as it is an L2.
          </p>
        </section>

        <section className="section">
          <h2>If the base layer is slow</h2>
          <h3>Ethereum too slow? An L1 is on the table.</h3>
          <p>
            Ethereum is targeting full L1 quantum resistance by the end of
            2029. Bitcoin has made no such commitment. Starknet could get
            there by 2027 — if it controls its own security migrations instead
            of waiting.
          </p>
          <p>That is a consideration, not a finished chain.</p>
          <table className="table">
            <tbody>
              <tr><td>Name</td><td>Bunker Mode</td></tr>
              <tr><td>Ticker</td><td>BUNKER</td></tr>
              <tr><td>Pair</td><td>BUNKER / STRK</td></tr>
              <tr><td>Chain</td><td>Ethereum</td></tr>
            </tbody>
          </table>
          <p className="disclaimer">
            Bunker Mode is not Starknet, and BUNKER is not STRK.
          </p>
        </section>

        <img src="/mark.jpg" alt="" className="mark-center" />
      </main>
      <Footer />
    </>
  )
}
