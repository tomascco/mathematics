import "./styles.css";
import type { ReactNode } from "react";

interface LedeProps {
  children: ReactNode;
}

export function Lede({ children }: LedeProps) {
  return <p className="lede">{children}</p>;
}