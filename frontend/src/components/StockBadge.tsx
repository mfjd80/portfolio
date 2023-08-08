import { Badge } from "@chakra-ui/react";

interface Props {
  stock: number;
}

const StockBadge = ({ stock }: Props) => {
  let color = stock > 25 ? "green" : stock > 0 ? "yellow" : "red";

  let message =
    stock > 25 ? "In Stock" : stock > 0 ? "Low Stock" : "OUT OF STOCK";

  if (message === "") return null;

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {message}
    </Badge>
  );
};

export default StockBadge;
