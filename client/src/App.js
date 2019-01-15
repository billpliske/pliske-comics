import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

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
                <div id="main">
                    <h1>Comic uploader</h1>
                    <AddComic />
                    <ComicList />
                </div>
            </ApolloProvider>
        );
    }
}

export default App;
