import { Button, HStack, ListItem, Text } from "@chakra-ui/react";
import ProductCategoryIcon from "./ProductCategoryIcon";

interface Props {
  category: string;
  fontSize: string;
  iconSize: number;
}

const ProductCategoryListItem = ({ category, fontSize, iconSize }: Props) => {
  return (
    <ListItem>
      <HStack>
        <ProductCategoryIcon category={category} size={iconSize} />
        <Button
          onClick={() => console.log(category)}
          fontSize={fontSize}
          variant="link"
        >
          {category}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default ProductCategoryListItem;
