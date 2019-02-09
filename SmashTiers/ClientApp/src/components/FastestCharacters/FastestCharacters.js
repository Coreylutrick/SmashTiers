import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

export class FastestCharacters extends Component {

  state =
  {
    characters: []
  }

  componentDidMount() {
    characterRequests
    .getCharacterByFastest()
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

    const fastestCharacter = this.state.characters.map((character) => {
      return (
        <div key={character.id}>
          <img src={character.picture} width='250' onClick={() => singleCharacter(character.id)} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1>Fastest Characters</h1>
        </div>
        <div>
          {fastestCharacter}
        </div>
      </div>
    )

  }

}