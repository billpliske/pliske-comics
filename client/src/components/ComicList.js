import React, { Component } from 'react';
import { graphql } from 'react-apollo';
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
            return <div>Counting comics...</div>;
        } else {
            return `Total comics: ${data.comics.length}`;
        }
    }
    displayComics() {
        var data = this.props.data;

        if (data.loading) {
            return <div>Loading comics...</div>;
        } else {
            return data.comics.reverse().map(comic => {
                return (
                    <div key={comic.id}>
                        <p>{comic.title}</p> <span className="bullet">•</span> <p>{comic.number}</p>{' '}
                        <span className="bullet">•</span> <p>{comic.year}</p>{' '}
                        <span className="bullet">•</span> <p>{comic.condition}</p>{' '}
                        <span className="bullet">•</span> <p>{comic.notes}</p>
                    </div>
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

export default graphql(getComicsQuery)(ComicList);
