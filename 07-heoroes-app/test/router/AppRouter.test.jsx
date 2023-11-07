import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { AuthContext } from "../../src/auth/context/AuthContext"; 
import { routes } from "../../src/router/AppRouter";

describe("pruebas en <AppRouter/>", () => {
    test("debe de mostrar el login si no esta autenticado", () => {
        const contextValue = {
            logged: false,
        };

        const router = createMemoryRouter(routes, {
            initialEntries: ["/marvel", "/login"],
            initialIndex: 1,
        });

        render(
            <AuthContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(screen.getAllByText("Login").length).toBe(2);
    });

    test("debe de mostrar el componente de Marvel si esta autenticado", () => {
        const contextValue = {
            logged: true,
            user: {
                name: "Cecy",
                id: "ABC123",
            },
        };
        const router = createMemoryRouter(routes, {
            initialEntries: ["/", "/marvel"],
            initialIndex: 1,
        });

        render(
            <AuthContext.Provider value={contextValue}>
                <RouterProvider router={router} />
            </AuthContext.Provider>
        );

        expect(screen.getAllByText("Marvel").length).toBeGreaterThanOrEqual(1);
    });
});