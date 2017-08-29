import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'

import logo from './logo.svg';
import './App.css';
import ShopPage from './pages/ShopPage'

let store = createStore(reducers)

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <div>
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h2>Welcome to React Shop</h2>
            </div>
            <ShopPage />
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
