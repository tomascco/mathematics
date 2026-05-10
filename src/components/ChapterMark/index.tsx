import "./styles.css";
import type { ReactNode } from "react";

interface ChapterMarkProps {
  children: ReactNode;
}

export function ChapterMark({ children }: ChapterMarkProps) {
  return (
    <div className="chapter-mark">
      {children}
    </div>
  );
}