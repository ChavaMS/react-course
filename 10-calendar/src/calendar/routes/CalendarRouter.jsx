import { Navigate, Outlet } from "react-router-dom";

export const CalendarRouter = () => {

    const authStatus = 'authenticated';

    if (authStatus === 'not-authenticated') {
        return <Navigate to='/auth/login' />;
    }

    return (
        <>
            <Outlet />
        </>
    )
}
