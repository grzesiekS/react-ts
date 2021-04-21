import React from 'react';

import TextField from './components/TextField/TextField';

import './App.css';

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
      />
  </div>
);

export default App;
