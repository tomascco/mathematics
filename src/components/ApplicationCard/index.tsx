import "./styles.css";
import type { ReactNode } from "react";

interface ApplicationCardProps {
  number: number;
  title: ReactNode;
  children: ReactNode;
}

export function ApplicationCard({
  number,
  title,
  children,
}: ApplicationCardProps) {
  return (
    <div className="app">
      <div className="app-num">{number}</div>
      <div className="app-title">{title}</div>
      {children}
    </div>
  );
}