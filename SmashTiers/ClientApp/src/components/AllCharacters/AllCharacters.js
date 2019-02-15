import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Glyphicon } from 'react-bootstrap';
import { Button, Segment } from 'semantic-ui-react';
import './AllCharacters.css';


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
                <div>
                    <div className="button">
                        <Button onClick={() => sortByHeaviest()} inverted color='red'>
                            Heaviest
                        </Button>
                        <Button onClick={() => sortByLightest()} inverted color='yellow'>
                            Lightest
                        </Button>
                        <Button onClick={() => sortBySlowest()} inverted color='green'>
                            Slowest
                        </Button>
                        <Button onClick={() => sortByFastest()} inverted color='blue'>
                            Fastest
                        </Button>
                    </div>
                </div>
                <div className="row characterContainer">
                    {allCharacters}
                </div>
            </div>
        );
    }
}