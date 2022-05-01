import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import useLocalStorage from "hooks/useLocalStorage";
import useToast from "hooks/useToast";

import * as jokesRepository from "services/api/modules/jokes/jokesRepository";

interface JokeFormFields {
  name: string;
  email: string;
  joke: string;
}

const useJokeForm = () => {
  const toast = useToast();
  const router = useRouter();

  const [nameInLocalStorage, setNameInLocalStorage] = useLocalStorage(
    "name",
    ""
  );
  const [emailInLocalStorage, setEmailInLocalStorage] = useLocalStorage(
    "email",
    ""
  );

  const { register, handleSubmit, formState, reset } = useForm<JokeFormFields>({
    defaultValues: { email: emailInLocalStorage },
  });

  useEffect(() => {
    reset({ name: nameInLocalStorage, email: emailInLocalStorage });
  }, [nameInLocalStorage, emailInLocalStorage, reset]);

  const createJoke = async ({ joke, ...user }: JokeFormFields) => {
    try {
      await jokesRepository.createJoke({ description: joke, user });

      setNameInLocalStorage(user.name);
      setEmailInLocalStorage(user.email);

      await router.push("/home");
    } catch (e) {
      toast({
        status: "error",
        title: "Erro",
        description:
          "Ocorreu um erro ao tentar criar sua piada, tente novamente",
      });
    }
  };

  return {
    register,
    errors: formState.errors,
    onSubmit: handleSubmit(createJoke),
    isSubmitting: formState.isSubmitting,
  };
};

export default useJokeForm;
