import React from "react"
import { CenterDiv } from "src/styles/common"
import { styled } from "styled-components"

const NotFound = () => {
    return (
        <CenterDiv>
            <ErrorDiv>
                <span>🫥</span>
                <span>404</span>
            </ErrorDiv>
        </CenterDiv>
    )
}

export default NotFound

const ErrorDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 10px;
    font-size: 5rem;
`
