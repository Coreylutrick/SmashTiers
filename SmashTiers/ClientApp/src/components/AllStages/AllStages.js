import React, { Component } from 'react';
import stageRequests from '../../DBRequests/StageRequest';
import { Modal, Glyphicon } from 'react-bootstrap';
import { Button, Segment } from 'semantic-ui-react';
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
        <div key={stage.id} className="col-sm-2 stage">
          <img src={stage.picture} className="stageImage" onClick={() =>singleStage(stage.id)}/>
        </div>
      );
    });

    return (
      <div>
        <div>
          <h1 className="title">Stages</h1>
        </div>
        <div className="button">
          <Button onClick={() => leastPlatforms()} inverted color='red'>
              Least Platforms
          </Button>
          <Button onClick={() => mostPlatforms()} inverted color='yellow'>
              Most PLatforms
          </Button>
          <Button onClick={() => tournamentLegal()} inverted color='green'>
              Tournament Legal
          </Button>
          <Button onClick={() => notTournamentLegal()} inverted color='blue'>
              Not Tournament Legal
          </Button>
        </div>
        <div className="row">
          {allStages}
        </div>
      </div>
    )
  }

}