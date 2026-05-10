import "./styles.css";
import type { ReactNode } from "react";

interface TOCEntry {
  href: string;
  label: ReactNode;
}

interface TableOfContentsProps {
  entries: TOCEntry[];
  title?: string;
}

export function TableOfContents({
  entries,
  title = "Table of Contents",
}: TableOfContentsProps) {
  return (
    <nav className="toc" aria-label="Table of contents">
      <div className="toc-title">{title}</div>
      <ol>
        {entries.map((e) => (
          <li key={e.href}>
            <a href={e.href}>{e.label}</a>
          </li>
        ))}
      </ol>
    </nav>
  );
}