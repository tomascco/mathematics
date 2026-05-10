import "./styles.css";
import type { ReactNode } from "react";

interface ExampleBoxProps {
  tag?: string;
  children: ReactNode;
}

export function ExampleBox({ tag, children }: ExampleBoxProps) {
  return (
    <div className="example" role="note" aria-label={tag ?? "Example"}>
      <div className="example-tag">{tag ?? "EXAMPLE"}</div>
      {children}
    </div>
  );
}