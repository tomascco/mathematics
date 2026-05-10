import "./styles.css";
import type { ReactNode } from "react";

interface TwoColProps {
  left: ReactNode;
  right: ReactNode;
}

export function TwoCol({ left, right }: TwoColProps) {
  return (
    <div className="two-col">
      <div>{left}</div>
      <div>{right}</div>
    </div>
  );
}