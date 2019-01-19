import React from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { GET_COMICS } from '../queries/queries';

// components

const ComicList = () => (
    <Query query={GET_COMICS}>
        {({ loading, error, data }) => {
            if (loading) return <Info>Loading...</Info>;
            if (error) return <Info>Error :(</Info>;

            return (
                <React.Fragment>
                    <Title>Total comics: {data.comics.length}</Title>
                    {data.comics.reverse().map(comic => (
                        <ListWrapper key={comic.id}>
                            <Item>{comic.title}</Item>
                            <span className="bullet">•</span>
                            <Item>{comic.number}</Item>
                            <span className="bullet">•</span>
                            <Item>{comic.year}</Item> <span className="bullet">•</span>
                            <Item>{comic.condition}</Item> <span className="bullet">•</span>
                            <Item>{comic.notes}</Item>
                        </ListWrapper>
                    ))}
                </React.Fragment>
            );
        }}
    </Query>
);

const ListWrapper = styled.div`
    position: relative;
`;

const Title = styled.h2`
    color: white;
`;

const Item = styled.p`
    display: inline-block;
    color: white;
`;

const Info = styled.p`
    color: darkorange;
`;

export default ComicList;
