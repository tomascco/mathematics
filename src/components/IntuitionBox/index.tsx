import "./styles.css";
import type { ReactNode } from "react";

interface IntuitionBoxProps {
  children: ReactNode;
}

export function IntuitionBox({ children }: IntuitionBoxProps) {
  return (
    <div className="intuition" role="note" aria-label="Intuition">
      <div className="intuition-tag">{"INTUITION"}</div>
      {children}
    </div>
  );
}