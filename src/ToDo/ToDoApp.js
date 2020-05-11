import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import todoApp from './reducers';
import App from './components/App';

const store = createStore(todoApp);

export default function ToDoApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
