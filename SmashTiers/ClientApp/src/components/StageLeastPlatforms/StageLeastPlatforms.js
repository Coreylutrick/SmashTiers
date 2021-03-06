import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import '../AllStages/AllStages.css'

export class StageLeastPlatforms extends Component {

  state =
  {
    stages: []
  }

  componentDidMount() {
    stageRequests
    .getStagesLeastPlatforms()
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

    const stagesLeastPlatforms = this.state.stages.map((stage) => {
      return (
        <div key={stage.id} className="col-sm-2 stage">
          <img src={stage.picture} className="stageImage" onClick={() =>singleStage(stage.id)}/>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1 className="title">Stages With Least Platforms</h1>
        </div>
        <div className="row">
          {stagesLeastPlatforms}
        </div>
      </div>
    )

  }

}
