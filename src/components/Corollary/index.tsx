import "./styles.css";
import type { ReactNode } from "react";

interface CorollaryProps {
  label?: string;
  children: ReactNode;
}

export function Corollary({ label = "COROLLARY", children }: CorollaryProps) {
  return (
    <div className="corollary" role="note" aria-label={label}>
      <span className="corollary-tag">{label}</span>
      <span className="corollary-body">{children}</span>
    </div>
  );
}
