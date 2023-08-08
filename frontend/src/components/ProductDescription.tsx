import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

interface Props {
  description: string;
  maxChars?: number;
}

const ProductDescription = ({ description, maxChars = 100 }: Props) => {
  const [isExpanded, setExpanded] = useState(false);

  const allText = "Description: " + description;

  if (description.length <= maxChars) return <p>{allText}</p>;

  const text = isExpanded ? description : allText.substring(0, maxChars);

  return (
    <div>
      {text}...
      <Button
        height={"20px"}
        padding={"1px"}
        marginLeft={"2"}
        size="sm"
        onClick={() => setExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </Button>
    </div>
  );
};

export default ProductDescription;
