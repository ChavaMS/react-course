import { Navigate } from "react-router-dom";
import { DcPage, MarvelPage, SearchPage, HeroePage } from "../pages";

export const childrenHeroesRoutes = [
    {
        path: "marvel",
        element: <MarvelPage />
    },
    {
        path: "dc",
        element: <DcPage />
    },
    {
        path: "search",
        element: <SearchPage />
    },
    {
        path: "hero/:heroId",
        element: <HeroePage />
    },
    {
        path: "/*",
        element: <Navigate to={"/marvel"} />
    }
]