import "./styles.css";
import type { ReactNode } from "react";

interface LemmaProps {
  tag: string;
  title?: ReactNode;
  children: ReactNode;
}

export function Lemma({ tag, title, children }: LemmaProps) {
  return (
    <div className="lemma" role="note" aria-label={tag}>
      <div className="lemma-head">
        <span className="lemma-tag">{tag}</span>
        {title ? <span className="lemma-title">{title}</span> : null}
      </div>
      <div className="lemma-body">{children}</div>
    </div>
  );
}
