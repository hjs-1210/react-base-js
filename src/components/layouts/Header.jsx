import React from "react"
import Button from "@components/widget/button"
import { useNavigate } from "react-router"
import styled from "styled-components"

const Header = () => {
    const navigate = useNavigate()

    const logout = () => {
        sessionStorage.clear()
        navigate("/")
    }
    return (
        <HeaderLayout>
            <div>
                <span
                    style={{ marginRight: "10px" }}
                    onClick={() => navigate("/intro")}
                >
                    INTRO
                </span>
                <span onClick={() => navigate("/about")}>ABOUT</span>
            </div>
            <Button
                btnType="default"
                onClick={() => logout()}
            >
                Log Out
            </Button>
            {/* <button
        onClick={() => {
          console.log(props.menuList);
          sidebarUtils.toggleSideBar(props.menuList);
        }}
      >
      </button> */}
        </HeaderLayout>
    )
}

export default Header

// Styled Component 정의
const HeaderLayout = styled.div`
    display: flex;
    padding: 0 30px;
    height: 100px;
    background: black;
    align-items: center;
    justify-content: space-between;
    color: #ffffff;
`
