import "./styles.css";
import type { ReactNode } from "react";

interface PropositionProps {
  tag: string;
  title: ReactNode;
  children: ReactNode;
}

export function Proposition({ tag, title, children }: PropositionProps) {
  return (
    <div className="prop" role="note" aria-label={tag}>
      <div className="prop-tag">{tag}</div>
      <div className="prop-title">{title}</div>
      <div className="prop-body">{children}</div>
    </div>
  );
}
