import { Masthead, Ornament } from "../components";

const GUIDES = [
  {
    slug: "sylow",
    title: "The Sylow Theorems",
    subtitle: "Subgroup enumeration in finite groups",
    volume: "Vol. I",
    number: "No. 1",
    meta: [
      { label: "Group Theory" },
      { label: "Finite Groups" },
    ],
  },
];

export function Index() {
  return (
    <div className="index-page">
      <Masthead
        volume="Mathematical Guides"
        number="Press Room"
        author="Mathematics"
        title="Guides"
        subtitle="An ongoing collection of mathematical explorations"
        meta={[{ label: "Design System: Press Room" }]}
      />

      <main className="index-main">
        <Ornament />
        <nav className="guide-list">
          {GUIDES.map((guide) => (
            <a key={guide.slug} href="/guides/sylow" className="guide-entry">
              <div className="guide-entry-top">
                <span className="guide-vol">{guide.volume}</span>
                <span className="guide-num">{guide.number}</span>
              </div>
              <h2 className="guide-title">{guide.title}</h2>
              <p className="guide-sub">{guide.subtitle}</p>
              <div className="guide-meta">
                {guide.meta.map((m) => (
                  <span key={m.label} className="guide-tag">{m.label}</span>
                ))}
              </div>
            </a>
          ))}
        </nav>
        <Ornament />
      </main>

      <footer className="index-footer">
        Composed in Press Room · Fraunces + KaTeX + JetBrains Mono
      </footer>
    </div>
  );
}