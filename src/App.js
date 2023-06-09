import React, { Component, Fragment } from 'react';
import { Provider } from 'react-redux';
import MainRoutes from './router/MainRouter';
import { PersistGate } from 'redux-persist/integration/react';


import configureStore from './store';

const { store, persistor } = configureStore();

class App extends Component {
    render() {
        return (
            <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <App />
            </PersistGate>
          </Provider>
        );
    }
}

export default App;
