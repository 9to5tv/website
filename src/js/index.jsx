import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, withRouter } from 'react-router-dom';
import App from './App.jsx';

class ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return this.props.children;
  }
}

const Scroll = withRouter(ScrollToTop);

const app = (
  <BrowserRouter>
    <Scroll>
      <App />
    </Scroll>
  </BrowserRouter>
);

render(app, document.getElementById('app'));