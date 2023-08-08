import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import ProductGrid from "./components/ProductGrid";
import ProductCategoryList from "./components/ProductCategoryList";
import { useState } from "react";
import { ProductCategory } from "./hooks/useProductCategories";
import ProductSortSelector from "./components/ProductSortSelector";
import GameHeading from "./components/ProductHeading";

function App() {
  const [selectedProductCategory, setSelectedProductCategory] =
    useState<ProductCategory | null>(null);
  const [productSortOrder, setProductSortOrder] = useState("name");

  return (
    <Grid
      templateAreas={{
        base: '"nav" "main"',
        lg: '"nav nav" "aside main"',
      }}
      templateColumns={{ base: "1fr", lg: "225px 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <ProductCategoryList
            selectedProductCategory={selectedProductCategory}
            onSelectProductCategory={(productCategory) =>
              setSelectedProductCategory(productCategory)
            }
          />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <GameHeading productCategory={selectedProductCategory} />
          <HStack marginBottom={3}>
            <ProductSortSelector
              productSortOrder={productSortOrder}
              onSelectProductSortOrder={(productSortOrder) =>
                setProductSortOrder(productSortOrder)
              }
            />
          </HStack>
        </Box>

        <ProductGrid
          productSortOrder={productSortOrder}
          selectedProductCategory={selectedProductCategory}
        />
      </GridItem>
    </Grid>
  );
}

export default App;
