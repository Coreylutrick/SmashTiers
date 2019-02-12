import React, { Component } from 'react';
import tierListRequests from '../../DBRequests/TierListsRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

state =
{
  tierList: []
}

componentDidMount ()
{
  const tierListId = this.props.match.id;
  tierListRequests.getTierListById(tierListId)
  .then((res) =>
  {
    this.setState({tierList: res})
  })
  .catch((err) =>
  {
    console.error(err)
  })
}

render ()
{
  const singleCharacter = this.state.tierList.map((tierList) =>
  {
    return (
      <div key={character.id}>
        <div>
          <h1>{tierList.title}</h1>
        </div>
      </div>
    )
  })
}
