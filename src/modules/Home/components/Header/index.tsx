import { Button, Flex, Tooltip } from "@chakra-ui/react";

import Icon from "components/Icon";
import Input from "components/Input";
import Link from "components/Link";

import useDebounceFunction from "hooks/useDebounceFunction";

type SearchJokesByString = (string: string) => void;

interface HeaderProps {
  currentIsAscOrder: boolean;
  toggleJokesOrder: () => void;
  searchJokesByString: SearchJokesByString;
}

const Header = ({
  toggleJokesOrder,
  currentIsAscOrder,
  searchJokesByString,
}: HeaderProps) => {
  const debouncedSearchJokesByString = useDebounceFunction<
    SearchJokesByString,
    string
  >(searchJokesByString, 800);

  return (
    <Flex
      as="header"
      w={{ base: "100%" }}
      gap="15px"
      direction={{ base: "column", md: "row" }}
    >
      <Input
        onChange={(e) => debouncedSearchJokesByString([e.target.value])}
        flex={{ base: "1" }}
        backgroundColor="gray.200"
        placeholder="Pesquisar piada"
        leftElement={{
          children: <Icon as="BsSearch" color="gray.400" />,
        }}
        wrapperProps={{
          border: "1px",
          borderRadius: "md",
          borderColor: "gray.400",
        }}
      />

      <Flex justifyContent="space-between" gap={{ md: "15px" }}>
        <Tooltip
          label={`Ver piadas ${currentIsAscOrder ? "recentes" : "antigas"}`}
        >
          <Button
            onClick={toggleJokesOrder}
            border="1px"
            color="gray.400"
            bgColor="gray.200"
            leftIcon={<Icon as="MdVerticalDistribute" />}
          >
            Ordenar
          </Button>
        </Tooltip>

        <Link isInternalPage isButtonAsChildren href="/joke">
          <Button colorScheme="red">Criar piada</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Header;
