import { Home, Recipes, Nav } from "./components";
import { Flex } from "@radix-ui/themes";

function App() {
  return (
    <Flex direction="column">
      <Home />
      <Nav />
      <Recipes />
    </Flex>
  );
}

export default App;
