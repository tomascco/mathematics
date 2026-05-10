import "./styles.css";
import type { ReactNode } from "react";

interface MastheadProps {
  volume: string;
  number: string;
  author: string;
  title: ReactNode;
  subtitle?: string;
  meta?: { label: string }[];
}

export function Masthead({
  volume,
  number,
  author,
  title,
  subtitle,
  meta,
}: MastheadProps) {
  return (
    <header className="masthead">
      <div className="masthead-top">
        <span>{volume}</span>
        <span>{number}</span>
        <span>{author}</span>
      </div>
      <h1 className="masthead-title">{title}</h1>
      {subtitle && <p className="masthead-sub">{subtitle}</p>}
      {meta && meta.length > 0 && (
        <div className="masthead-meta">
          {meta.map((m, i) => (
            <span key={i}>{m.label}</span>
          ))}
        </div>
      )}
    </header>
  );
}