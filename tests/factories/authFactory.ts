import { faker } from "@faker-js/faker";
import {
  UserSchemaSignIn,
  UserSchemaSignUp,
} from "../../src/repositories/userRepository.js";

function validSignUpBody() {
  const name = faker.name.firstName();
  const email = faker.internet.email(name);
  const password = faker.internet.password();
  const confirmPassword = password;

  const userData: UserSchemaSignUp = {
    name,
    email,
    password,
    confirmPassword,
  };

  return userData;
}

function validSignInBody() {
  const userData: UserSchemaSignIn = {
    email: "test@gmail.com",
    password: "12345",
  };

  return userData;
}

const authFactory = {
  validSignUpBody,
  validSignInBody,
};

export default authFactory;
