import { Text, Box, Button, Flex, Grid, Card, TextField, ScrollArea } from "@radix-ui/themes";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import s from "./Recipes.module.css";

export const Recipes = () => {
  const recipeTypes = [
    {
      name: "Components",
      value: "Components",
    },
    {
      name: "Scripts",
      value: "Scripts",
    },
    {
      name: "Hooks",
      value: "Hooks",
    },
    {
      name: "Templates",
      value: "Templates",
    },
  ];

  const ComponentDisplay = ({ children }: { children: React.ReactNode }) => (
    <Card className={s.component_display} mx="auto">
      <Flex align="center" justify="center" height="100%">
        {children}
      </Flex>
    </Card>
  );

  const ComponentTitle = ({ children }: { children: React.ReactNode }) => (
    <Text className={s.component_title} size="8" weight="bold">
      {children}
    </Text>
  );

  const ComponentDescription = ({ children }: { children: React.ReactNode }) => (
    <Text className={s.component_description} size="4" weight="bold">
      {children}
    </Text>
  );

  const ComponentContent = ({ children }: { children: React.ReactNode }) => (
    <Flex className={s.component_content} direction="column" gap="3">
      {children}
    </Flex>
  );

  const Codeblock = ({ children }: { children: React.ReactNode }) => (
    <Box className={s.codeblock}>
      <pre>{children}</pre>
    </Box>
  );

  return (
    <Flex className={s.recipes_container} mx="auto">
      <Flex className={s.recipes_sidebar} direction="column" justify="center" gap="7" px="4">
        {recipeTypes.map((recipeType) => (
          <Button className={s.recipes_sidebar_button} key={recipeType.value}>
            {recipeType.name}
          </Button>
        ))}
      </Flex>
      <Flex className={s.recipes_main} direction="column">
        <ScrollArea scrollbars="vertical">
          <Flex className={s.recipe_info_container} direction="column" mx="auto" gap="5">
            <ComponentDisplay>
              <TextField.Root>
                <TextField.Slot>
                  <MagnifyingGlassIcon height="16" width="16" />
                </TextField.Slot>
                <TextField.Input placeholder="Search the docs…" />
              </TextField.Root>
            </ComponentDisplay>
            <ComponentTitle>Debounced Search</ComponentTitle>
            <ComponentDescription>
              A custom hook that delays a search query and returns the results.
            </ComponentDescription>
            <ComponentContent>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellendus atque
                ullam ducimus quas quae modi tempore dicta! Enim quaerat at eaque porro voluptatibus
                dolores eveniet obcaecati aliquam consequuntur. Iure ipsa error voluptatem quis
                dolorum architecto quasi accusamus, fugit, perspiciatis, eligendi maiores saepe
                distinctio aliquid deserunt consequuntur sint rem fuga voluptate? Tempora
                praesentium, veniam voluptatum accusamus provident, consequuntur, error modi debitis
                nam eligendi eum! Cum, repudiandae nihil. Veniam voluptate laudantium eaque
                perspiciatis? Modi excepturi laboriosam praesentium, placeat delectus voluptas
                reiciendis amet provident mollitia, a dolores?
              </Text>
              <Codeblock>
                {`import { useState, useEffect } from "react";
            
export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebouncedValue(value);
    }
    , delay);

    return () => {
      clearTimeout(handleDebounce);
    }
  }
  , [value, delay]);

  return debouncedValue;

};`}
              </Codeblock>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellendus atque
                ullam ducimus quas quae modi tempore dicta! Enim quaerat at eaque porro voluptatibus
                dolores eveniet obcaecati aliquam consequuntur. Iure ipsa error voluptatem quis
                dolorum architecto quasi accusamus, fugit, perspiciatis, eligendi maiores saepe
                distinctio aliquid deserunt consequuntur sint rem fuga voluptate? Tempora
                praesentium, veniam voluptatum accusamus provident, consequuntur, error modi debitis
                nam eligendi eum! Cum, repudiandae nihil. Veniam voluptate laudantium eaque
                perspiciatis? Modi excepturi laboriosam praesentium, placeat delectus voluptas
                reiciendis amet provident mollitia, a dolores?
              </Text>
            </ComponentContent>
          </Flex>
        </ScrollArea>
      </Flex>
    </Flex>
  );
};
