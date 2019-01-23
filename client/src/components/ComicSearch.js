import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';
import styled, { css } from 'styled-components';
import { SEARCH, GET_COMICS } from '../queries/queries';

// components

class ComicSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            number: null,
            year: null,
        };
    }

    updateRadio = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Fragment>
                <Search type="text" placeholder="Search for title, number, or year" />
                <BtnTitle>Title</BtnTitle>
                <BtnNumber>Number</BtnNumber>
                <BtnYear>Year</BtnYear>

                <Query
                    query={SEARCH}
                    variables={{
                        title: this.state.title,
                        number: this.state.number,
                        year: this.state.year,
                    }}
                >
                    {({ loading, error, data }) => {
                        if (loading) return <Info>Loading...</Info>;
                        if (error) return <Info>Error</Info>;

                        return (
                            <Fragment>
                                <Title>Total comics: {data.comic.length}</Title>

                                <Columns>
                                    <Column>Title</Column>
                                    <Column>Number</Column>
                                    <Column>Year</Column>
                                    <Column>Condition</Column>
                                    <Column>Notes</Column>
                                </Columns>
                                {data.comic.map(comic => (
                                    <ListWrapper key={comic.id}>
                                        <Item>{comic.title}</Item>

                                        <Item>{comic.number}</Item>

                                        <Item>{comic.year}</Item>

                                        <Item>{comic.condition}</Item>

                                        <Item>{comic.notes}</Item>
                                    </ListWrapper>
                                ))}
                            </Fragment>
                        );
                    }}
                </Query>
            </Fragment>
        );
    }
}

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
    align-self: center;
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

const Search = styled.input`
    padding: 13px;
    display: inline-block;
    border: 0;
    font-size: 17px;
    width: 40%;
    margin-right: 10px;
`;

const BtnStyles = css`
    padding: 14px 10px;
    display: inline-block;
    border: 0;
    font-size: 14px;
    margin-left: 5px;
`;

const BtnTitle = styled.button`
    ${BtnStyles}
`;

const BtnNumber = styled.button`
    ${BtnStyles}
`;

const BtnYear = styled.button`
    ${BtnStyles}
`;

export default ComicSearch;
