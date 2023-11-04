import { Text, Flex, Button } from "@radix-ui/themes";
import { Crosshair2Icon } from "@radix-ui/react-icons";

export const Header = () => {
  return (
    <Flex direction="row" justify="between" width="100%" p="4">
      <Button variant="soft">Message Me</Button>
      <Flex direction="row" align="center" gap="2">
        <Crosshair2Icon height="16px" width="16px" />
        <Text>Richmond, VA</Text>
      </Flex>
    </Flex>
  );
};
