import { Flex, Text, Card } from "@radix-ui/themes";
import s from "./Recipes.module.css";
import React from "react";

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

type RecipePageProps = {
  title: string;
  description: string;
  component: () => JSX.Element;
  body: () => JSX.Element;
};

export const RecipePage = ({ title, description, component, body }: RecipePageProps) => {
  const ComponentTagName = component;
  const BodyTagName = body;

  return (
    <Flex className={s.recipe_info_container} direction="column" mx="auto" gap="5">
      <ComponentDisplay>
        <ComponentTagName />
      </ComponentDisplay>
      <ComponentTitle>{title}</ComponentTitle>
      <ComponentDescription>{description}</ComponentDescription>
      <ComponentContent>
        <BodyTagName />
      </ComponentContent>
    </Flex>
  );
};
