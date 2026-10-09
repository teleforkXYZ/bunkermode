import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { facts } from "@/lib/facts";

export const Route = createFileRoute("/pair")({ component: Pair });

const terms = [
  ["chain", facts.chain],
  ["pair", facts.pair],
  ["$STRK", facts.strk],
  ["supply", facts.supply],
  ["where supply sits", "100% in the pool"],
  ["$STRK in the pool", facts.seed],
  ["opening depth", `${facts.depth} (${facts.print})`],
  ["fee", facts.fee],
  ["transfer tax", facts.tax],
  ["treasury", facts.treasury],
  ["owner", facts.owner],
  ["contract", facts.contract],
  ["liquidity wallet", facts.wallet],
] as const;

const absent = [
  "No founder allocation.",
  "No friend allocation.",
  "No transfer tax, and no second fee on top of the pool.",
  "The treasury cannot withdraw the liquidity. It can receive the 1% fee only.",
  "No burn. Burning half and pooling the whole supply cannot both be true.",
  "No trading switch. Transfers work from the first block.",
  "No blacklist.",
  "No wallet cap. A cap that forgets the pool blocks sells.",
];

function Pair() {
  return (
    <SiteShell>
      <p className="mt-10 font-mono text-sm text-accent">the market</p>
      <h1 className="mt-4 font-serif text-6xl leading-none">the pair</h1>
      <p className="mt-8 max-w-xl text-lg">
        One pool. Real $STRK against the whole supply. Liquidity stays in the lock.
        Only the pool's 1% fee can be sent to the treasury.
      </p>

      <dl className="mt-12 border-t border-line">
        {terms.map(([k, v]) => (
          <div key={k} className="grid grid-cols-1 gap-1 border-b border-line py-4 sm:grid-cols-[11rem_1fr] sm:gap-4">
            <dt className="text-sm text-muted">{k}</dt>
            <dd className="break-words">{v}</dd>
          </div>
        ))}
      </dl>

      <section className="mt-12 border border-accent bg-surface px-5 py-6">
        <h2 className="font-serif text-3xl">what $185 means</h2>
        <p className="mt-4 text-fg">
          2,500 $STRK is the entire bid. At the print above, that is about $185. If every
          token sits in the pool, the opening value of the supply is that same $185. A buy
          larger than the $STRK in the pool walks through most of the supply. A sell walks
          the price back. There is no second reserve.
        </p>
      </section>

      <ul className="mt-12 space-y-3">
        {absent.map((line) => (
          <li key={line} className="border-b border-line pb-3 text-muted">
            {line}
          </li>
        ))}
      </ul>
    </SiteShell>
  );
}
