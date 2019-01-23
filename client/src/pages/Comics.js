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
            <Intro>
                Instead of selling my comics one by one through something like eBay, I've decided to
                just sell the entire collection at once. The condition for each is simply my
                opinion. I tried being brutally honest, but admittedly, I could be off in either
                direction, as I'm not a professional grader.
            </Intro>
            <ComicSearch />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    position: relative;
    max-width: 900px;
    margin: 0 auto;
`;

const Intro = styled.p`
    color: white;
    font-weight: 400;
    line-height: 28px;
    font-size: 17px;
`;

export default Comics;
