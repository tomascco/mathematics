import "./styles.css";
interface HighlightProps {
  variant: "prime" | "moss" | "slate" | "gilt" | "ink";
  children: React.ReactNode;
}

export function Highlight({ variant, children }: HighlightProps) {
  return <span className={`hl hl-${variant}`}>{children}</span>;
}