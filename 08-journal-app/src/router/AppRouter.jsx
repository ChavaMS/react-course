import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { AuthRoutes } from '../auth/routes/AuthRoutes';
import { AuthRouter } from '../auth/routes/AuthRouter';
import { ErrorPage } from '../ui/ErrorPage';
import { JournalRouter } from '../journal/routes/JournalRouter';
import { JournalRoutes } from '../journal/routes/JournalRoutes';
import { CheckingAuth } from '../ui';
import { useCheckAuth } from '../hooks';


const routesConfig = createBrowserRouter([
    {
        path: "/auth/*",
        // Login Y registro
        element: <AuthRouter />,
        children: AuthRoutes,
        errorElement: <ErrorPage />,
    },
    {
        // Journalist App
        path: "/",
        element: <JournalRouter />,
        children: JournalRoutes,
        errorElement: <ErrorPage />,
    },
    {
        path: "/*",
        element: <Navigate to={"/"} />,
    },
]);

export const AppRouter = () => {

    const status = useCheckAuth();

    if (status === 'checking') {
        return <CheckingAuth />
    }

    return (
        <RouterProvider router={routesConfig} />
    )
}
