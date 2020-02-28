import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Show from './components/show/Show';
import Episode from './components/episode/Episode';
import { Container } from 'semantic-ui-react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Container>
        <Navbar />
        <Route exact path="/" component={Show} />
        <Route exact path="/episodes/:id" component={Episode} />
      </Container>
    </Router>
  </Provider>
);
export default App;
