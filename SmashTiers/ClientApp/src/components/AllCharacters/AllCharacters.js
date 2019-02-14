import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import './AllCharacters.css'


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

        const sortByLightest = () => {
            this.props.history.push(`/character/lightest`)
        }

        const sortBySlowest = () => {
            this.props.history.push(`/character/slowest`)
        }

        const sortByFastest = () => {
            this.props.history.push(`/character/fastest`)
        }

        const allCharacters = this.state.characters.map((character) => {
            return (
                <div key={character.id} className="col-sm-2 col-sm-offset-1 character">
                    <img src={character.picture} className="characterPicture" onClick={() => singleCharacter(character.id)} />
                </div>
            );
        });

        return (
            <div>
                <div className="title">
                    <h1>Characters</h1>
                </div>
                <div className="button">
                    <button onClick={() => sortByHeaviest()}>Heaviest</button>
                    <button onClick={() => sortByLightest()}>Lightest</button>
                    <button onClick={() => sortBySlowest()}>Slowest</button>
                    <button onClick={() => sortByFastest()}>Fastest</button>
                </div>
                <div className="row characterContainer">
                    {allCharacters}
                </div>
            </div>
        );
    }
}