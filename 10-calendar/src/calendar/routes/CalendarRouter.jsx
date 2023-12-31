import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const CalendarRouter = () => {

    const { status } = useAuthStore();

    if (status === 'not-authenticated') {
        return <Navigate to='/auth/login' />;
    }

    return (
        <>
            <Outlet />
        </>
    )
}
