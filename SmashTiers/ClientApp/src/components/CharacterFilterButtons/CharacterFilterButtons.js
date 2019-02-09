import React, { Component } from 'react';
import characterRequests from '../../DBRequests/CharacterRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

export class CharacterFilterButtons extends Component {

  render () {

    const sortByHeaviest = () => {
      this.props.history.push(`/character/heaviest`)
    }

    return (
      <div>
        <button onClick={() => sortByHeaviest()}>Heaviest</button>
      </div>
    )

  }

}