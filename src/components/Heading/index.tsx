import "./styles.css";
import type { ReactNode } from "react";

interface HeadingProps {
  level?: 2 | 3;
  children: ReactNode;
  id?: string;
}

export function Heading({ level = 2, children, id }: HeadingProps) {
  const Tag = `h${level}` as "h2" | "h3";
  const className = level === 2 ? "headline" : "title-heading";

  return (
    <Tag id={id} className={className}>
      {children}
    </Tag>
  );
}