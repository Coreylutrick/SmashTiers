import React, { Component } from 'react';
import tierListRequests from '../../DBRequests/TierListsRequests';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import { Card, Image } from 'semantic-ui-react';
import './SingleTierList.css'

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
        <div key={tier.characterImage} className="col-xs-4 characterCard">
          <Card raised color="blue">
            <Image src={tier.characterImage} />
            <Card.Content>
              <Card.Header className="tierPLace">{tier.title2}</Card.Header>
            </Card.Content>
          </Card>
        </div>
      );
    });
    return (
      <div>
        <div className="row">
          {singleTierList}
        </div>
      </div>
    )
  }
}
