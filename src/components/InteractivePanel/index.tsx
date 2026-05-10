import "./styles.css";
import type { ReactNode } from "react";

interface InteractivePanelProps {
  title: ReactNode;
  tag?: string;
  children: ReactNode;
}

export function InteractivePanel({
  title,
  tag,
  children,
}: InteractivePanelProps) {
  return (
    <div className="panel">
      <div className="panel-header">
        <div className="panel-title">{title}</div>
        {tag && <div className="panel-tag">{tag}</div>}
      </div>
      {children}
    </div>
  );
}