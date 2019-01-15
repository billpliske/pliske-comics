import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import { addComicMutation, getComicsQuery } from '../queries/queries';

class AddComic extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            number: '',
            year: '',
            condition: '',
            notes: '',
            image: '',
        };
    }

    submitForm(e) {
        e.preventDefault();
        // use the addComicMutation
        this.props.addComicMutation({
            variables: {
                title: this.state.title,
                number: this.state.number,
                year: this.state.year,
                condition: this.state.condition,
                notes: this.state.notes,
                image: this.state.image,
            },
            refetchQueries: [{ query: getComicsQuery }],
        });
        document.getElementById('add-comic').reset();
        document.querySelector('input').focus();
    }
    render() {
        return (
            <form id="add-comic" onSubmit={this.submitForm.bind(this)}>
                <div className="field">
                    <label>Comic title:</label>
                    <input type="text" onChange={e => this.setState({ title: e.target.value })} />
                </div>
                <div className="field">
                    <label>Number:</label>
                    <input type="text" onChange={e => this.setState({ number: e.target.value })} />
                </div>
                <div className="field">
                    <label>Year:</label>
                    <input type="text" onChange={e => this.setState({ year: e.target.value })} />
                </div>
                <div className="field">
                    <label>Condition:</label>
                    <input
                        type="text"
                        onChange={e => this.setState({ condition: e.target.value })}
                    />
                </div>
                <div className="field">
                    <label>Notes:</label>
                    <input type="text" onChange={e => this.setState({ notes: e.target.value })} />
                </div>
                <div className="field">
                    <label>Image:</label>
                    <input type="text" onChange={e => this.setState({ image: e.target.value })} />
                </div>
                <button type="submit" />
            </form>
        );
    }
}

export default compose(graphql(addComicMutation, { name: 'addComicMutation' }))(AddComic);
