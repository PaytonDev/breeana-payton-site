import { Text, Flex, Heading } from "@radix-ui/themes";
import s from "./Hero.module.css";

export const Hero = () => {
  return (
    <Flex direction="column" gap="3" className={s.hero_container}>
      <Heading size="9">Breeana Payton</Heading>
      <Text size="7" weight="medium">
        Frontend Software Engineer
      </Text>
      <Flex direction="row" justify="center" gap="3">
        <Text size="5">React</Text>
        <Text size="5">/</Text>
        <Text size="5">Typescript</Text>
        <Text size="5">/</Text>
        <Text size="5">Design Systems</Text>
      </Flex>
    </Flex>
  );
};
