import React, { Component } from 'react';
import tierListRequests from '../../DBRequests/TierListsRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

export class SingleTierList extends Component {

  state =
  {
    tierList: []
  }

  componentDidMount ()
  {
    const tierListId = this.props.match.params.id;
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
    const singleTierList = this.state.tierList.map((tier) =>
    {
      return (
        <div key={tier.id}>
            <h1>{tier.title2}</h1>
            <img src={tier.characterImage} width="30" />
        </div>
      );
    });
    return (
      <div>
        {singleTierList}
      </div>
    )
  }
}
