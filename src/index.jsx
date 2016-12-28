import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from './components/App';
import configureStore from './configureStore';
import { fetchStations } from './actions';

const store = configureStore();

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root'),
  );
};

fetchStations()(store.dispatch);

render(App);


if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NewApp = require('./components/App').default;
    render(NewApp);
  });
}
