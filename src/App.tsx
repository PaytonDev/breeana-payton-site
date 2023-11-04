import { Home, Recipes, Nav, Resume } from "./components";
import { Flex } from "@radix-ui/themes";

function App() {
  return (
    <Flex direction="column">
      <Home />
      <Nav />
      <Recipes />
      <Resume />
    </Flex>
  );
}

export default App;
