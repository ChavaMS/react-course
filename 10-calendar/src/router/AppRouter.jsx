import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRouter, AuthRoutes } from '../auth';
import { CalendarRouter, CalendarRoutes } from '../calendar';

const routesConfig = createBrowserRouter([
    {
        path: "/auth/*",
        children: AuthRoutes,
        element: <AuthRouter />
    },
    {
        path: "/",
        children: CalendarRoutes,
        element: <CalendarRouter />
    },
    {
        path: "/*",
        element: <Navigate to={"/"} />
    }
]);

export const AppRouter = () => {
    return (
        <RouterProvider router={routesConfig} />
    )
}
