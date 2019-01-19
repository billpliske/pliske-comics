import React, { Component } from 'react';
import { Mutation } from 'react-apollo';
import styled from 'styled-components';
import { ADD_COMIC, GET_COMICS } from '../queries/queries';

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

    saveToState = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <Mutation
                mutation={ADD_COMIC}
                variables={this.state}
                refetchQueries={[{ query: GET_COMICS }]}
            >
                {addComic => (
                    <Wrapper>
                        <Form
                            id="add-comic"
                            method="post"
                            onSubmit={async e => {
                                e.preventDefault();
                                await addComic();
                                this.setState({
                                    title: '',
                                    number: '',
                                    year: '',
                                    condition: '',
                                    notes: '',
                                    image: '',
                                });
                                document.getElementById('add-comic').reset();
                                document.querySelector('input').focus();
                            }}
                        >
                            <Field>
                                <Label>Comic title:</Label>
                                <Input
                                    type="text"
                                    name="title"
                                    list="comics"
                                    onChange={this.saveToState}
                                />
                                <Datalist id="comics" name="title" onChange={this.saveToState}>
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
                                    <option>Iron Man</option>
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
                                <Input type="text" name="number" onChange={this.saveToState} />
                            </Field>
                            <Field>
                                <Label>Year:</Label>
                                <Input type="text" name="year" onChange={this.saveToState} />
                            </Field>
                            <Field>
                                <Label>Condition:</Label>
                                <Input type="text" name="condition" onChange={this.saveToState} />
                            </Field>
                            <Field>
                                <Label>Notes:</Label>
                                <Input type="text" name="notes" onChange={this.saveToState} />
                            </Field>
                            <Field>
                                <Label>Image:</Label>
                                <Input type="text" name="image" onChange={this.saveToState} />
                            </Field>
                            <Button type="submit">Submit</Button>
                        </Form>
                    </Wrapper>
                )}
            </Mutation>
        );
    }
}

const Wrapper = styled.div`
    position: relative;
`;

const Form = styled.form`
    font-size: 17px;
    padding: 20px 0 0 0;
    /* width: 800px; */
`;

const Field = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 110px 1fr;
`;

const Label = styled.label`
    padding: 10px;
    text-align: right;
    color: white;
`;

const Input = styled.input`
    box-sizing: border-box;
    font-size: 17px;
    margin: 4px 0;
    padding: 6px;
`;

const Datalist = styled.datalist`
    box-sizing: border-box;
    font-size: 20px;
    margin: 4px 0;
    padding: 6px;
`;

const Button = styled.button`
    padding: 20px;
    display: block;
    width: 100%;
    margin: 30px auto;
    background-color: black;
    color: white;
    font-weight: 700;
    font-size: 20px;
`;

export default AddComic;
