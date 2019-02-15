import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { List, Card, Image } from 'semantic-ui-react'
import './SingleCharacter.css'

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
    const dataCard = this.state.character.map((character) =>
    {
      return (
        <div className="col-sm-4 col-sm-offset-4 cCard" key={character.jabOne}>
          <Card raised color="blue">
              <Card.Content>
                <Card.Header>Moveset Damage Data</Card.Header>
              </Card.Content>
              <Card.Content extra>
              <Card.Description>
                  <h4>Move Base Damage:</h4>
                  <List>
                    <List.Item><h5>Jab One:</h5> {character.jabOne2}</List.Item>
                    <List.Item><h5>Jab Two:</h5> {character.jabTwo2}</List.Item>
                    <List.Item><h5>Jab Three:</h5> {character.jabThree2}</List.Item>
                    <List.Item><h5>Up Tilt:</h5> {character.fTilt2}</List.Item>
                    <List.Item><h5>Down Tilt:</h5> {character.uTilt2}</List.Item>
                    <List.Item><h5>Forward Tilt:</h5> {character.dTilt2}</List.Item>
                    <List.Item><h5>Dash Attack:</h5> {character.dashAttack2}</List.Item>
                    <List.Item><h5>Forward Smash:</h5> {character.fSmash2}</List.Item>
                    <List.Item><h5>Up Smash:</h5> {character.uSmash2}</List.Item>
                    <List.Item><h5>Down Smash:</h5> {character.dSmash2}</List.Item>
                    <List.Item><h5>Neutral Air:</h5> {character.nAir2}</List.Item>
                    <List.Item><h5>Forward Air:</h5> {character.fAir2}</List.Item>
                    <List.Item><h5>Back Air:</h5> {character.bAir2}</List.Item>
                    <List.Item><h5>Up Air:</h5> {character.uAir2}</List.Item>
                    <List.Item><h5>Down Air:</h5> {character.dAir2}</List.Item>
                    <List.Item><h5>Special:</h5> {character.special2}</List.Item>
                    <List.Item><h5>Side Special:</h5> {character.sideSpecial2}</List.Item>
                    <List.Item><h5>Up Special:</h5> {character.upB2}</List.Item>
                    <List.Item><h5>Forward Throw:</h5> {character.forwardThrow2}</List.Item>
                    <List.Item><h5>Back Throw:</h5> {character.backThrow2}</List.Item>
                    <List.Item><h5>Up Throw:</h5> {character.upThrow2}</List.Item>
                    <List.Item><h5>Down Throw:</h5> {character.downThrow2}</List.Item>
                  </List>
                </Card.Description>
              </Card.Content>
            </Card>
          </div>
      )
    })
    const singleCharacter = this.state.character.map((character) =>
    {
      return (
        <div key={character.id}  className="col-sm-4 col-sm-offset-4 cCard">
          <Card raised color="blue">
            <Image src={character.picture} />
            <Card.Content>
              <Card.Header>{character.characterName}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><h4>Weight:</h4> {character.weight}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><h4>Speed:</h4> {character.speed} </Card.Description>
            </Card.Content>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <div className="row">
          {singleCharacter}
        </div>
        <div className="row">
          {dataCard}
        </div>
      </div>
    )
  }

}