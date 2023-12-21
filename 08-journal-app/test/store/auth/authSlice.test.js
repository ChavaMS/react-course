import {
  authSlice,
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  authenticatedState,
  demoUser,
  initialState,
  notAuthenticatedState,
} from "../../fixtures/authFixtures";

describe("Pruebas en el authSlice", () => {
  test('debe de regregsar el estado inicial y llamarse "auth"', () => {
    expect(authSlice.name).toBe("auth");

    const state = authSlice.reducer(initialState, {});
    expect(state).toBe(initialState);
  });

  test("debe de realizar la autenticacion", () => {
    const state = authSlice.reducer(initialState, login(demoUser));

    expect(state).toEqual(authenticatedState);
  });

  test("debe de realizar el logout sin argumentos", () => {
    const state = authSlice.reducer(authenticatedState, logout());

    expect(state).toEqual(notAuthenticatedState);
  });

  test("debe de realizar el logout con argumentos", () => {
    const error = { errorMessage: "Error" };
    const state = authSlice.reducer(authenticatedState, logout(error));

    expect(state).toEqual({
      status: "not-authenticated", // 'not-authenticated', 'authenticated'
      uid: null,
      email: null,
      displayName: null,
      photoURL: null,
      errorMessage: error.errorMessage,
    });
  });

  test("debe de cambiar el estado a checking", () => {
    const state = authSlice.reducer(authenticatedState, checkingCredentials());

    expect(state.status).toBe("checking");
  });
});
