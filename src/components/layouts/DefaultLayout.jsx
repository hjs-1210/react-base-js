import React from "react"
import { Outlet } from "react-router"
import Header from "./Header"

const DefaultLayout = ({ children }) => (
    <>
        <div className="wrapper">
            {/* <SidebarComponent menuList={menuList} /> */}
            <div className="main-wrapper">
                <Header />
                <div className="content-wrapper">
                    {/* children이 있을경우는 children을 없을 경우에는 Outlet을 나타내준다 */}
                    {children || <Outlet />}
                </div>
            </div>
        </div>
    </>
)

export default DefaultLayout
