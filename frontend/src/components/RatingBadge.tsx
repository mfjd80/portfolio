import { Badge, Icon } from "@chakra-ui/react";
import { BsFillStarFill as StarIcon } from "react-icons/bs";

interface Props {
  rating: number;
}

const RatingBadge = ({ rating }: Props) => {
  let color = rating > 4 ? "green" : rating > 3 ? "yellow" : "red";

  return (
    <Badge colorScheme={color} fontSize="14px" paddingX={2} borderRadius="4px">
      {rating}
      <Icon boxSize={3} as={StarIcon} color="yellow"></Icon>
    </Badge>
  );
};

export default RatingBadge;
