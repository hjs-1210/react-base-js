import React from "react"
import { useLocation } from "react-router-dom"

const Title = () => {
    const { pathname } = useLocation()
    const title = process.env.REACT_APP_TITLE
    const subTitle = pathname
    document.title = subTitle ? `${title} | ${subTitle || ""}` : title
    return null
}

export default Title
