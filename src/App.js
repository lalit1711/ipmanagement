import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import LogIn from './login';

function App(props) {
  return (
    <div className="container">
      <div className="">
          <LogIn props={props} />
      </div>
    </div>
  );
}

export default App;
