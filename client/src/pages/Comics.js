//import libraries
import React from 'react';
import ComicSearch from '../components/ComicSearch';
import Header from '../components/Header';
import styled from 'styled-components';

// create a component
const Comics = () => {
    return (
        <Wrapper>
            <Header header="Comic collection" />
            <ComicSearch />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    max-width: 900px;
    margin: 0 auto;
`;

export default Comics;
