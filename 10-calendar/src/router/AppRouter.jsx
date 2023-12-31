import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRouter, AuthRoutes } from '../auth';
import { CalendarRouter, CalendarRoutes } from '../calendar';
import { useAuthStore } from '../hooks';
import { useEffect } from 'react';

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
    const { checkAuthToken } = useAuthStore();

    useEffect(() => {
        checkAuthToken();
    }, []);


    return (
        <RouterProvider router={routesConfig} />
    )
}
