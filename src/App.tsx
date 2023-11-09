import { Home, Recipes, Nav, Resume, FloatingButton } from "./components";
import { Flex } from "@radix-ui/themes";

function App() {
  return (
    <Flex direction="column">
      <Home />
      <Nav />
      <Recipes />
      <Resume />
      <FloatingButton />
    </Flex>
  );
}

export default App;
