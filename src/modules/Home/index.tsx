import JokePost from "modules/Home/components/JokePost";

import { Flex } from "@chakra-ui/react";

import AsyncDataHandler from "components/AsyncDataHandler";

import useModal from "hooks/useModal";

import Header from "./components/Header";
import JokeModal from "./components/JokeModal";

import useHome, { FormattedJoke } from "./hooks/useHome";

import * as S from "./styles";

const Home = () => {
  const {
    getJokesParams,
    toggleJokesOrder,
    searchStringInJokes,
    updateSpecificJoke,
    jokes,
    mutate,
    hasError,
    isLoading,
  } = useHome();

  const [isOpen, toggleModalVisibility, jokePostProps] =
    useModal<FormattedJoke>();

  return (
    <>
      <Flex
        direction="column"
        gap={{ base: "40px", md: "15px" }}
        w={{ base: "100vw", sm: "80%", lg: "900px" }}
        h={{ base: "100vh", sm: "600px" }}
        p={{ base: "40px 30px", md: "60px 100px", lg: "60px 150px" }}
        borderRadius={{ sm: "3xl" }}
        bgColor="whiteBackground"
        overflowY="scroll"
        sx={S.scrollbarStyle}
      >
        <Header
          toggleJokesOrder={toggleJokesOrder}
          searchJokesByString={searchStringInJokes}
          currentIsAscOrder={getJokesParams._order === "asc"}
        />

        <AsyncDataHandler
          hasData={!!jokes.length}
          hasError={hasError}
          isLoading={isLoading}
          onClickRetry={mutate}
          noDataText="Ainda não há piadas aqui, nos conte uma!"
        >
          <Flex gap="15px" direction="column">
            {jokes.map((jokePostProps) => (
              <JokePost
                key={jokePostProps.jokeId}
                width="100%"
                as="article"
                mutateJoke={updateSpecificJoke}
                onClick={() => toggleModalVisibility(true, jokePostProps)}
                {...jokePostProps}
              />
            ))}
          </Flex>
        </AsyncDataHandler>
      </Flex>

      <JokeModal
        isOpen={isOpen}
        mutateJoke={updateSpecificJoke}
        onClose={toggleModalVisibility}
        formattedJoke={jokePostProps}
      />
    </>
  );
};

export default Home;
