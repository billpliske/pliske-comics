//import libraries
import React, { Fragment } from 'react';
import ComicList from '../components/ComicList';
import Header from '../components/Header';

// create a component
const Comics = () => {
    return (
        <Fragment>
            <Header header="Comic collection" />
            <ComicList />
        </Fragment>
    );
};

export default Comics;
