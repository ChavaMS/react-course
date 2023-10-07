import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { HeroesRoutes } from '../heores/routes/HeroesRoutes';
import { childrenHeroesRoutes } from '../heores/routes/ChildrenHeroesRoutes'; 

export const router = createBrowserRouter([
    {
        path: "login",
        element: <LoginPage />
    },
    {
        path: "/*",
        element: <HeroesRoutes />,
        children: childrenHeroesRoutes
    }
]);


export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}
