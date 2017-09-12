import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Schedule } from './pages';

class App extends React.Component {

  render() {
    return (
      <div>
        <Route path='/schedule' component={Schedule} />
        <Route exact path='/' component={Home} />
      </div>
    );
  }
}

export default App;