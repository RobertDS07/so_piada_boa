import { format } from "date-fns";

import { ResponsiveValue } from "@chakra-ui/react";

import * as S from "./styles";

export interface JokeCreatedAtTextProps {
  jokeCreatedAt: Date;
  display: ResponsiveValue<"none" | "block">;
}

const JokeCreatedAtText = ({
  display,
  jokeCreatedAt,
}: JokeCreatedAtTextProps) => {
  return (
    <S.Text display={display}>
      <S.Text as="span" display={{ base: "none", md: "inline-block" }}>
        Publicada em:
      </S.Text>{" "}
      {format(jokeCreatedAt, "dd/MM/yyyy")}
    </S.Text>
  );
};

export default JokeCreatedAtText;
