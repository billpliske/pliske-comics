import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import styled from 'styled-components';

// components
import ComicList from './components/ComicList';
import AddComic from './components/AddComic';

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
                        <div id="main">
                            <Header>Comic uploader</Header>
                            <AddComic />
                            <ComicList />
                        </div>
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
}`;

const Overlay = styled.div`
    background-color: rgba(0,0,0,0.7);
    bottom: 0;
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
}`;

const Header = styled.h1`
    color: white;
    text-align: center;
`;

export default App;
