import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

export class StageMostPlatforms extends Component {

  state =
  {
    stages: []
  }

  componentDidMount() {
    stageRequests
    .getStagesMostPlatforms()
    .then((stages) => {
      this.setState({ stages })
    })
    .catch((err) => {
      console.error(err)
    });
  }

  render () {

    const singleStage = (id) => {
      this.props.history.push(`/stage/${id}`)
    }

    const stagesMostPlatforms = this.state.stages.map((stage) => {
      return (
        <div key={stage.id}>
          <img src={stage.picture} width="250" onClick={() => singleStage(stage.id)} />
        </div>

      );
    });

    return (
      <div>
        <div>
          <h1>Stages With Most Platforms</h1>
      </div>
      <div>
        {stagesMostPlatforms}
      </div>
    </div>
    )

  }

}