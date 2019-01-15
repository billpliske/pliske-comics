import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getComicQuery } from '../queries/queries';

class ComicDetails extends Component {
    displayComicDetails() {
        const { comic } = this.props.data;
        if (comic) {
            return (
                <div>
                    <h2>{comic.title}</h2>
                    <ul>
                        <li>{comic.number}</li>
                        <li>{comic.year}</li>
                        <li>
                            <strong>Notes:</strong> {comic.notes}
                        </li>
                    </ul>
                </div>
            );
        } else {
            return <div>No comic selected...</div>;
        }
    }
    render() {
        return <div id="comic-details">{this.displayComicDetails()}</div>;
    }
}

export default graphql(getComicQuery, {
    options: props => {
        return {
            variables: {
                id: props.comicId,
            },
        };
    },
})(ComicDetails);
