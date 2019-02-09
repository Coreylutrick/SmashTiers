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

export default class App extends Component {
  displayName = App.name

  render() {
    return (
      <Layout>
        <Switch>
          <Route path='/character/slowest' component={SlowestCharacters} />
          <Route path='/character/fastest' component={FastestCharacters} />
          <Route path='/character/lightest' component={LightestCharacters} />
          <Route path='/character/heaviest' component={HeaviestCharacters} />
          <Route path='/stage/:id' component={SingleStage} />
          <Route path='/character/:id' component={SingleCharacter} />
          <Route exact path='/' component={Home} />
          <Route path='/character' component={Character} />
          <Route path='/stage' component={Stage} />
        </Switch>
      </Layout>
    );
  }
}
