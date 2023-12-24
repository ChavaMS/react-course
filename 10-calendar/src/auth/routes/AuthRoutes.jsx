import { Navigate } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const AuthRoutes = [
    { path: "login", element: <LoginPage /> },
    { path: "/auth/*", element: <Navigate to={"/auth/login"} /> },
];
