import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

export class HeaviestCharacters extends Component {

  state =
  {
    characters: []
  }

  componentDidMount() {
    characterRequests
    .GetCharactersByHeaviest()
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
                <h1>Heaviest Characters(descending)</h1>
            </div>
            <div>
                {allCharacters}
            </div>
        </div>
    );
}

}