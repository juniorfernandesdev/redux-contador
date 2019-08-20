import React from 'react';
import Counters from './componets/counters'
import { Provider } from 'react-redux'
import { createStore } from 'redux'; 

const counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1
        case 'DECREMENT': return state - 1
    }
    return state
}

const store = createStore(counter)

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Counters />
      </Provider>

    </div>
  );
}

export default App;
