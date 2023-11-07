import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import { LoginPage } from '../auth/pages';
import { HeroesRoutes } from '../heores/routes/HeroesRoutes';
import { childrenHeroesRoutes } from '../heores/routes/ChildrenHeroesRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';


export const routes = [
    {
        path: "login",
        element: <PublicRoute> <LoginPage /> </PublicRoute>
    },
    {
        path: "/*",
        element: <PrivateRoute> <HeroesRoutes /> </PrivateRoute>,
        children: childrenHeroesRoutes
    }
];

export const browserRouter = createBrowserRouter(routes);


export const AppRouter = () => {
    return (
        <>
            <RouterProvider router={browserRouter} />
        </>
    )
}
