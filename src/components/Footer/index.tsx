import "./styles.css";
interface FooterProps {
  author: string;
  series?: string;
  volume?: string;
  edition?: string;
}

export function Footer({ author, series, volume, edition }: FooterProps) {
  return (
    <footer className="footer">
      {series && <span>{series}</span>}
      {" · "}
      {volume && <span className="accent">{volume}</span>}
      {" · "}
      Composed for <span className="accent">{author}</span>
      {edition && <> · <span className="accent">{edition}</span></>}
    </footer>
  );
}