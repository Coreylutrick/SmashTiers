﻿import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
//import { CharacterFilterButtons } from '../CharacterFilterButtons/CharacterFilterButtons';


export class Character extends Component {

    state =
    {
        characters: []
    }

    componentDidMount() {
        characterRequests
        .getAllCharactersRequest()
        .then((characters) => {
            this.setState({ characters })
        })
        .catch((err) => {
            console.error(err)
        });
    }

    render() {

        const singleCharacter = (id) => {
            this.props.history.push(`/character/${id}`)
        }

        const sortByHeaviest = () => {
            this.props.history.push(`/character/heaviest`)
        }

        const allCharacters = this.state.characters.map((character) => {
            return (
                <div key={character.id}>
                    <img src={character.picture} width="250" onClick={() => singleCharacter(character.id)} />
                </div>
            );
        });

        return (
            <div>
                <div>
                    <h1>Characters</h1>
                </div>
                <div>
                    <button onClick={() => sortByHeaviest()}>Heaviest</button>
                </div>
                <div>
                    {allCharacters}
                </div>
            </div>
        );
    }
}