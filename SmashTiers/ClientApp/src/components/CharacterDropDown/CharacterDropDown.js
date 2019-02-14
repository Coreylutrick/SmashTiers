import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Button, Glyphicon, Dropdown, DropdownButton } from 'react-bootstrap';

export class CharacterDropDown extends Component {
  state =
  {
    characters: []
  }

  componentDidMount() {
    characterRequests.getAllCharactersRequest()
    .then((characters) =>
    {
      this.setState({ characters })
    })
    .catch((err) =>
    {
      console.error(err)
    });
  }

  render() {
    const dropDownCharacters = this.state.characters.map((character) =>
    {
      return(
        <Dropdown.Item key={character.id} href="#/action-1">{character.characterName}</Dropdown.Item>
      );
    });

    return (
      <DropdownButton id="dropdown-basic-button" title="Dropdown button">
        {dropDownCharacters}
      </DropdownButton>
    )

  }

}