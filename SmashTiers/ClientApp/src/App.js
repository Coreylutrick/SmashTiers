import React, { Component } from 'react';
import { Switch, Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Stage } from './components/AllStages/AllStages';
import { Character } from './components/AllCharacters/AllCharacters';
import { SingleCharacter } from './components/SingleCharacter/SingleCharacter'
import { SingleStage } from './components/SingleStage/SingleStage';
import { HeaviestCharacters } from './components/HeaviestCharacters/HeaviestCharacters';
import { LightestCharacters } from './components/LightestCharacters/LightestCharacters';
import { FastestCharacters } from './components/FastestCharacters/FastestCharacters';
import { SlowestCharacters } from './components/SlowestCharacters/SlowestCharacters';
import { StageLeastPlatforms } from './components/StageLeastPlatforms/StageLeastPlatforms';
import { StageMostPlatforms } from './components/StageMostPlatforms/StageMostPlatforms';
import { StagesTournamentLegal } from './components/StageTournamentLegal/StageTournamentLegal';
import { StagesNotTournamentLegal } from './components/StageNotTournamentLegal/StageNotTournamentLegal';
import { TierList } from './components/TierList/TierList';
import { Registration } from './components/Registration/Registration';
import { Authentication } from './components/Authentication/Authentication';
import fbConnection from '../src/FbRequests/connection';

fbConnection();

export default class App extends Component {
  displayName = App.name

  state =
  {
    authed: false
  }

  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/stage/notTournamentLegal' component={StagesNotTournamentLegal} />
          <Route path='/stage/tournamentLegal' component={StagesTournamentLegal} />
          <Route path='/stage/mostPlatforms' component={StageMostPlatforms} />
          <Route path='/stage/leastPlatforms' component={StageLeastPlatforms} />
          <Route path='/character/slowest' component={SlowestCharacters} />
          <Route path='/character/fastest' component={FastestCharacters} />
          <Route path='/character/lightest' component={LightestCharacters} />
          <Route path='/character/heaviest' component={HeaviestCharacters} />
          <Route path='/stage/:id' component={SingleStage} />
          <Route path='/character/:id' component={SingleCharacter} />
          <Route path='/registration' component={Registration} />
          <Route path='/authentication' component={Authentication} />
          <Route exact path='/' component={Home} />
          <Route path='/tierList' component={TierList} />
          <Route path='/character' component={Character} />
          <Route path='/stage' component={Stage} />
        </Switch>
      </Layout>
    );
  }
}
