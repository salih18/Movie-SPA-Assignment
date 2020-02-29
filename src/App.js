import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Show from './components/show/Show';
import Alert from './components/layout/Alert';
import NotFound from './components/layout/NotFound';
import Episode from './components/episode/Episode';
import { Container } from 'semantic-ui-react';
import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Router>
      <Navbar />
      <Container>
        <Alert />
        <Switch>
          <Route exact path="/" component={Show} />
          <Route exact path="/episodes/:id" component={Episode} />
          <Route component={NotFound} />
        </Switch>
      </Container>
    </Router>
  </Provider>
);
export default App;
