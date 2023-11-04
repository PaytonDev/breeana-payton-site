import { Codeblock } from "../Codeblock";

export const DebouncedSearchFieldBody = () => (
  <Codeblock>
    {`import { useState, useEffect } from "react";
            
export const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handleDebounce = setTimeout(() => {
      setDebouncedValue(value);
    }
    , delay);

    return () => {
      clearTimeout(handleDebounce);
    }
  }, [value, delay]);

  return debouncedValue;

};`}
  </Codeblock>
);
