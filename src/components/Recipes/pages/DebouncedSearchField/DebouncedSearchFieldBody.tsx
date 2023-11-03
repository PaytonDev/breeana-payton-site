import { Text, Box } from "@radix-ui/themes";
import s from "../../Recipes.module.css";

const Codeblock = ({ children }: { children: React.ReactNode }) => (
  <Box className={s.codeblock}>
    <pre>{children}</pre>
  </Box>
);

export const DebouncedSearchFieldBody = () => (
  <>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellendus atque ullam
      ducimus quas quae modi tempore dicta! Enim quaerat at eaque porro voluptatibus dolores eveniet
      obcaecati aliquam consequuntur. Iure ipsa error voluptatem quis dolorum architecto quasi
      accusamus, fugit, perspiciatis, eligendi maiores saepe distinctio aliquid deserunt
      consequuntur sint rem fuga voluptate? Tempora praesentium, veniam voluptatum accusamus
      provident, consequuntur, error modi debitis nam eligendi eum! Cum, repudiandae nihil. Veniam
      voluptate laudantium eaque perspiciatis? Modi excepturi laboriosam praesentium, placeat
      delectus voluptas reiciendis amet provident mollitia, a dolores?
    </Text>
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
  }
  , [value, delay]);

  return debouncedValue;

};`}
    </Codeblock>
    <Text>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis repellendus atque ullam
      ducimus quas quae modi tempore dicta! Enim quaerat at eaque porro voluptatibus dolores eveniet
      obcaecati aliquam consequuntur. Iure ipsa error voluptatem quis dolorum architecto quasi
      accusamus, fugit, perspiciatis, eligendi maiores saepe distinctio aliquid deserunt
      consequuntur sint rem fuga voluptate? Tempora praesentium, veniam voluptatum accusamus
      provident, consequuntur, error modi debitis nam eligendi eum! Cum, repudiandae nihil. Veniam
      voluptate laudantium eaque perspiciatis? Modi excepturi laboriosam praesentium, placeat
      delectus voluptas reiciendis amet provident mollitia, a dolores?
    </Text>
  </>
);
