import React, { Fragment, Component } from 'react';
import { Query } from 'react-apollo';
import styled, { css } from 'styled-components';
import { SEARCH, GET_COMICS } from '../queries/queries';

// components

class ComicSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filter: 'title',
            title: '',
            number: null,
            year: null,
        };
    }

    updateSearch = e => {
        this.setState({ title: e.target.value });
        console.log(this.state.year);
        if (this.state.filter === 'number') {
            this.setState({ number: Number(e.target.value), year: null, title: '' });
        } else if (this.state.filter === 'year') {
            this.setState({ year: Number(e.target.value), number: null, title: '' });
        } else {
            this.setState({ title: e.target.value, number: null, year: null });
        }
    };

    saveToState = e => {
        if (e.target.name === 'number') {
            this.setState({ [e.target.name]: Number(e.target.value) });
        } else if (e.target.name === 'year') {
            this.setState({ [e.target.name]: e.target.value });
        } else {
            this.setState({ [e.target.name]: e.target.value });
        }
    };

    render() {
        return (
            <Fragment>
                <SearchGrid>
                    <SearchWrapper>
                        <Search
                            type="text"
                            placeholder="Search for title, number, or year"
                            onChange={this.updateSearch}
                        />
                    </SearchWrapper>
                    <ButtonWrapper>
                        <Label>Search by:</Label>

                        <select
                            value={this.state.filter}
                            placeholder="title"
                            name="filter"
                            onChange={this.saveToState}
                        >
                            <option value="title">title</option>
                            <option value="number">number</option>
                            <option value="year">year</option>
                        </select>
                    </ButtonWrapper>
                </SearchGrid>

                <Query
                    query={SEARCH}
                    variables={{
                        title: this.state.title,
                        number: this.state.number,
                        year: this.state.year,
                    }}
                    refetchQueries={[{ query: SEARCH }]}
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

const SearchGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 210px;
    grid-gap: 20px;
`;

const SearchWrapper = styled.div`
    margin-right: 20px;
`;

const ButtonWrapper = styled.div``;

const Search = styled.input`
    padding: 13px 12px 12px 12px;
    width: 100%;
    border: 0;
    font-size: 17px;
`;

const BtnStyles = css`
    padding: 14px 10px;
    display: inline-block;
    border: 0;
    font-size: 14px;
    font-weight: 500;
    margin-left: 5px;
    background-color: orange;
    color: #880e4f;
    border: #880e4f 2px solid;
`;

const Label = styled.label`
    padding: 10px;
    text-align: right;
    color: white;
`;

const Input = styled.input`
    ${BtnStyles}
`;

const Datalist = styled.datalist`
    box-sizing: border-box;
    font-size: 20px;
    margin: 4px 0;
    padding: 6px;
`;

export default ComicSearch;
