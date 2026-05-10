import "./styles.css";
import { useRef, useLayoutEffect } from "react";
import katex from "katex";

interface MathProps {
  children: string;
  display?: boolean;
  ariaLabel?: string;
}

export function Math({ children, display = false, ariaLabel }: MathProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      katex.render(children, ref.current, {
        displayMode: display,
        throwOnError: false,
        strict: false,
      });
    }
  }, [children, display]);

  if (display) {
    return (
      <div className="math-display" role="math" aria-label={ariaLabel ?? children}>
        <span ref={ref} aria-hidden="true" />
      </div>
    );
  }

  return <span ref={ref} role="math" aria-label={ariaLabel ?? children} />;
}