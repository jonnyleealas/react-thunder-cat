import React from 'react'
import Header from './components/header/header';

import ToDo from './components/to-do/to-do.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import SettingsContext from './context/settings/settings-context.js'

function App() {
  return (
    <SettingsContext>
      <Header/>
      <ToDo />
    
    </SettingsContext>
   
  );
}

export default App;
