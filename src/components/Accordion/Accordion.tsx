import React from "react";
import { Text, Flex, Box } from "@radix-ui/themes";
import type { AccordionProps } from "./Accordion.types";

export const Accordion = ({ children }: AccordionProps) => {
  return (
    <Flex>
      <Box>
        <Text>hello</Text>
      </Box>
    </Flex>
  );
};
