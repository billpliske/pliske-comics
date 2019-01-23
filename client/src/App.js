import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';

// components
import Routing from './pages/Routing';

// apollo client setup
const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
});

class App extends Component {
    render() {
        return (
            <ApolloProvider client={client}>
                <Wrapper>
                    <Overlay>
                        <ScrolledDiv>
                            <Routing />
                        </ScrolledDiv>
                    </Overlay>
                </Wrapper>
            </ApolloProvider>
        );
    }
}

const Wrapper = styled.div`
    background-image: url("https://res.cloudinary.com/billpliske/image/upload/v1547845119/city.jpg");
    background-size: cover;
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    font-family: 'raleway', sans-serif;
}`;

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
}`;

const ScrolledDiv = styled.div`
    box-sizing: border-box;
    height: 100%;
    max-width: 1200px;
    margin: 0 auto;
    overflow: scroll;
    padding: 20px;
    position: relative;
    padding-bottom: 200px;
`;

export default App;
