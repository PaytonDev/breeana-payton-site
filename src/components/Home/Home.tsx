import { Flex, Box } from "@radix-ui/themes";
import { Header } from "../Header/Header";
import { Hero } from "../Hero/Hero";
import { Nav } from "../Nav/Nav";
import { Blob } from "../Blob/Blob";
import s from "./Home.module.css";

export const Home = () => (
  <Flex
    direction="column"
    align="center"
    justify="center"
    mx="auto"
    width="100%"
    style={{ maxWidth: "1400px", minHeight: "100vh" }}
  >
    <Header />
    <Hero />
    <Nav />
    <Box className={s.blob_container}>
      <Blob className={s.blob} />
    </Box>
  </Flex>
);
