import React, {useState} from 'react';
import './App.css';

import Form from "./componenets/Form"

function App() {
  const [teamMembers, setTeamMembers] = useState([])
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form/>
    </div>
  );
}

export default App;
