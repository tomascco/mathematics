import "./styles.css";
import type { ReactNode } from "react";

interface TheoremBlockProps {
  tag: string;
  title: ReactNode;
  children: ReactNode;
}

export function TheoremBlock({ tag, title, children }: TheoremBlockProps) {
  return (
    <div className="thm" role="note" aria-label={tag}>
      <div className="thm-tag">{tag}</div>
      <div className="thm-title">{title}</div>
      <div className="thm-body">{children}</div>
    </div>
  );
}