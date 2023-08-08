import { Badge } from "@chakra-ui/react";

interface Props {
  price: number;
}

const PriceBadge = ({ price }: Props) => {
  return (
    <Badge
      colorScheme={"green"}
      fontSize="14px"
      paddingX={2}
      borderRadius="4px"
    >
      ${price}
    </Badge>
  );
};

export default PriceBadge;
