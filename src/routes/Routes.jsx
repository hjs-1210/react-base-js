import { useEffect } from "react"
import DefaultLayout from "@components/layouts/DefaultLayout"
import NotFound from "@pages/Error"
import LoginPage from "@pages/Auth"
import IntroPage from "@pages/Intro"
import { useLocation, useNavigate, useRoutes } from "react-router-dom"
import AboutPage from "@pages/About"

const AuthenticatedRoutes = () => {
    const routeList = [
        {
            path: "/intro",
            // @ts-ignore
            element: <DefaultLayout />,
            children: [{ index: true, element: <IntroPage /> }],
        },
        {
            path: "/about",
            // @ts-ignore
            element: <DefaultLayout />,
            children: [{ index: true, element: <AboutPage /> }],
        },
        {
            path: "*",
            element: <NotFound />,
        },
    ]
    return useRoutes(routeList)
}

const UnauthenticatedRoutes = () => {
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
    ]
    return useRoutes(routeList)
}


const Routes = () => {
    const navigate = useNavigate()
    const { pathname, search } = useLocation()
    const isLoggedIn = !!sessionStorage.getItem("LOGIN")

    useEffect(() => {
        if (!isLoggedIn) {
            navigate("/", { state: { pathname: pathname, search: search } })
        }
    }, [isLoggedIn])

    return isLoggedIn ? <AuthenticatedRoutes /> : <UnauthenticatedRoutes />
}

export default Routes
