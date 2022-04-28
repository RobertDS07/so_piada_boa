import NextImage, { ImageProps as NextImageProps } from "next/image";

import { Box, BoxProps } from "@chakra-ui/react";

type ImagePropss = Required<Pick<NextImageProps, "src" | "alt" | "objectFit">> &
  Required<Pick<BoxProps, "w" | "h">> &
  Omit<BoxProps, "w" | "h" | "objectFit">;

const Image = ({ src, alt, w, h, objectFit, ...boxProps }: ImagePropss) => {
  return (
    <Box pos="relative" w={w} h={h} {...boxProps}>
      <NextImage src={src} alt={alt} layout="fill" objectFit={objectFit} />
    </Box>
  );
};

export default Image;
