import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/global.css";
import "./styles/math.css";
import { SylowGuide } from "./guides/sylow/SylowGuide";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SylowGuide />
  </StrictMode>,
);