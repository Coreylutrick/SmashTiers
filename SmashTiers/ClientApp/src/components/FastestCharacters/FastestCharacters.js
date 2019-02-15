import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import '../AllCharacters/AllCharacters.css'

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
        <div key={character.id} className="col-sm-2 col-sm-offset-1 character">
          <img src={character.picture} className="characterPicture" onClick={() => singleCharacter(character.id)} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1 className="title">Fastest Characters</h1>
        </div>
        <div>
          {fastestCharacter}
        </div>
      </div>
    )

  }

}