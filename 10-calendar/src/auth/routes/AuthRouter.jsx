import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../../hooks";

export const AuthRouter = () => {
  const { status } = useAuthStore();

  if (status === 'authenticated') {
    return <Navigate to='/*' />
  }

  return (
    <>
      <Outlet />
    </>
  )
}
