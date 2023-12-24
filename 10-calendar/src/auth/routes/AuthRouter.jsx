import { Navigate, Outlet } from "react-router-dom";

export const AuthRouter = () => {
  const authStatus = 'not-authenticated';

  if (authStatus === 'not-authenticated') {
    return <Navigate to='/*' />
  }

  return (
    <>
      <Outlet />
    </>
  )
}
