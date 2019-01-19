import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';
import styled from 'styled-components';
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
            <Form id="add-comic" onSubmit={this.submitForm.bind(this)}>
                <Field>
                    <Label>Comic title:</Label>
                    <Input
                        type="text"
                        list="comics"
                        onChange={e => this.setState({ title: e.target.value })}
                    />
                    <Datalist id="comics" onChange={e => this.setState({ title: e.target.value })}>
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
                    </Datalist>
                </Field>
                <Field>
                    <Label>Number:</Label>
                    <Input type="text" onChange={e => this.setState({ number: e.target.value })} />
                </Field>
                <Field>
                    <Label>Year:</Label>
                    <Input type="text" onChange={e => this.setState({ year: e.target.value })} />
                </Field>
                <Field>
                    <Label>Condition:</Label>
                    <Input
                        type="text"
                        onChange={e => this.setState({ condition: e.target.value })}
                    />
                </Field>
                <Field>
                    <Label>Notes:</Label>
                    <Input type="text" onChange={e => this.setState({ notes: e.target.value })} />
                </Field>
                <Field>
                    <Label>Image:</Label>
                    <Input type="text" onChange={e => this.setState({ image: e.target.value })} />
                </Field>
                {/* <Button type="submit" /> */}
            </Form>
        );
    }
}

const Form = styled.form`
    font-size: 20px;
    padding: 30px;
    width: 800px;
`;

const Field = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
`;

const Label = styled.label`
    padding: 10px;
    text-align: right;
    color: white;
`;

const Input = styled.input`
    box-sizing: border-box;
    font-size: 20px;
    margin: 4px 0;
    padding: 6px;
`;

const Datalist = styled.datalist`
    box-sizing: border-box;
    font-size: 20px;
    margin: 4px 0;
    padding: 6px;
`;

// const Button = styled.button`
//     background: #ad1457;
//     border: 0;
//     border-radius: 50%;
//     bottom: 10px;
//     color: #ffffff;
//     cursor: pointer;
//     font-size: 2em;
//     left: 10px;
//     padding: 0 10px;
//     position: absolute;
// `;

export default compose(graphql(addComicMutation, { name: 'addComicMutation' }))(AddComic);
