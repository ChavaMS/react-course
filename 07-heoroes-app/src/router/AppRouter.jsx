import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { HeroesRoutes } from '../heores/routes/HeroesRoutes';
import { childrenHeroesRoutes } from '../heores/routes/ChildrenHeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const router = createBrowserRouter([
    {
        path: "login",
        element: <PublicRoute> <LoginPage /> </PublicRoute>
    },
    {
        path: "/*",
        element: <PrivateRoute> <HeroesRoutes /> </PrivateRoute>,
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
