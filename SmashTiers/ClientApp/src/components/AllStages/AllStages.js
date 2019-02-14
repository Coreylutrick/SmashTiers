import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Button, Glyphicon } from 'react-bootstrap';
import './AllStages.css';

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

    const notTournamentLegal = () => {
      this.props.history.push(`/stage/notTournamentLegal`)
    }

    const tournamentLegal = () => {
      this.props.history.push(`/stage/tournamentLegal`)
    }

    const mostPlatforms = () => {
      this.props.history.push(`/stage/mostPlatforms`)
    }

    const leastPlatforms = () => {
      this.props.history.push(`/stage/leastPlatforms`)
    }

    const singleStage = (id) => {
      this.props.history.push(`/stage/${id}`)
    }

    const allStages = this.state.stages.map((stage) => {
      return (
        <div key={stage.id} className="col-sm-2 col-sm-offset-1 stage">
          <img src={stage.picture} width="100" className="stageImage" onClick={() =>singleStage(stage.id)}/>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1 className="title">Stages</h1>
        </div>
        <div>
          <button onClick={() => leastPlatforms()}>Least Platforms</button>
          <button onClick={() => mostPlatforms()}>Most Platforms</button>
          <button onClick={() => tournamentLegal()}>Tournament Legal</button>
          <button onClick={() => notTournamentLegal()}>Not Tournament Legal</button>
        </div>
        <div className="row">
          {allStages}
        </div>
      </div>
    )
  }

}