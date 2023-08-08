import { Heading } from "@chakra-ui/react";
import { MdTitle } from "react-icons/md";
import { ProductCategory } from "../hooks/useProductCategories";

interface Props {
  productCategory: ProductCategory | null;
}

const ProductHeading = ({ productCategory }: Props) => {
  //  Games
  //  Action Games
  //  XBox Games
  //  XBox Action Games

  const title = !!productCategory
    ? productCategory.name.charAt(0).toUpperCase() +
      productCategory.name.slice(1)
    : null;

  if (!MdTitle) return null;

  return (
    <Heading as="h1" marginY={5} fontSize={"5xl"}>
      {title}
    </Heading>
  );
};

export default ProductHeading;
