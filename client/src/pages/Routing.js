//import libraries
import React from 'react';
import styled from 'styled-components';
import { Route, Switch, withRouter } from 'react-router-dom';
import Comics from './Comics';
import Uploader from './Uploader';

// create a component
const Routing = () => {
    return (
        <Wrapper>
            <Switch>
                <Route exact path="/" component={Comics} />
                <Route exact path="/comics" component={Comics} />
                <Route exact path="/uploader" component={Uploader} />
            </Switch>
        </Wrapper>
    );
};

// define your styles
const Wrapper = styled.div`
    position: relative;
`;

export default withRouter(Routing);
