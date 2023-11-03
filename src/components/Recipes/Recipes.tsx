import {
  Text,
  Box,
  Button,
  Flex,
  DropdownMenu,
  Card,
  TextField,
  ScrollArea,
} from "@radix-ui/themes";
import { useState } from "react";
import { MagnifyingGlassIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import s from "./Recipes.module.css";
import DebouncedSearchFieldInfo from "./pages/DebouncedSearchField";
import MaskedFieldInfo from "./pages/MaskedField";
import { RecipePage } from "./RecipeLayout";

export const Recipes = () => {
  const recipeTypes = [
    {
      name: "Components",
      value: "Components",
      pages: [DebouncedSearchFieldInfo, MaskedFieldInfo],
    },
    {
      name: "Scripts",
      value: "Scripts",
      pages: [DebouncedSearchFieldInfo, MaskedFieldInfo],
    },
    {
      name: "Hooks",
      value: "Hooks",
      pages: [DebouncedSearchFieldInfo, MaskedFieldInfo],
    },
    {
      name: "Templates",
      value: "Templates",
      pages: [DebouncedSearchFieldInfo, MaskedFieldInfo],
    },
  ];

  type RecipeType = "Components" | "Scripts" | "Hooks" | "Templates";
  type PageType = {
    title: string;
    description: string;
    component: () => JSX.Element;
    body: () => JSX.Element;
  };

  const [toggleType, setToggleType] = useState({
    Components: false,
    Scripts: false,
    Hooks: false,
    Templates: false,
  });
  const [selectedPage, setSelectedPage] = useState<PageType>(recipeTypes[0].pages[0]);

  const handleRecipeTypeChange = (value: RecipeType) => {
    setToggleType({
      ...toggleType,
      [value]: !toggleType[value],
    });
  };

  const handlePageChange = () => {
    // TODO: resolve this
     setSelectedPage(currentRecipeType?.pages.find(componentPage => page.title === componentPage.title))
  }


  return (
    <Flex className={s.recipes_container} mx="auto">
      <Flex className={s.recipes_sidebar} direction="column" justify="start" gap="7" px="4" pt="7">
        {recipeTypes.map((recipeType) => {
          const isToggleType = toggleType[recipeType.value as RecipeType];
          const currentRecipeType = recipeTypes.find((recipe) => recipe.name === recipeType.name);
          return (
            <>
              <Button
                className={s.recipes_sidebar_button}
                key={recipeType.value}
                onClick={() => handleRecipeTypeChange(recipeType.value as RecipeType)}
              >
                {recipeType.name}{" "}
                <ChevronDownIcon
                  height="16"
                  width="16"
                  className={isToggleType ? s.chevron_up : ""}
                />
              </Button>
              <Flex
                className={isToggleType ? s.show_pages : s.hide_pages}
                direction="column"
                display={isToggleType ? "flex" : "none"}
                gap="4"
              >
                {isToggleType &&
                  recipeType.pages.map((page) => {
                    return (
                      <Text className={s.recipes_sidebar_page} size="4" weight="bold" onClick={() =>}>
                        {page.title}
                      </Text>
                    );
                  })}
              </Flex>
            </>
          );
        })}
      </Flex>
      <Flex className={s.recipes_main} direction="column">
        <ScrollArea scrollbars="vertical">
         <RecipePage
            title={selectedPage.title}
            description={selectedPage.description}
            component={selectedPage.component}
            body={selectedPage.body}
          />
            
        </ScrollArea>
      </Flex>
    </Flex>
  );
};
