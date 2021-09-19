import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Error404 from './Error404';
import BubbleTwo from './components/BubblesTwo.jsx';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Login} exact />
          <Route path="/home" component={Home} exact />
          <Route path="/leveltwo" component={BubbleTwo} exact />
          <Route component={Error404} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
