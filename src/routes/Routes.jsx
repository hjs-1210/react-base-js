import { useEffect } from "react"
import DefaultLayout from "@components/layouts/DefaultLayout"
import NotFound from "@pages/Error"
import LoginPage from "@pages/Auth"
import IntroPage from "@pages/Intro"
import { useLocation, useNavigate, useRoutes } from "react-router-dom"
import AboutPage from "@pages/About"

const Routes = () => {
    const navigate = useNavigate()
    const { pathname, search } = useLocation()

    useEffect(() => {
        if (!sessionStorage.getItem("LOGIN")) {
            navigate("/", { state: { pathname: pathname, search: search } })
        }
    }, [sessionStorage.getItem("LOGIN")])

    const routeList = [
        {
            path: "/",
            children: [
                { index: true, element: <LoginPage /> },
                { path: "/login", element: <LoginPage /> },
            ],
        },
        {
            path: "*",
            element: <NotFound />,
        },
        {
            path: "/intro",
            element: <DefaultLayout />,
            children: [{ index: true, element: <IntroPage /> }],
        },
        {
            path: "/about",
            element: <DefaultLayout />,
            children: [{ index: true, element: <AboutPage /> }],
        },
    ]
    return useRoutes(routeList)
}

export default Routes
