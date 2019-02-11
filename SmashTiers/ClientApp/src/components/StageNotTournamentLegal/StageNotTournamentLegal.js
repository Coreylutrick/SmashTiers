import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

export class StagesNotTournamentLegal extends Component {

  state =
  {
    stages: []
  }

  componentDidMount() {
    stageRequests
    .getTournamentNotLegalStage()
    .then((stages) => {
      this.setState({ stages })
    })
    .catch((err) => {
      console.error(err)
    });
  }

  render() {

    const singleStage = (id) => {
      this.props.history.push(`/stage/${id}`)
    }

    const stagesTournamentNotLegal = this.state.stages.map((stage) => {
      return (
        <div key={stage.id}>
          <img src={stage.picture} width="250" onClick={() =>singleStage(stage.id)}/>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1>Stages Not Tournament Legal</h1>
        </div>
        <div>
          {stagesTournamentNotLegal}
        </div>
      </div>
    )

  }

}