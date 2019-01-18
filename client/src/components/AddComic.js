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
                    <input
                        type="text"
                        list="comics"
                        onChange={e => this.setState({ title: e.target.value })}
                    />
                    <datalist id="comics" onChange={e => this.setState({ title: e.target.value })}>
                        <option>Action Comics</option>
                        <option>Alpha Flight</option>
                        <option>Amazing Spider-Man</option>
                        <option>Aquaman</option>
                        <option>Avengers</option>
                        <option>Brave and the Bold</option>
                        <option>Daredevil</option>
                        <option>Defenders</option>
                        <option>Doctor Strange</option>
                        <option>Fantastic Four</option>
                        <option>Flash</option>
                        <option>House of Mystery</option>
                        <option>Invaders</option>
                        <option>Justice League of America</option>
                        <option>Legion of Super-Heroes</option>
                        <option>Marvel Tales</option>
                        <option>Marvel Team-Up</option>
                        <option>Marvel Two-In-One</option>
                        <option>Ms. Marvel</option>
                        <option>Strange Tales</option>
                        <option>Sub-Mariner</option>
                        <option>Superman</option>
                        <option>Teen Titans</option>
                        <option>Thor</option>
                        <option>Wonder Woman</option>
                        <option>World's Finest</option>
                        <option>X-Men</option>
                    </datalist>
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
