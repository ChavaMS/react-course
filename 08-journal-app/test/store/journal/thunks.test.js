import { startNewNote } from "../../../src/store/journal/thunks";

describe("Pruebas en Journal thunks", () => {
  const dispach = jest.fn();
  const getState = jest.fn();

  beforeEach(() => jest.clearAllMocks());

  test("debe de crear una nueva nota en blanco", async () => {
    const uid = "TEST-UID";
    getState.mockReturnValue({ auth: { uid: uid } });

    await startNewNote()(dispach, getState);

  });
});
