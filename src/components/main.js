import React from 'react';
import { Switch, Route } from 'react-router-dom';

import AboutMe from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Home from './home';


const Main = () => (
  <Switch>
    <Route exact path="/" exact component={Home} />
    <Route path="/home" component={Home} />
    <Route path="/aboutme" component={AboutMe} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;
