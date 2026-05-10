import "./styles.css";
import type { ReactNode } from "react";

interface DropCapProps {
  children: ReactNode;
}

export function DropCap({ children }: DropCapProps) {
  return <p className="dropcap">{children}</p>;
}