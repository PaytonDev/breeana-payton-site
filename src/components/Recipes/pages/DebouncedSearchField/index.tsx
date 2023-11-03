import { DebouncedSearchField } from "./DebouncedSearchField";
import { DebouncedSearchFieldBody } from "./DebouncedSearchFieldBody";

const DebouncedSearchFieldInfo = {
  title: "DebouncedSearchField",
  description: "A search field that debounces the input.",
  component: DebouncedSearchField as () => JSX.Element,
  body: DebouncedSearchFieldBody as () => JSX.Element,
};

export default DebouncedSearchFieldInfo;
