import React from 'react';

import TextField from './components/TextField/TextField';
import ReducerExample from './components/ReducerExample/ReducerExample';

import './App.css';
import { Counter } from './components/Counter/Counter';

const App: React.FC = () => (
  <div className="App">
      <h1>My First ts React App</h1>
      <TextField 
        text='hello' 
        person={
          {
            firstName: 'Grzegorz',
            lastName: 'Swieboda'
          }
        }
        handleChange={e => {
          console.log(e.target.value);
        }}
      />
      <ReducerExample />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button
              onClick={() => setCount(count + 1)}
            >+</button>
          </div>)}
      </Counter>
  </div>
);

export default App;
