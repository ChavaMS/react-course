import { render, screen } from "@testing-library/react";
import { MainApp } from "../../src/09-useContext/MainApp";
import { Navigate, RouterProvider, createMemoryRouter } from "react-router-dom";
import { HomePage } from "../../src/09-useContext/HomePage";
import { LoginPage } from "../../src/09-useContext/LoginPage";
import { AboutPage } from "../../src/09-useContext/AboutPage";


const routerConfig = [
    {
        path: "/",
        element: <MainApp />,
        children: [
            {
                path: "/",
                element: <HomePage />
            },
            {
                path: "login",
                element: <LoginPage />
            },
            {
                path: "about",
                element: <AboutPage />
            },
            {
                path: "/*",
                element: <Navigate to={"/"} />
            }
        ]
    },
];

describe('Pruebas en <MainApp/>', () => {
    test('debe de mostrar el HomePage', () => {

        console.log(routerConfig);
        //especificando ruta a activar
        const router = createMemoryRouter(routerConfig, { initialEntries: ['/'], });

        //renderizando Provider
        render(<RouterProvider router={router} />);

        //ubicando elemento h1
        const head = screen.getByRole('heading', { level: 1 }).innerHTML;

        expect(head).toContain('Home App');
    });

    test('debe de mostrar el LoginPage', () => {
        //especificando ruta a activar
        const router = createMemoryRouter(routerConfig, {
            initialEntries: ['/login'],
        });

        //renderizando Provider
        render(<RouterProvider router={router} />);

        //ubicando elemento h1
        const head = screen.getByRole('heading', { level: 1 }).innerHTML;

        //realizando la comparación
        expect(head).toContain('Login App');
    });

});
