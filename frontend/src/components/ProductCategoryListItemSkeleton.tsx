import {
  Box,
  HStack,
  ListItem,
  Skeleton,
  SkeletonCircle,
} from "@chakra-ui/react";

interface Props {
  iconSize: number;
}

const ProductCategoryListItemSkeleton = ({ iconSize }: Props) => {
  return (
    <ListItem>
      <Box>
        <HStack>
          <SkeletonCircle size="6" />
          <Skeleton color="gray.500" height="20px" width={"100%"} />
        </HStack>
      </Box>
    </ListItem>
  );
};

export default ProductCategoryListItemSkeleton;
