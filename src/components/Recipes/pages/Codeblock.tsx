import s from "../Recipes.module.css";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

type CodeblockProps = {
  children: string | string[];
  language?: string;
};

const customStyle: { [key: string]: React.CSSProperties } = {
  "code[class*='language-']": {
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  "pre[class*='language-']": {
    textShadow: "0 1px rgba(0, 0, 0, 0.3)",
    fontFamily: "Inconsolata, Monaco, Consolas, 'Courier New', Courier, monospace",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.5",
    MozTabSize: "4",
    OTabSize: "4",
    tabSize: "4",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1em",
    margin: ".5em 0",
    overflow: "auto",
    borderRadius: "0.3em",
    backgroundColor: "#1b2932",
  },
  ':not(pre) > code[class*="language-"]': {
    backgroundColor: "#1b2932",
    padding: ".1em",
    borderRadius: ".3em",
  },
  pre: {
    backgroundColor: "#1b2932",
  },
  comment: {
    color: "#5b858b",
  },
  punctuation: {
    color: "#d67e5c",
  },
  ".namespace": {
    opacity: ".7",
    color: "#e66533",
  },

  keyword: {
    color: "#df769b",
  },
  tag: {
    color: "#e66533",
  },
  "class-name": {
    color: "#d5971a",
    textDecoration: "underline",
  },
  "control-flow": {
    color: "#df769b",
  },
  boolean: {
    color: "#7060eb",
  },
  constant: {
    color: "#d5971a",
  },
  imports: {
    color: "#e4b781",
  },
  parameter: {
    color: "#e4b781",
  },
  args: {
    color: "#49ace9",
  },
  types: {
    color: "#49ace9",
  },
  symbol: {
    color: "#e4b781",
  },
  deleted: {
    color: "#7060eb",
  },
  number: {
    color: "#7060eb",
  },
  selector: {
    color: "#d67e5c",
  },
  "attr-name": {
    color: "#d5971a",
  },
  string: {
    color: "#49e9a6",
  },
  char: {
    color: "#16b673",
  },
  builtin: {
    color: "rgb(211, 182, 146)",
  },
  inserted: {
    color: "rgb(114, 192, 159)",
  },
  variable: {
    color: "#e66533",
  },
  operator: {
    color: "#Df769b",
  },
  module: {
    color: "#49ace9",
  },
  token: {
    color: "#49ace9",
  },
  entity: {
    color: "#49ace9",
    cursor: "help",
  },
  url: {
    color: "#96CBFE",
  },
  ".language-css .token.string": {
    color: "#87C38A",
  },
  ".style .token.string": {
    color: "#87C38A",
  },
  atrule: {
    color: "#F9EE98",
  },
  "attr-value": {
    color: "#F9EE98",
  },
  function: {
    color: "rgb(168, 140, 0)",
  },
  regex: {
    color: "#E9C062",
  },
  important: {
    color: "#fd971f",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
};

export const Codeblock = ({ children, language = "jsx" }: CodeblockProps) => (
  <SyntaxHighlighter
    language={language}
    className={s.codeblock}
    style={customStyle}
    customStyle={{
      background: "rgba(13, 65, 79, 0.35)",
      color: "#e4b781",
      padding: "1rem",
      borderRadius: "12px",
    }}
  >
    {children}
  </SyntaxHighlighter>
);
