import { Button, HStack, List, ListItem, Text } from "@chakra-ui/react";
import useProductCategories, {
  ProductCategory,
} from "../hooks/useProductCategories";
import ProductCategoryIcon from "./ProductCategoryIcon";
import ProductCategoryListItemSkeleton from "./ProductCategoryListItemSkeleton";

interface Props {
  onSelectProductCategory: (productCategory: ProductCategory) => void;
  selectedProductCategory: ProductCategory | null;
}

const ProductCategoryList = ({
  onSelectProductCategory,
  selectedProductCategory,
}: Props) => {
  const { productCategories, productCategoriesError, isLoading, error } =
    useProductCategories();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  if (error) return null;

  return (
    <List spacing={1}>
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProductCategoryListItemSkeleton key={skeleton} iconSize={6} />
        ))}
      {productCategories.map((category) => (
        <ListItem key={category.name}>
          <HStack>
            <ProductCategoryIcon category={category.name} size={6} />
            <Button
              fontWeight={
                category.name === selectedProductCategory?.name
                  ? "bold"
                  : "normal"
              }
              onClick={() => onSelectProductCategory(category)}
              fontSize={"lg"}
              variant="link"
            >
              {category.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default ProductCategoryList;
