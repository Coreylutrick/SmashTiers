import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';

export class SingleCharacter extends Component {

  state =
  {
    character: []
  }

  componentDidMount ()
  {
    const characterId = this.props.match.params.id;
    characterRequests.getCharacterById(characterId)
    .then((res) =>
    {
      this.setState({character: res});
    })
    .catch((err) =>
    {
      console.error(err)
    })
  }

  render ()
  {
    const singleCharacter = this.state.character.map((character) =>
    {
      return (
        <div>
          <div key={character.id}>
            <div>
              <h1>{character.characterName}</h1>
            </div>
            <div>
              <img src={character.picture} width="350" />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          {singleCharacter}
        </div>
      </div>
    )
  }

}