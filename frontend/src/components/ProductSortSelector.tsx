import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  productSortOrder: string;
  onSelectProductSortOrder: (sortOrder: string) => void;
}

const ProductSortSelector = ({
  productSortOrder,
  onSelectProductSortOrder,
}: Props) => {
  const sortOrders = [
    { value: "", label: "Unsorted" },
    { value: "title", label: "Name" },
    { value: "price", label: "Price" },
    { value: "category", label: "Category" },
    { value: "rating", label: "Average Rating" },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === productSortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {currentSortOrder
          ? "Order by: " + currentSortOrder.label
          : "Select ordering"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => onSelectProductSortOrder(sortOrder.value)}
            key={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default ProductSortSelector;
