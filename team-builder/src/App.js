import React, {useState} from 'react';
import './App.css';
import styled from "styled-components";

import Form from "./componenets/Form"
import MemberList from "./componenets/MemberList"

const Title = styled.h1 `
font-size:  5rem;
font-family: 'Architects Daughter', cursive;
margin-top: 1.5%;
`

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
      <Title>Team Members</Title>
      <Form addTeamMember={addTeamMember}/>
      <MemberList teamMembers={teamMembers} />
    </div>
  );
}

export default App;
