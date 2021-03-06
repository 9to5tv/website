import React from 'react';
import { Route } from 'react-router-dom';
import { Home, Artist, About } from './pages';

class App extends React.Component {

  render() {
    return (
      <div>
        <Route path='/about' component={About} />
        <Route exact path='/' component={Home} />
        <Route path='/artists/:id' component={Artist} />
      </div>
    );
  }
}

export default App;