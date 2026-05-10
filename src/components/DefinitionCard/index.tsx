import "./styles.css";
import type { ReactNode } from "react";

interface DefinitionCardProps {
  tag: string;
  title: ReactNode;
  children: ReactNode;
  variant?: "default" | "moss";
}

export function DefinitionCard({
  tag,
  title,
  children,
  variant = "default",
}: DefinitionCardProps) {
  return (
    <div className={`def def-${variant}`} role="definition" aria-label={tag}>
      <div className={`def-tag def-tag-${variant}`}>{tag}</div>
      <div className="def-title">{title}</div>
      <div className="def-body">{children}</div>
    </div>
  );
}