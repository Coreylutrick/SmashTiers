import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import { List, Card, Image } from 'semantic-ui-react'

export class SingleStage extends Component {

  state =
  {
    stage: []
  }

  componentDidMount ()
  {
    const stageId = this.props.match.params.id;
    stageRequests.getStageById(stageId)
    .then((res) =>
    {
      this.setState({stage: res});
    })
    .catch((err) =>
    {
      console.error(err)
    })
  }

  render ()
  {
    const singleStage = this.state.stage.map((stage) =>
    {
      return (
        <div key={stage.id} className="col-sm-4 col-sm-offset-4 stage">
          <Card>
            <Image src={stage.picture} />
            <Card.Content>
              <Card.Header>{stage.stageName}</Card.Header>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><h4>Platforms:</h4> {stage.platforms}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description><h4>Tournament Legal:</h4> {stage.tournamentLegal === true ? "Yes" : "No"}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Card.Description>
                <h4>Blast Zones:</h4>
                <List>
                  <List.Item><h5>Top:</h5> {stage.blastZoneTop}</List.Item>
                  <List.Item><h5>Bottom:</h5> {stage.blastZoneBottom}</List.Item>
                  <List.Item><h5>Right:</h5> {stage.blastZoneRight}</List.Item>
                  <List.Item><h5>Left:</h5> {stage.blastZoneLeft}</List.Item>
                </List>
              </Card.Description>
            </Card.Content>
          </Card>
        </div>
      );
    });

    return (
      <div>
        <div className="row">
          {singleStage}
        </div>
      </div>
    )
  }

}