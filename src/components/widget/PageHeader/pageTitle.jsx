import React from 'react';
import styled from 'styled-components';

const PageTitle = (props) => {
    const {tempTitle} = props
    return (
        <h2>
            <GrayTitle>
                {tempTitle.mainTitle} ▶
            </GrayTitle>
            <GrayTitle>
                {tempTitle.subTitle} ▶
            </GrayTitle>
            <span>
                {tempTitle.thirdTitle}
            </span>
        </h2>
    );
};

export default PageTitle;

const GrayTitle = styled.span`
    color: #959a9d;
    text-decoration: none;
    margin-right: 10px;
`