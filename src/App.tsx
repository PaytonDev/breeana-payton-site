import { Home, Recipes } from "./components";
import { Flex } from "@radix-ui/themes";

function App() {
  return (
    <Flex direction="column">
      <Home />
      <Recipes />
    </Flex>
  );
}

export default App;
