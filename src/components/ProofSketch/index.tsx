import "./styles.css";
import type { ReactNode } from "react";

interface ProofSketchProps {
  label?: string;
  children: ReactNode;
}

export function ProofSketch({ label = "PROOF SKETCH", children }: ProofSketchProps) {
  return (
    <div className="sketch" role="note" aria-label={label}>
      <div className="sketch-tag">{label}</div>
      {children}
    </div>
  );
}