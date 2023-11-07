import { Popover, Text, Flex, IconButton, Button } from "@radix-ui/themes";
import {
  InfoCircledIcon,
  EnvelopeClosedIcon,
  DownloadIcon,
  PinTopIcon,
} from "@radix-ui/react-icons";
import s from "./FloatingButton.module.css";

export const FloatingButton = () => (
  <Popover.Root>
    <Popover.Trigger className={s.floating_button}>
      <IconButton radius="full" size="4" variant="surface">
        <InfoCircledIcon width={20} height={20} />
      </IconButton>
    </Popover.Trigger>
    <Popover.Content sideOffset={8}>
      <Flex direction="column" gap="2" align="center" p="4">
        <Button variant="ghost">
          <Flex direction="row" gap="2" align="center" justify="center">
            <Text>Message Me</Text>
            <EnvelopeClosedIcon width={16} height={16} />
          </Flex>
        </Button>
        <Button variant="ghost">
          <Flex direction="row" gap="2" align="center" justify="center">
            <Text>Download Resume</Text>
            <DownloadIcon width={16} height={16} />
          </Flex>
        </Button>
        <Button variant="ghost">
          <Flex direction="row" gap="2" align="center" justify="center">
            <Text>Go to Top</Text>
            <PinTopIcon width={16} height={16} />
          </Flex>
        </Button>
      </Flex>
    </Popover.Content>
  </Popover.Root>
);
