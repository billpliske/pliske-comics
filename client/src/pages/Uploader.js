//import libraries
import React, { Fragment } from 'react';
import styled from 'styled-components';
import ComicList from '../components/ComicList';
import AddComic from '../components/AddComic';
import Header from '../components/Header';

// create a component
const Uploader = () => {
    return (
        <Fragment>
            <Header header="Comic Uploader" />
            <Grid>
                <AddComic />
                <ComicList />
            </Grid>
        </Fragment>
    );
};

const Grid = styled.div`
    display: grid;
    grid-gap: 50px;
    grid-template-columns: 1fr 3fr;
`;

export default Uploader;
