import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import '../AllStages/AllStages.css'

export class StagesTournamentLegal extends Component {

  state =
  {
    stages: []
  }

  componentDidMount() {
    stageRequests
    .getTournamentLegalStage()
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

    const stagesTournamentLegal = this.state.stages.map((stage) => {
      return (
        <div key={stage.id} className="col-sm-2 stage">
          <img src={stage.picture} className="stageImage" onClick={() =>singleStage(stage.id)}/>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1 className="title">Stages Tournament Legal</h1>
        </div>
        <div className="row">
          {stagesTournamentLegal}
        </div>
      </div>
    )

  }

}