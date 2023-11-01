import "./App.css";
import { Flex } from "@radix-ui/themes";
import { Header, Hero, Nav, Blob } from "./components";

function App() {
  return (
    <Flex
      direction="column"
      data-theme="dark"
      align="center"
      style={{ maxWidth: "1400px", minHeight: "100vh" }}
      mx="auto"
    >
      <Header />
      <Hero />
      <Nav />
      <Blob className="blob" />
    </Flex>
  );
}

export default App;
