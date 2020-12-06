import React from 'react'
import Header from './components/header/header.js'
import ToDo from './components/todo/to-do'

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <ToDo />
    </div>
  );
}

export default App;
