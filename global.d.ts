import RevealStatic from "./reveal-d";

declare global {
  interface Window {
    Reveal: RevealStatic;
    revealMdPlugins?: any;
    hljs?: any;
  }
}
