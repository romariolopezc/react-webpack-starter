import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { AppContainer } from 'react-hot-loader';
import App from './App';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app'));
};

render(App);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => { render(App); });
}
