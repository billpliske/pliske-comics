//import libraries
import React from 'react';
import styled from 'styled-components';

// create a component
const Header = props => {
    return <StyledHeader>{props.header}</StyledHeader>;
};

// define your styles
const StyledHeader = styled.h1`
    color: darkorange;
    text-align: center;
    font-weight: 800;
    letter-spacing: 12px;
    text-transform: uppercase;
    font-size: 38px;
    padding: 20px 0;
`;

export default Header;
