import React from "react"
import Button from "@components/widget/button"
import styled from "styled-components"
import { useNavigate } from "react-router-dom"
import { CenterDiv } from "src/styles/common"

const LoginPage = () => {
    const navigate = useNavigate()
    const login = () => {
        sessionStorage.setItem("LOGIN", "true")
        navigate("/intro")
    }
    return (
        <CenterDiv>
            <FlexDiv className="input">
                <input
                    name="id"
                    placeholder="id"
                    style={{ width: "inherit" }}
                    onKeyUp={e => (e.key === "Enter" ? login() : "")}
                />
                <Button
                    btnType="primary"
                    width="100%"
                    onClick={() => login()}
                >
                    login
                </Button>
            </FlexDiv>
        </CenterDiv>
    )
}

export default LoginPage

const FlexDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 10px;
`
