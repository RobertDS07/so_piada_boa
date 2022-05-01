import { Flex, Text } from "@chakra-ui/react";

import Image from "components/Image";

export interface NoDataProps {
  noDataText: string;
}

const NoData = ({ noDataText }: NoDataProps) => {
  return (
    <Flex direction="column" gap="50px" align="center">
      <Image
        src="/assets/images/no-data-image.png"
        alt="no data image"
        objectFit="contain"
        w="200px"
        h="200px"
      />

      <Text align="center">{noDataText}</Text>
    </Flex>
  );
};

export default NoData;
