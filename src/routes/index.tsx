import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-shell";
import { facts } from "@/lib/facts";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <SiteShell>
      <img
        src="/mark.jpg"
        alt="bunker STRK"
        width={160}
        height={160}
        className="mt-10 h-36 w-36 rounded-full object-cover sm:h-40 sm:w-40"
      />
      <p className="mt-8 font-mono text-sm text-accent">ethereum · $BUNKER / $STRK</p>
      <h1 className="mt-4 font-serif text-6xl leading-none sm:text-8xl">bunker STRK</h1>
      <p className="mt-8 max-w-xl text-lg leading-relaxed text-fg">
        A fixed token about one post. The pair is real $STRK. The token is not $STRK, and the
        project is not Starknet.
      </p>

      <dl className="mt-12 border-t border-line">
        <Row k="subject" v="Eli Ben-Sasson, Token2049" href={facts.subject} />
        <Row k="reply" v="Starknet, the same day" href={facts.starknetPost} />
        <Row k="name" v={facts.name} />
        <Row k="ticker" v={facts.symbol} />
        <Row k="supply" v={`${facts.supply}, minted once`} />
        <Row k="market" v="Uniswap v3, fee 1%, full range" />
      </dl>

      <blockquote className="mt-12 border-l border-accent pl-5">
        <p className="font-serif text-3xl leading-snug">
          Your keys, your coins.
        </p>
        <p className="mt-3 font-mono text-sm text-muted">Provided the math remains hard.</p>
      </blockquote>

      <p className="mt-10 max-w-xl text-muted">
        The post weighs a quantum threat, AI pressure on the math, and a possible L1 with a
        2027 target. That is a consideration, not a finished chain. This token does not speak
        for Starknet or StarkWare.
      </p>
    </SiteShell>
  );
}

function Row({ k, v, href }: { k: string; v: string; href?: string }) {
  return (
    <div className="grid grid-cols-[7rem_1fr] gap-4 border-b border-line py-4">
      <dt className="text-sm text-muted">{k}</dt>
      <dd>
        {href ? (
          <a href={href} className="text-fg underline decoration-line underline-offset-4">
            {v}
          </a>
        ) : (
          v
        )}
      </dd>
    </div>
  );
}
