import { SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import useProductCategories, {
  ProductCategory,
} from "../hooks/useProductCategories";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import ProductCardContainer from "./ProductCardContainer";

interface Props {
  selectedProductCategory: ProductCategory | null;
  productSortOrder: string;
}

const ProductGrid = ({ selectedProductCategory, productSortOrder }: Props) => {
  const { products, error, isLoading } = useProducts(selectedProductCategory, [
    selectedProductCategory?.name,
  ]);
  const skeletons = [1, 2, 3, 4, 5, 6];

  if (productSortOrder == "title" || productSortOrder == "category") {
    products.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (productSortOrder == "category") {
    products.sort((a, b) => a.category.localeCompare(b.category));
  }

  if (productSortOrder == "price" || productSortOrder == "rating") {
    products.sort((a, b) => a[productSortOrder] - b[productSortOrder]);
  }

  if (error) return <Text>{error}</Text>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
      spacing={6}
      padding="10px"
    >
      {isLoading &&
        skeletons.map((skeleton) => (
          <ProductCardContainer key={skeleton}>
            <ProductCardSkeleton />
          </ProductCardContainer>
        ))}
      {products.map((product) => (
        <ProductCardContainer key={product.id}>
          <ProductCard key={product.id} product={product} />
        </ProductCardContainer>
      ))}
    </SimpleGrid>
  );
};

export default ProductGrid;
