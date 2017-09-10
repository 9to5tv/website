import React from 'react';
import { Route } from 'react-router-dom';
import { Home } from './pages';

class App extends React.Component {

  render() {
    return (
      <div>
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;