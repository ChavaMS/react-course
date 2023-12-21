import {
  loginWithEmailPassword,
  logoutFirebase,
  signInWithGoogle,
} from "../../../src/firebase/providers";
import {
  checkingCredentials,
  login,
  logout,
} from "../../../src/store/auth/authSlice";
import {
  checkingAuthentication,
  startGoogleSignIn,
  startLoginWithEmailPassword,
  startLogout,
} from "../../../src/store/auth/thunks";
import { clearNotesLogout } from "../../../src/store/journal";
import { demoUser } from "../../fixtures/authFixtures";

jest.mock("../../../src/firebase/providers");

describe("Pruebas AuthThunks", () => {
  const dispach = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe probar el checkingCredentials", async () => {
    await checkingAuthentication()(dispach);
    expect(dispach).toHaveBeenCalledWith(checkingCredentials());
  });

  test("startGoogleSignIn debe de llamar checkignCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };

    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispach);

    expect(dispach).toHaveBeenCalledWith(checkingCredentials());
    expect(dispach).toHaveBeenCalledWith(login(loginData));
  });
  test("startGoogleSignIn debe de llamar checkignCredentials y logout - Error", async () => {
    const loginData = { ok: false, errorMessage: "Un error en Google" };

    await signInWithGoogle.mockResolvedValue(loginData);

    await startGoogleSignIn()(dispach);

    expect(dispach).toHaveBeenCalledWith(checkingCredentials());
    expect(dispach).toHaveBeenCalledWith(logout(loginData.errorMessage));
  });

  test("startLoginWithEmailAndPassword debe de llamar checkingCredentials y login - Exito", async () => {
    const loginData = { ok: true, ...demoUser };
    const formData = { email: demoUser.email, password: "123456" };

    await loginWithEmailPassword.mockResolvedValue(loginData);
    await startLoginWithEmailPassword(formData)(dispach);

    expect(dispach).toHaveBeenCalledWith(checkingCredentials());
    expect(dispach).toHaveBeenCalledWith(login(loginData));
  });

  test("startLohgout debe de llamar logoutFirebase, clearNotes y logout", async () => {
    await startLogout()(dispach);

    expect(logoutFirebase).toHaveBeenCalled();
    expect(dispach).toHaveBeenCalledWith(clearNotesLogout());
    expect(dispach).toHaveBeenCalledWith(logout({ errorMessage: null }));
  });
});
