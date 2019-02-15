import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import '../AllCharacters/AllCharacters.css'

export class LightestCharacters extends Component {

  state =
  {
    characters: []
  }

  componentDidMount() {
    characterRequests
    .getCharacterByLightest()
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

    const lightestCharacters = this.state.characters.map((character) => {
      return (
        <div key={character.id} className="col-sm-2 col-sm-offset-1 character">
          <img src={character.picture} className="characterPicture" onClick={() => singleCharacter(character.id)} />
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1 className="title">Lightest Characters</h1>
        </div>
        <div>
          {lightestCharacters}
        </div>
      </div>
    )

  }

}