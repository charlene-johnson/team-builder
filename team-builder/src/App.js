import React, {useState} from 'react';
import './App.css';

import Form from "./componenets/Form"
import MemberList from "./componenets/MemberList"

function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
    id: 1,
    name: "Charlene Johnson",
    email:"charlene.j8234@gmail.com",
    role: "Full Stack Web Development"
  }
]);
const addTeamMember =(newTeamMember) => {
  setTeamMembers([...teamMembers, newTeamMember])
}
  return (
    <div className="App">
      <h1>Team Members</h1>
      <Form addTeamMember={addTeamMember}/>
      <MemberList teamMembers={teamMembers} />
    </div>
  );
}

export default App;
