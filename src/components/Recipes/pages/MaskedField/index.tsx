import { MaskedField } from "./MaskedField";
import { MaskedFieldBody } from "./MaskedFieldBody";

const MaskedFieldInfo = {
  title: "MaskedField",
  description: "A masked field.",
  component: MaskedField as () => JSX.Element,
  body: MaskedFieldBody as () => JSX.Element,
};

export default MaskedFieldInfo;
