import {
  Masthead,
  TableOfContents,
  ChapterMark,
  Heading,
  Lede,
  DropCap,
  Ornament,
  DefinitionCard,
  TheoremBlock,
  Corollary,
  IntuitionBox,
  ProofSketch,
  ExampleBox,
  ApplicationCard,
  InteractivePanel,
  Math,
  Highlight,
  Footer,
} from "../../components";

import "./sylow-explorer.css";

import { useState, useMemo } from "react";

const ORDERS = [12, 15, 20, 21, 30, 33, 35, 60, 105, 200, 255, 1001] as const;

function primeFactor(n: number): Record<string, number> {
  const f: Record<string, number> = {};
  let x = n;
  for (let p = 2; p * p <= x; p++) {
    while (x % p === 0) {
      f[p] = (f[p] || 0) + 1;
      x = x / p;
    }
  }
  if (x > 1) f[x] = (f[x] || 0) + 1;
  return f;
}

function divisors(n: number): number[] {
  const d: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) d.push(i);
  }
  return d;
}

function SylowExplorer() {
  const [selected, setSelected] = useState(15);
  const f = primeFactor(selected);

  const rows = useMemo(() =>
    Object.entries(f).map(([pStr, e]) => {
      const p = Number(pStr);
      const pn = p ** e;
      const m = selected / pn;
      const divsOfM = divisors(m);
      const candidates = divsOfM.filter((d) => d % p === 1);
      const forced = candidates.length === 1;
      const forcedToOne = forced && candidates[0] === 1;

      return { p, pn, e, m, candidates, forced, forcedToOne };
    }),
  [f, selected]);

  const forcedParts = useMemo(() =>
    rows
      .filter((r) => r.candidates.length === 1)
      .map((r) => {
        if (r.forcedToOne) {
          return <>Sylow {r.p}-subgroup is <strong>normal</strong> (n{sub(r.p)} = 1 forced)</>;
        }
        return <>n{sub(r.p)} = {r.candidates[0]} forced</>;
      }),
  [rows]);

  return (
    <InteractivePanel
      title={<>Sylow data for |G| = N</>}
      tag="interactive"
    >
      <p className="picker-label">Choose an order:</p>
      <div className="num-picker" role="group" aria-label="Order picker">
        {ORDERS.map((n) => (
          <button
            key={n}
            className={`num-btn ${n === selected ? "active" : ""}`}
            onClick={() => setSelected(n)}
            aria-pressed={n === selected}
          >
            {n}
          </button>
        ))}
      </div>

      <div className="fact-display">
        |G| = <strong>{selected}</strong> = {Object.entries(f).map(([p, e], i) => (
          <span key={p}>
            {i > 0 && " · "}
            <Highlight variant="prime">{p}</Highlight>
            {e > 1 && <sup>{e}</sup>}
          </span>
        ))}
      </div>

      <div className="sylow-table-wrap">
        <table className="sylow-table">
          <thead>
            <tr>
              <th className="th-col-prime">prime p</th>
              <th className="th-col-order">|P| = p<sup>n</sup></th>
              <th className="th-col-m">m = |G|/p<sup>n</sup></th>
              <th className="th-col-np">n<sub>p</sub> (divisors of m with n<sub>p</sub> ≡ 1 mod p)</th>
              <th className="th-col-forced">forced?</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.p}>
                <td className="prime-cell">{r.p}</td>
                <td className="order-cell">{r.pn}<small className="order-hint"> = {r.p}<sup>{r.e}</sup></small></td>
                <td className="index-cell">{r.m}</td>
                <td>
                  {r.candidates.length > 0 ? (
                    r.candidates.map((c, i) => (
                      <span key={c}>
                        {i > 0 && ", "}
                        {r.forcedToOne && c === 1 ? (
                          <strong className="hl-prime">{c}</strong>
                        ) : (
                          String(c)
                        )}
                      </span>
                    ))
                  ) : (
                    <em className="hl-prime">∅</em>
                  )}
                </td>
                <td className={r.forcedToOne ? "cell-unique" : r.forced ? "cell-forced" : "cell-maybe"}>
                  {r.forcedToOne ? (
                    <>YES, n{sub(r.p)} = 1 ⇒ normal</>
                  ) : r.forced ? (
                    <>n{sub(r.p)} = {r.candidates[0]}</>
                  ) : (
                    "no, multiple options"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="conclusion">
        {forcedParts.length > 0 ? (
          <>
            <strong>For |G| = {selected}:</strong>{" "}
            {forcedParts.map((part, i) => (
              <span key={i}>
                {i > 0 && "; "}
                {part}
              </span>
            ))}.
          </>
        ) : (
          <>For |G| = {selected}, Sylow III alone does not force any Sylow subgroup to be unique. Further analysis would be needed.</>
        )}
      </p>
    </InteractivePanel>
  );
}

function sub(n: number): string {
  const subs: Record<string, string> = { "0": "₀", "1": "₁", "2": "₂", "3": "₃", "4": "₄", "5": "₅", "6": "₆", "7": "₇", "8": "₈", "9": "₉" };
  return String(n).split("").map((c) => subs[c] ?? c).join("");
}

export function SylowGuide() {
  return (
    <>
      <Masthead
        volume="Vol. V, Group Theory"
        number="No. 06 / Sylow Edition"
        author="Pr. Tomás"
        title={<>The <em>p</em>-Group <span className="small">&</span> the Three<br /><em>Sylow</em> Theorems</>}
        subtitle="(a structural census of finite groups, prime by prime)"
        meta={[
          { label: "Definitions" },
          { label: "Theorems I · II · III" },
          { label: "Worked Examples" },
          { label: "Applications" },
        ]}
      />

      <main id="main-content">
        <TableOfContents
          entries={[
            { href: "#why", label: <>Why <em>p</em>-groups?</> },
            { href: "#defs", label: "Core Definitions" },
            { href: "#examples", label: "Concrete Examples" },
            { href: "#thm1", label: "Sylow I: Existence" },
            { href: "#thm2", label: "Sylow II: Conjugacy" },
            { href: "#thm3", label: "Sylow III: Counting" },
            { href: "#explorer", label: "Sylow Explorer" },
            { href: "#apps", label: "Applications" },
          ]}
        />

        <section id="why" aria-labelledby="sec-why">
          <ChapterMark>Prologue</ChapterMark>
          <Heading id="sec-why">Why study <em>p</em>-groups?</Heading>
          <Lede>Primes are the atoms of arithmetic. Sylow's theorems say they are also, in a precise sense, the atoms of group structure.</Lede>
          <DropCap>Lagrange's theorem tells us that the order of any subgroup of a finite group <Math>{"G"}</Math> must divide <Math>{"|G|"}</Math>. This is a strong constraint, but it leaves a haunting question: <em>does the converse hold?</em> If <Math>{"d"}</Math> divides <Math>{"|G|"}</Math>, must there exist a subgroup of order <Math>{"d"}</Math>?</DropCap>
          <p>In general, <strong>no</strong>. The alternating group <Math>{"A_4"}</Math> has order 12 but no subgroup of order 6. Yet remarkably, when <Math>{"d"}</Math> is a prime power <Math>{"p^k"}</Math> that divides <Math>{"|G|"}</Math>, a subgroup of order <Math>{"d"}</Math> <em>always</em> exists. This partial converse to Lagrange, and the rich theory governing the resulting subgroups, is the work of Ludwig Sylow (1872).</p>
          <p>Sylow's theorems form the single most powerful tool for analyzing finite groups of small or moderate order. They are how one proves, for instance, that every group of order 15 is cyclic, or that there is no simple group of order 200.</p>
        </section>

        <Ornament />

        <section id="defs" aria-labelledby="sec-defs">
          <ChapterMark>Chapter I</ChapterMark>
          <Heading id="sec-defs">Core <em>definitions</em></Heading>
          <Lede>Fix a prime <Math>{"p"}</Math> throughout. The vocabulary below carves a finite group into prime-flavored pieces.</Lede>

          <DefinitionCard tag="Definition 1" title={<><em>p</em>-group</>}>
            <p>A finite group <Math>{"G"}</Math> is a <Highlight variant="prime">p-group</Highlight> if its order is a power of <Math>{"p"}</Math>:</p>
            <Math display>{"|G| = p^n \\qquad \\text{for some } n \\geq 0."}</Math>
            <p>Equivalently (for finite groups, by Cauchy's theorem): every element of <Math>{"G"}</Math> has order a power of <Math>{"p"}</Math>.</p>
          </DefinitionCard>

          <IntuitionBox>
            A <Math>{"p"}</Math>-group is a group "made entirely of the prime <Math>{"p"}</Math>." Like <Math>{"\\mathbb{Z}/8"}</Math> or <Math>{"\\mathbb{Z}/2 \\times \\mathbb{Z}/4"}</Math> for <Math>{"p=2"}</Math>: every element's order is 1, 2, 4, or 8. There is nowhere for a different prime to hide. This rigidity gives <Math>{"p"}</Math>-groups remarkable internal structure: they always have a nontrivial center, they are always nilpotent, and they admit a chief series with cyclic factors of order <Math>{"p"}</Math>.
          </IntuitionBox>

          <DefinitionCard tag="Definition 2" title={<><em>p</em>-subgroup</>}>
            <p>Let <Math>{"G"}</Math> be any finite group. A subgroup <Math>{"H \\leq G"}</Math> is a <Highlight variant="prime">p-subgroup</Highlight> of <Math>{"G"}</Math> if <Math>{"H"}</Math> is itself a <Math>{"p"}</Math>-group, that is, <Math>{"|H| = p^k"}</Math> for some <Math>{"k \\geq 0"}</Math>.</p>
            <p>Note: <Math>{"H"}</Math> need not be a "p-group on its own." The condition is purely about <Math>{"|H|"}</Math>. Even the trivial subgroup <Math>{"\\{e\\}"}</Math> counts (as <Math>{"p^0 = 1"}</Math>), though this is rarely interesting.</p>
          </DefinitionCard>

          <DefinitionCard tag="Definition 3" title={<>Sylow <em>p</em>-subgroup</>}>
            <p>Write <Math>{"|G| = p^n m"}</Math> where <Math>{"\\gcd(p, m) = 1"}</Math>, that is, <Math>{"p^n"}</Math> is the <em>largest</em> power of <Math>{"p"}</Math> dividing <Math>{"|G|"}</Math>.</p>
            <p>A <Highlight variant="prime">Sylow p-subgroup</Highlight> of <Math>{"G"}</Math> is a p-subgroup <Math>{"P \\leq G"}</Math> of <em>maximal possible</em> order:</p>
            <Math display>{"|P| = p^n."}</Math>
            <p>The set of all Sylow <Math>{"p"}</Math>-subgroups of <Math>{"G"}</Math> is denoted <Math>{"\\mathrm{Syl}_p(G)"}</Math>, and its size is denoted <Math>{"n_p = |\\mathrm{Syl}_p(G)|"}</Math>.</p>
          </DefinitionCard>

          <IntuitionBox>
            Decompose <Math>{"|G| = p^n \\cdot m"}</Math> with <Math>{"\\gcd(p,m)=1"}</Math>. The Sylow <Math>{"p"}</Math>-subgroup absorbs <em>all</em> of the prime <Math>{"p"}</Math> in <Math>{"|G|"}</Math>: it is the largest "p-shaped chunk" you can cut out of <Math>{"G"}</Math>. Different primes give different chunks. Sylow's theorems will say (i) these chunks <em>exist</em>, (ii) all chunks for the same prime are conjugate hence isomorphic, and (iii) their count is severely constrained.
          </IntuitionBox>

          <DefinitionCard tag="Definition 4" variant="moss" title="Normalizer (a tool we will need)">
            <p>For a subgroup <Math>{"H \\leq G"}</Math>, the <Highlight variant="moss">normalizer</Highlight> of <Math>{"H"}</Math> is</p>
            <Math display>{"N_G(H) = \\{g \\in G : gHg^{-1} = H\\}."}</Math>
            <p>It is the largest subgroup of <Math>{"G"}</Math> in which <Math>{"H"}</Math> sits as a normal subgroup. Crucially: <Math>{"H \\trianglelefteq G"}</Math> if and only if <Math>{"N_G(H) = G"}</Math>.</p>
          </DefinitionCard>
        </section>

        <section id="examples" aria-labelledby="sec-examples">
          <ChapterMark>Chapter II</ChapterMark>
          <Heading id="sec-examples">Examples: finding the <em>p</em>-pieces</Heading>
          <Lede>Before stating Sylow's theorems, let us gather some concrete sightings of these objects in the wild.</Lede>

          <ExampleBox tag="Example 1: Inside S₄">
            <p>The symmetric group <Math>{"S_4"}</Math> has order <Math>{"|S_4| = 24 = 2^3 \\cdot 3"}</Math>.</p>
            <ul className="example-list">
              <li><strong>Sylow 2-subgroups</strong> have order 8. There are 3 of them, each isomorphic to the dihedral group <Math>{"D_4"}</Math>. (One example: <Math>{"\\langle (1234), (13) \\rangle"}</Math>.)</li>
              <li><strong>Sylow 3-subgroups</strong> have order 3. There are 4 of them, each <Math>{"\\langle (abc) \\rangle"}</Math> for some 3-cycle, isomorphic to <Math>{"\\mathbb{Z}/3"}</Math>.</li>
            </ul>
            <p>Notice <Math>{"3 \\mid 24/8 = 3"}</Math> and <Math>{"3 \\equiv 1 \\pmod 2"}</Math>; also <Math>{"4 \\mid 24/3 = 8"}</Math> and <Math>{"4 \\equiv 1 \\pmod 3"}</Math>. These are Sylow III in action.</p>
          </ExampleBox>

          <ExampleBox tag="Example 2: Inside A₅ (order 60)">
            <p>Here <Math>{"|A_5| = 60 = 2^2 \\cdot 3 \\cdot 5"}</Math>, so we expect three flavors of Sylow subgroup.</p>
            <ul className="example-list">
              <li><Math>{"\\mathrm{Syl}_2(A_5)"}</Math>: order 4. There are <strong>5</strong>, each <Math>{"\\cong \\mathbb{Z}/2 \\times \\mathbb{Z}/2"}</Math> (the Klein four-group).</li>
              <li><Math>{"\\mathrm{Syl}_3(A_5)"}</Math>: order 3. There are <strong>10</strong>, each <Math>{"\\cong \\mathbb{Z}/3"}</Math>.</li>
              <li><Math>{"\\mathrm{Syl}_5(A_5)"}</Math>: order 5. There are <strong>6</strong>, each <Math>{"\\cong \\mathbb{Z}/5"}</Math>.</li>
            </ul>
            <p>None of these counts is 1, meaning none of these Sylow subgroups is normal, and that is precisely why <Math>{"A_5"}</Math> is <em>simple</em>.</p>
          </ExampleBox>
        </section>

        <Ornament />

        <section id="thm1" aria-labelledby="sec-thm1">
          <ChapterMark>Chapter III · Theorem I</ChapterMark>
          <Heading id="sec-thm1">Sylow I: <em>existence</em></Heading>
          <Lede>Prime-power subgroups exist for every prime power dividing |G|. This is the partial converse to Lagrange.</Lede>

          <TheoremBlock tag="FIRST SYLOW THEOREM" title={<>Existence of <em>p</em>-subgroups</>}>
            <p>Let <Math>{"G"}</Math> be a finite group and <Math>{"p"}</Math> a prime. Write <Math>{"|G| = p^n m"}</Math> with <Math>{"\\gcd(p,m)=1"}</Math>. Then:</p>
            <ol>
              <li>For every <Math>{"0 \\leq k \\leq n"}</Math>, the group <Math>{"G"}</Math> contains a subgroup of order <Math>{"p^k"}</Math>.</li>
              <li>In particular, <Math>{"G"}</Math> contains a Sylow <Math>{"p"}</Math>-subgroup (take <Math>{"k = n"}</Math>).</li>
              <li>Every <Math>{"p"}</Math>-subgroup of <Math>{"G"}</Math> is contained in some Sylow <Math>{"p"}</Math>-subgroup.</li>
            </ol>
          </TheoremBlock>

          <ProofSketch>
            <p>The standard argument proceeds by induction on <Math>{"|G|"}</Math>, splitting on whether <Math>{"p"}</Math> divides <Math>{"|Z(G)|"}</Math>. If yes, take a central element of order <Math>{"p"}</Math> (Cauchy), quotient by it, and inductively lift subgroups. If no, the class equation forces some conjugacy class of size coprime to <Math>{"p"}</Math>, which forces a subgroup whose index is coprime to <Math>{"p"}</Math>. Induct into it. <em>Cauchy's theorem</em> is the base case.</p>
          </ProofSketch>

          <p>The most striking consequence is that Sylow <Math>{"p"}</Math>-subgroups <em>always exist</em>. Existence is no small claim: for general divisors <Math>{"d"}</Math> of <Math>{"|G|"}</Math>, no such guarantee holds.</p>
        </section>

        <section id="thm2" aria-labelledby="sec-thm2">
          <ChapterMark>Chapter IV · Theorem II</ChapterMark>
          <Heading id="sec-thm2">Sylow II: <em>conjugacy</em></Heading>
          <Lede>All Sylow p-subgroups of G look identical: they form a single conjugacy class.</Lede>

          <TheoremBlock tag="SECOND SYLOW THEOREM" title={<>All Sylows are <em>conjugate</em></>}>
            <p>Let <Math>{"G"}</Math> be a finite group and <Math>{"p"}</Math> a prime. Then:</p>
            <ol>
              <li>Any two Sylow <Math>{"p"}</Math>-subgroups <Math>{"P, Q \\leq G"}</Math> are <strong>conjugate</strong>: there exists <Math>{"g \\in G"}</Math> with <Math>{"gPg^{-1} = Q"}</Math>.</li>
              <li>Consequently, all Sylow <Math>{"p"}</Math>-subgroups are isomorphic.</li>
              <li>Equivalent restatement: <Math>{"\\mathrm{Syl}_p(G)"}</Math> is a single orbit under the conjugation action of <Math>{"G"}</Math>.</li>
            </ol>
          </TheoremBlock>

          <IntuitionBox>
            Sylow II says the Sylow <Math>{"p"}</Math>-subgroups are not just all the same size: they are all literally the same subgroup, viewed from different "angles" inside <Math>{"G"}</Math>. The angle is conjugation by <Math>{"g"}</Math>. So if you understand <em>one</em> Sylow <Math>{"p"}</Math>-subgroup, you understand them all (up to relabeling). This also means: <strong><Math>{"P"}</Math> is the unique Sylow <Math>{"p"}</Math>-subgroup iff <Math>{"P \\trianglelefteq G"}</Math></strong>, because a normal subgroup has only itself as a conjugate.
          </IntuitionBox>

          <ExampleBox tag="Sanity check in S₃">
            <p>The three Sylow 2-subgroups <Math>{"\\langle(12)\\rangle, \\langle(13)\\rangle, \\langle(23)\\rangle"}</Math> are conjugate: e.g. <Math>{"(123)\\langle(12)\\rangle(123)^{-1} = \\langle(23)\\rangle"}</Math>. They are all <Math>{"\\cong \\mathbb{Z}/2"}</Math>, as Sylow II demands.</p>
            <p>Meanwhile <Math>{"A_3 = \\langle(123)\\rangle"}</Math> is the <em>unique</em> Sylow 3-subgroup, and indeed <Math>{"A_3 \\trianglelefteq S_3"}</Math>.</p>
          </ExampleBox>
        </section>

        <section id="thm3" aria-labelledby="sec-thm3">
          <ChapterMark>Chapter V · Theorem III</ChapterMark>
          <Heading id="sec-thm3">Sylow III: <em>counting</em></Heading>
          <Lede>The number of Sylow p-subgroups is sharply constrained. This is the workhorse of Sylow applications.</Lede>

          <TheoremBlock tag="THIRD SYLOW THEOREM" title={<>The numerology of <em>n</em><sub>p</sub></>}>
            <p>Let <Math>{"|G| = p^n m"}</Math> with <Math>{"\\gcd(p,m)=1"}</Math>, and let <Math>{"n_p = |\\mathrm{Syl}_p(G)|"}</Math>. Then:</p>
            <ol>
              <li><Math>{"n_p \\equiv 1 \\pmod{p}"}</Math>,</li>
              <li><Math>{"n_p \\mid m"}</Math> (equivalently, <Math>{"n_p"}</Math> divides <Math>{"|G|/p^n"}</Math>),</li>
              <li><Math>{"n_p = [G : N_G(P)]"}</Math> for any Sylow <Math>{"p"}</Math>-subgroup <Math>{"P"}</Math>.</li>
            </ol>
          </TheoremBlock>

          <IntuitionBox>
            The two divisibility constraints, <Math>{"n_p \\equiv 1 \\pmod{p}"}</Math> and <Math>{"n_p \\mid m"}</Math>, typically narrow <Math>{"n_p"}</Math> to a tiny shortlist, often forcing <Math>{"n_p = 1"}</Math>. And <Math>{"n_p = 1"}</Math> is the magic outcome: it means there is a <em>unique</em> Sylow <Math>{"p"}</Math>-subgroup, which is therefore <em>normal</em> in <Math>{"G"}</Math>. Normal subgroups give us quotients, and quotients give us induction.
          </IntuitionBox>

          <ProofSketch label={"WHY n_p = [G:N_G(P)]?"}>
            <p>Let <Math>{"G"}</Math> act on <Math>{"\\mathrm{Syl}_p(G)"}</Math> by conjugation. By Sylow II, this action is transitive: there is one orbit, all of <Math>{"\\mathrm{Syl}_p(G)"}</Math>. The stabilizer of a Sylow subgroup <Math>{"P"}</Math> under conjugation is exactly <Math>{"N_G(P)"}</Math> by definition of the normalizer. Orbit-Stabilizer then gives <Math>{"n_p = [G : N_G(P)]"}</Math>.</p>
          </ProofSketch>
        </section>

        <Ornament />

        <section id="explorer" aria-labelledby="sec-explorer">
          <ChapterMark>Chapter VI</ChapterMark>
          <Heading id="sec-explorer">The Sylow <em>explorer</em></Heading>
          <Lede>Pick an order |G| and watch the Sylow constraints eat away at the possibilities.</Lede>

          <SylowExplorer />

          <p className="conclusion">When the rightmost column says <strong className="hl-moss">YES, must equal 1</strong>, that means Sylow III alone forces a normal Sylow subgroup. This single observation drives most "classify groups of order N" arguments.</p>
        </section>

        <Ornament />

        <section id="apps" aria-labelledby="sec-apps">
          <ChapterMark>Chapter VII</ChapterMark>
          <Heading id="sec-apps"><em>Applications</em>: Sylow at work</Heading>
          <Lede>A small gallery showing how the three theorems combine to classify and constrain.</Lede>

          <ApplicationCard number={1} title={<>Every group of order 15 is cyclic</>}>
            <p>Let <Math>{"|G| = 15 = 3 \\cdot 5"}</Math>. By Sylow III: <Math>{"n_3 \\equiv 1 \\pmod 3"}</Math> and <Math>{"n_3 \\mid 5"}</Math>, so <Math>{"n_3 \\in \\{1, 5\\}"}</Math>, but <Math>{"5 \\not\\equiv 1 \\pmod 3"}</Math>, forcing <Math>{"n_3 = 1"}</Math>. Similarly <Math>{"n_5 \\equiv 1 \\pmod 5"}</Math> and <Math>{"n_5 \\mid 3"}</Math> gives <Math>{"n_5 = 1"}</Math>.</p>
            <p>So the unique Sylow 3-subgroup <Math>{"P_3"}</Math> and unique Sylow 5-subgroup <Math>{"P_5"}</Math> are both normal in <Math>{"G"}</Math>. They have coprime orders, so <Math>{"P_3 \\cap P_5 = \\{e\\}"}</Math>, and <Math>{"|P_3 P_5| = 15 = |G|"}</Math>. Therefore <Math>{"G \\cong P_3 \\times P_5 \\cong \\mathbb{Z}/3 \\times \\mathbb{Z}/5 \\cong \\mathbb{Z}/15"}</Math>.</p>
          </ApplicationCard>

          <ApplicationCard number={2} title={<>No simple group of order 200</>}>
            <p><Math>{"|G| = 200 = 2^3 \\cdot 5^2"}</Math>. By Sylow III: <Math>{"n_5 \\equiv 1 \\pmod 5"}</Math> and <Math>{"n_5 \\mid 8"}</Math>. Divisors of 8 that are <Math>{"\\equiv 1 \\pmod 5"}</Math>: only <Math>{"n_5 = 1"}</Math>.</p>
            <p>So the Sylow 5-subgroup is normal. Any group of order 200 has a nontrivial proper normal subgroup: none is simple.</p>
          </ApplicationCard>

          <ApplicationCard number={3} title={<>Groups of order <em>pq</em> (<em>p</em> &lt; <em>q</em> primes)</>}>
            <p>By Sylow III, <Math>{"n_q \\equiv 1 \\pmod q"}</Math> and <Math>{"n_q \\mid p"}</Math>. Since <Math>{"p < q"}</Math>, the only divisor of <Math>{"p"}</Math> that is <Math>{"\\equiv 1 \\pmod q"}</Math> is 1. So the Sylow <Math>{"q"}</Math>-subgroup is always normal.</p>
            <p>Whether <Math>{"G"}</Math> is forced to be cyclic depends on <Math>{"p"}</Math> and <Math>{"q"}</Math>: if <Math>{"p \\nmid q-1"}</Math>, the Sylow <Math>{"p"}</Math>-subgroup is also normal and <Math>{"G \\cong \\mathbb{Z}/pq"}</Math>. If <Math>{"p \\mid q-1"}</Math> (e.g. <Math>{"|G| = 6"}</Math>, where <Math>{"2 \\mid 2"}</Math>), there is a nontrivial semidirect product, exactly the structure you have seen as <Math>{"\\mathbb{Z}/3 \\rtimes \\mathbb{Z}/2 \\cong S_3"}</Math>.</p>
          </ApplicationCard>

          <ApplicationCard number={4} title={<>p-groups have nontrivial center</>}>
            <p>If <Math>{"|G| = p^n"}</Math> with <Math>{"n \\geq 1"}</Math>, then <Math>{"|Z(G)| > 1"}</Math>. Proof via the class equation: <Math>{"|G| = |Z(G)| + \\sum [G : C_G(x_i)]"}</Math> where the sum is over non-central conjugacy class reps. Each index <Math>{"[G:C_G(x_i)]"}</Math> is a power of <Math>{"p"}</Math> greater than 1 (since <Math>{"x_i \\notin Z(G)"}</Math>), so <Math>{"p"}</Math> divides each summand, hence <Math>{"p \\mid |Z(G)|"}</Math>.</p>
            <Corollary>every group of order <Math>{"p^2"}</Math> is abelian.</Corollary>
          </ApplicationCard>

          <ApplicationCard number={5} title={<>Sylow as a structure-extraction tool</>}>
            <p>For any finite group <Math>{"G"}</Math>, one obtains a Sylow <Math>{"p"}</Math>-subgroup for <em>each</em> prime <Math>{"p \\mid |G|"}</Math>. When all of them happen to be normal, <Math>{"G"}</Math> decomposes as the direct product of its Sylow subgroups. This is the case for finite <em>nilpotent</em> groups, and is one common definition of nilpotency.</p>
            <p>So Sylow theory turns the prime factorization of <Math>{"|G|"}</Math> into a structural prime factorization of <Math>{"G"}</Math> itself, when conditions allow.</p>
          </ApplicationCard>
        </section>

        <Ornament />

        <section aria-labelledby="sec-coda">
          <ChapterMark>Coda</ChapterMark>
          <Heading id="sec-coda">The <em>moral</em></Heading>
          <p>Lagrange constrains the orders of subgroups. <strong>Sylow constructs them.</strong> Where Lagrange merely whispers "your subgroups can only have orders dividing |G|," Sylow declares: "for every prime power dividing |G|, you <em>have</em> a subgroup; for the maximal such powers, all those subgroups are conjugate; and their count is shaped by a tight modular law."</p>
          <p>Combined with the tools you have already met (orbit-stabilizer, normal subgroups and quotients, semidirect products), the Sylow theorems form a complete toolkit for a first encounter with finite group classification. Next on a typical journey: solvable and nilpotent groups, the Jordan-Hölder theorem, and the simple groups.</p>
        </section>
      </main>

      <Footer author="Tomás" series="group theory series" volume="Vol. V" edition="Sylow" />
    </>
  );
}