import { FiSmartphone as SmartphoneIcon } from "react-icons/fi";
import { BiLaptop as LaptopIcon } from "react-icons/bi";
import { GiDelicatePerfume as FragranceIcon } from "react-icons/gi";
import {
  FaCouch as FurnitureIcon,
  FaHandsWash as SkincareIcon,
  FaMotorcycle as MotorcycleIcon,
} from "react-icons/fa";
import { MdOutlineLocalGroceryStore as GroceryIcon } from "react-icons/md";
import { BsLamp as HomeDecorationIcon } from "react-icons/bs";

import {
  GiShirt as TopsIcon,
  GiLargeDress as WomensDressIcon,
  GiHighHeel as WomensShoeIcon,
  GiTShirt as MensShirtIcon,
  GiChelseaBoot as MensShoeIcon,
  GiPocketWatch as MensWatchIcon,
  GiWatch as WomensWatchIcon,
  GiShoulderBag as WomensBagIcon,
  GiNecklace as WomensJewelleryIcon,
  GiSunglasses as SunglassesIcon,
  GiCarWheel as AutomotiveIcon,
  GiLightBulb as LightingIcon,
} from "react-icons/gi";
import { Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  category: string;
  size: number;
}

const ProductCategoryIcon = ({ category, size }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    smartphones: SmartphoneIcon,
    laptops: LaptopIcon,
    fragrances: FragranceIcon,
    skincare: SkincareIcon,
    groceries: GroceryIcon,
    "home-decoration": HomeDecorationIcon,
    furniture: FurnitureIcon,
    tops: TopsIcon,
    "womens-dresses": WomensDressIcon,
    "womens-shoes": WomensShoeIcon,
    "mens-shirts": MensShirtIcon,
    "mens-shoes": MensShoeIcon,
    "mens-watches": MensWatchIcon,
    "womens-watches": WomensWatchIcon,
    "womens-bags": WomensBagIcon,
    "womens-jewellery": WomensJewelleryIcon,
    sunglasses: SunglassesIcon,
    automotive: AutomotiveIcon,
    motorcycle: MotorcycleIcon,
    lighting: LightingIcon,
  };

  return <Icon boxSize={size} as={iconMap[category]} color="gray.500"></Icon>;
};

export default ProductCategoryIcon;
