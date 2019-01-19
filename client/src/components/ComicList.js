import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import styled from 'styled-components';
import { getComicsQuery } from '../queries/queries';

// components

class ComicList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: null,
        };
    }
    showCount() {
        var data = this.props.data;

        if (data.loading) {
            return <Info>Counting comics...</Info>;
        } else {
            return <Title>Total comics: {data.comics.length}</Title>;
        }
    }
    displayComics() {
        var data = this.props.data;

        if (data.loading) {
            return <Info>Loading comics...</Info>;
        } else {
            return data.comics.reverse().map(comic => {
                return (
                    <ListWrapper key={comic.id}>
                        <Item>{comic.title}</Item>
                        <span className="bullet">•</span>
                        <Item>{comic.number}</Item>
                        <span className="bullet">•</span>
                        <Item>{comic.year}</Item> <span className="bullet">•</span>
                        <Item>{comic.condition}</Item> <span className="bullet">•</span>
                        <Item>{comic.notes}</Item>
                    </ListWrapper>
                );
            });
        }
    }
    render() {
        return (
            <div>
                <ul id="comic-list">
                    <h2>{this.showCount()}</h2>
                    {this.displayComics()}
                </ul>
            </div>
        );
    }
}

const ListWrapper = styled.div`
    position: relative;
`;

const Title = styled.h2`
    color: white;
`;

const Item = styled.p`
    display: inline-block;
    color: white;
    &:nth-child(1) {
        width: 150px;
    }

    &:nth-child(3) {
        width: 50px;
    }

    &:nth-child(5) {
        width: 50px;
    }

    &:nth-child(7) {
        width: 50px;
    }

    &:nth-child(9) {
        width: 150px;
    }
`;

const Info = styled.p`
    color: darkorange;
`;

export default graphql(getComicsQuery)(ComicList);
