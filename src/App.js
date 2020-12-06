import React from 'react'
import Header from './components/header/header.js'
import MainForm from './components/todo/form.js'
import ToastList from './components/todo/list.js'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Header />
      <MainForm />
      <ToastList />
    </div>
  );
}

export default App;
