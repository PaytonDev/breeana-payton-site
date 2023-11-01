import { Text, Box, Button, Flex, Grid } from "@radix-ui/themes";
import s from "./Recipes.module.css";

export const Recipes = () => (
  <Box className={s.recipes_container}>
    <Flex>
      <Box>Sidebar</Box>
      <Box>Main</Box>
    </Flex>
  </Box>
);
