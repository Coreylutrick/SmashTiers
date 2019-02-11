import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Button, Glyphicon } from 'react-bootstrap';

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
        <div key={stage.id}>
          <div>
            <div>
              <h1>{stage.stageName}</h1>
            </div>
            <div>
              <img src={stage.picture} width="350" />
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <div>
          {singleStage}
        </div>
      </div>
    )
  }

}