import * as Yup from "yup";

const emailValid = Yup.string()
  .email("Некоректний email")
  .min(3, "Email має містити щонайменше 3 символи")
  .max(50, "Email має містити не більше 50 символів")
  .required("Email є обов’язковим");

const passwordValid = Yup.string()
  .min(3, "Пароль має містити щонайменше 3 символи")
  .max(50, "Пароль має містити не більше 50 символів")
  .matches(/[a-zA-Z]/, "Пароль повинен містити хоча б одну літеру")
  .matches(/[0-9]/, "Пароль повинен містити хоча б одну цифру")
  .required("Пароль є обов’язковим");

export const orderSchemaLogin = Yup.object({
  email: emailValid,
  password: passwordValid,
});

export const orderSchemaSignup = Yup.object({
  email: emailValid,
  password: passwordValid,
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Паролі не співпадають")
    .required("Підтвердження пароля є обов’язковим"),
});
