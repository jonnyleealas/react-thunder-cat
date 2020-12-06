import React from 'react'
import Header from './components/header/header'
import MainForm from './components/todo/form'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainForm />
    </div>
  );
}

export default App;
