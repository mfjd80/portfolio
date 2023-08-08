import React from "react";
import { Product } from "../hooks/useProducts";
import {
  Box,
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  VStack,
} from "@chakra-ui/react";
import CategoryIcon from "./ProductCategoryIcon";
import ProductDescription from "./ProductDescription";
import RatingBadge from "./RatingBadge";
import PriceBadge from "./PriceBadge";
import StockBadge from "./StockBadge";
import Emoji from "./Emoji";

import noImagePlaceholder from "../assets/noImagePlaceholder.webp";

interface Props {
  product: Product;
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card>
      <Image src={product.thumbnail} />

      {/* <Image src={noImagePlaceholder} /> */}

      <CardBody padding={2}>
        <VStack>
          <HStack w="100%" justifyContent="space-between" marginBottom={3}>
            <PriceBadge price={product.price} />
            <StockBadge stock={product.stock} />
            <RatingBadge rating={product.rating} />
          </HStack>
        </VStack>
        <Heading fontSize="2xl">
          {product.title}
          <Emoji rating={product.rating} />
        </Heading>
        <ProductDescription description={product.description} maxChars={60} />
      </CardBody>
    </Card>
  );
};

export default ProductCard;
