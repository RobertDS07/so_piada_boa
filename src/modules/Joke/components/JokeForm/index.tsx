import { validateEmail } from "utils/inputValidators";

import { Flex } from "@chakra-ui/react";

import Link from "components/Link";
import Textarea from "components/Textarea";

import useJokeForm from "./hooks/useJokeForm";

import * as S from "./styles";

const JokeForm = () => {
  const { onSubmit, register, isSubmitting, errors } = useJokeForm();

  return (
    <form onSubmit={onSubmit}>
      <Flex gap="35px" wrap="wrap">
        <S.Input
          placeholder="Seu nome"
          isInvalid={!!errors.name}
          wrapperProps={S.inputWrapperProps}
          helperText={errors.name?.message}
          label={{ children: "Nome:", color: "gray.300" }}
          {...register("name", { required: "Campo obrigatório" })}
        />

        <S.Input
          placeholder="Seu e-mail"
          isInvalid={!!errors.email}
          wrapperProps={S.inputWrapperProps}
          helperText={errors.email?.message}
          label={{ children: "E-mail:", color: "gray.300" }}
          {...register("email", {
            required: "Campo obrigatório",
            validate: validateEmail,
          })}
        />

        <Textarea
          placeholder="Nos conte sua melhor piada!"
          isInvalid={!!errors.joke}
          resize="none"
          bgColor="gray.200"
          helperText={errors.joke?.message}
          label={{ children: "Piada:", color: "gray.300" }}
          {...register("joke", { required: "Campo obrigatório" })}
        />

        <Flex gap="35px" flex="1" justify="flex-end">
          <Link
            isInternalPage
            isButtonAsChildren
            href="/home"
            flex={{ base: "1", sm: "unset" }}
          >
            <S.Button
              size="lg"
              bgColor="white"
              color="red.main"
              border="1px solid red"
              isDisabled={isSubmitting}
            >
              Cancelar
            </S.Button>
          </Link>

          <S.Button
            type="submit"
            size="lg"
            colorScheme="red"
            isLoading={isSubmitting}
          >
            Enviar piada
          </S.Button>
        </Flex>
      </Flex>
    </form>
  );
};

export default JokeForm;
