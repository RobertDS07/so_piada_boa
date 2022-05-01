/* eslint-disable no-useless-escape */
export const validateEmail = (email: string) => {
  const emailRegex = new RegExp(
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
  );

  const isValid = emailRegex.test(email);

  if (!isValid) return "E-mail inválido";
};
