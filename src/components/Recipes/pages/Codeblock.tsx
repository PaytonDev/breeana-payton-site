import { Box } from "@radix-ui/themes";
import s from "../Recipes.module.css";

export const Codeblock = ({ children }: { children: React.ReactNode }) => (
  <Box className={s.codeblock}>
    <pre>{children}</pre>
  </Box>
);
