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
                <Wrapper>
                    <Title>Total comics: {data.comics.length}</Title>

                    <Columns>
                        <Column>Title</Column>
                        <Column>Number</Column>
                        <Column>Year</Column>
                        <Column>Condition</Column>
                        <Column>Notes</Column>
                    </Columns>
                    {data.comics.reverse().map(comic => (
                        <ListWrapper key={comic.id}>
                            <Item>{comic.title}</Item>

                            <Item>{comic.number}</Item>

                            <Item>{comic.year}</Item>

                            <Item>{comic.condition}</Item>

                            <Item>{comic.notes}</Item>
                        </ListWrapper>
                    ))}
                </Wrapper>
            );
        }}
    </Query>
);

const Wrapper = styled.div`
    position: relative;
`;

const Title = styled.h2`
    color: white;
`;

const Columns = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr repeat(3, 70px) 1fr;
`;

const Column = styled.div`
    font-style: italic;
    font-size: 14px;
    padding: 10px 0;
    color: darkorange;
    text-align: center;
    &:first-of-type {
        text-align: left;
    }
    &:last-of-type {
        text-align: left;
    }
`;
const ListWrapper = styled.div`
    position: relative;
    border-top: 1px solid #880e4f;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr repeat(3, 70px) 1fr;
`;

const Item = styled.div`
    color: white;
    padding: 10px 0;
    text-align: center;
    &:first-of-type {
        text-align: left;
    }
    &:last-of-type {
        text-align: left;
    }
`;

const Info = styled.p`
    color: darkorange;
`;

export default ComicList;
