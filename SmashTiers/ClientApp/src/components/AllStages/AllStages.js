import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

export class Stage extends Component {

  state =
  {
    stages: []
  }

  componentDidMount() {
    stageRequests
    .getAllStagesRequest()
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

    const allStages = this.state.stages.map((stage) => {
      return (
        <div key={stage.id}>
          <img src={stage.picture} width="250" onClick={() =>singleStage(stage.id)}/>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1>Stages</h1>
        </div>
        <div>
          {allStages}
        </div>
      </div>
    )
  }

}