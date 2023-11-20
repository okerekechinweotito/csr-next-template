import { Box } from "@chakra-ui/react";
import React from "react";

type ImageProps = React.ComponentProps<typeof Box> & {
  width: string | any[];
  height: string | any[];
  imageUrl: string;
  imageSize?: string | any[];
};

export default function Image({
  width,
  height,
  imageUrl,
  imageSize = "contain",
  ...props
}: ImageProps) {
  return (
    <Box
      width={width}
      height={height}
      backgroundImage={`url(${imageUrl})`}
      backgroundSize={imageSize}
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      {...props}></Box>
  );
}
