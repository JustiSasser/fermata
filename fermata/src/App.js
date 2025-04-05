import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import FermataHome from './pages/FermataHome';
import Coaching from './pages/Offerings/Coaching';
import Detox from './pages/Offerings/Detox';
import Faith from './pages/Offerings/Faith';
import Retreat from './pages/Offerings/Retreat';
import Wellness from './pages/Offerings/Wellness';
import Workshop from './pages/Offerings/Workshop';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={FermataHome} />
        <Route path="/offerings/coaching" component={Coaching} />
        <Route path="/offerings/detox" component={Detox} />
        <Route path="/offerings/faith" component={Faith} />
        <Route path="/offerings/retreat" component={Retreat} />
        <Route path="/offerings/wellness" component={Wellness} />
        <Route path="/offerings/workshop" component={Workshop} />
      </Switch>
    </Router>
  );
}

export default App;