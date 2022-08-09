import app from "../../src/app.js";
import supertest from "supertest";
import authFactory from "../factories/authFactory.js";

describe("POST /auth/sign-up", () => {
  it("should 422 on wrong body", async () => {
    const invalidBody = authFactory.validSignUpBody();
    delete invalidBody.confirmPassword;
    const response = await supertest(app)
      .post("/auth/sign-up")
      .send(invalidBody);

    expect(response.status).toEqual(422);
  });

  it("should 409 on already registered email", async () => {
    const validBody = authFactory.validSignUpBody();
    validBody.email = "test@gmail.com";
    const response = await supertest(app).post("/auth/sign-up").send(validBody);

    expect(response.status).toEqual(409);
  });

  it("should 201 on valid input", async () => {
    const validBody = authFactory.validSignUpBody();
    const response = await supertest(app).post("/auth/sign-up").send(validBody);

    expect(response.status).toEqual(201);
  });
});

describe("POST /auth/sign-in", () => {
  it("should 422 on wrong body", async () => {
    const invalidBody = authFactory.validSignInBody();
    delete invalidBody.password;
    const response = await supertest(app)
      .post("/auth/sign-in")
      .send(invalidBody);

    expect(response.status).toEqual(422);
  });

  it("should 401 on invalid password/email", async () => {
    const validBody = authFactory.validSignInBody();
    validBody.password = "12435";
    const response = await supertest(app).post("/auth/sign-in").send(validBody);

    expect(response.status).toEqual(401);
  });

  it("should 200 and token on valid input", async () => {
    const validBody = authFactory.validSignInBody();
    const response = await supertest(app).post("/auth/sign-in").send(validBody);

    expect(response.status).toEqual(200);
    expect(typeof response.body.token).toEqual("string");
  });
});
