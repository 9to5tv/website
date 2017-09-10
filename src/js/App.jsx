import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages';
import Nav from './components/Nav';

class App extends React.Component {

  render() {
    return (
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;