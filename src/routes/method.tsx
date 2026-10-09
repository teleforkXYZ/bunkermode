import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { facts } from "@/lib/facts";

export const Route = createFileRoute("/method")({ component: Method });

const steps = [
  {
    n: "01",
    t: "Deploy the token",
    d: "Remix, compiler 0.8.24, Ethereum mainnet. Deploy Bunker.sol. The whole supply arrives at the deployer. There is no owner function.",
  },
  {
    n: "02",
    t: "Deploy the lock",
    d: "Deploy BunkerLock.sol. The constructor argument is the new $BUNKER address. The treasury address is already fixed in the contract. The lock cannot release the liquidity.",
  },
  {
    n: "03",
    t: "Sort the two addresses",
    d: "The smaller address is token0. $STRK is fixed. $BUNKER is known only after deploy. Reversing the price opens the pool at a nonsense rate.",
  },
  {
    n: "04",
    t: "Add the position",
    d: "Uniswap v3, fee 1%, full range. Deposit 1,000,000,000 $BUNKER and 2,500 $STRK. The starting price is 0.0000025 $STRK per $BUNKER. Both sides must show a deposit. A one-sided position is not this market.",
  },
  {
    n: "05",
    t: "Lock the NFT",
    d: "The position is an NFT on the position manager. safeTransferFrom it to the lock. The lock accepts only this pair, this fee, and the full-range ticks. A wrong NFT is refused and stays with the sender.",
  },
  {
    n: "06",
    t: "Stop",
    d: "Anyone may call collect() on the lock. That sends the pool's earned 1% fee, in $BUNKER and $STRK, to the treasury. It does not remove liquidity. There is no trading switch and no second mint.",
  },
];

function Method() {
  return (
    <SiteShell>
      <p className="mt-10 font-mono text-sm text-accent">remix · 0.8.24 · chain id 1</p>
      <h1 className="mt-4 font-serif text-6xl leading-none">method</h1>
      <p className="mt-8 max-w-xl text-lg">
        Gas comes from the 0.141 ETH already in the liquidity wallet. The 2,500 $STRK in that
        same wallet is the pool, not a fee.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="/contracts/Bunker.sol"
          className="border border-line px-4 py-3 text-sm text-fg"
          download
        >
          Bunker.sol
        </a>
        <a
          href="/contracts/BunkerLock.sol"
          className="border border-line px-4 py-3 text-sm text-fg"
          download
        >
          BunkerLock.sol
        </a>
      </div>

      <ol className="mt-12">
        {steps.map((step) => (
          <li key={step.n} className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-6">
            <span className="text-sm text-accent">{step.n}</span>
            <div>
              <h2 className="font-serif text-3xl">{step.t}</h2>
              <p className="mt-2 text-muted">{step.d}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-4 break-all text-sm text-muted">
        Position manager {facts.manager}. Treasury {facts.treasury}. $STRK {facts.strk}.
      </p>
    </SiteShell>
  );
}
