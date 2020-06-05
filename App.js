import React from 'react';
import Main from './components/Main';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

export default function App() {
  console.disableYellowBox= true
  
  return (
    <Provider store={store}>
      <Main />
    </Provider>
        );
}



