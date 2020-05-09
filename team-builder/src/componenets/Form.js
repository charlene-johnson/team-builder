import React, {useState} from "react";
import styled from "styled-components";


const Forms = styled.form `
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    margin: 1%;
`
const Lable = styled.label `
    margin-bottom: -34px;
    text-align: left;
    width: 275px;
    font-family: 'Architects Daughter', cursive;
    font-size: 2rem;
`
const Input = styled.input `
    width: 100px;
    padding: 8px 26px;
    margin: 11.5px;
    border: 1px solid #FFC6FF;
    border-radius 4px;
`
const Button = styled.button ` 
    width: 150px;
    padding: 8px;
    background-color: #C8B6FF;
    border: 1px solid #FFC6FF;
    border-radius 4px;
    margin-top: 1.6%;
    font-family: 'Pontano Sans', sans-serif;
    font-size: 1.5rem;

    &:hover {
        background-color: #D8BBFF
    }
`
const Form = props => {
    const [teamMember, setTeamMember] = useState({
       id: Date.now(),
       name: "",
       email: "",
       role: "",
    })

    const changeHandler = (event) => {
    setTeamMember({
        ...teamMember,
        [event.target.name] : event.target.value
    })
    }

    return (
        <Forms onSubmit = {event =>{
            event.preventDefault()
            props.addTeamMember(teamMember)

            setTeamMember({name: "", email: "", role: "", id: Date.now()})
        }} >
            <Lable htmlFor="name">Name:</Lable>
            <Input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                value={teamMember.name}
                onChange={changeHandler}
                />
            <Lable htmlFor="email">Email:</Lable>
            <Input
                id="email"
                type="text"
                name="email"
                placeholder="Enter your email"
                value={teamMember.email}
                onChange={changeHandler}
                />
            <Lable htmlFor="role">Role:</Lable>
            <Input
                id="role"
                type="text"
                 name="role"
                placeholder="Enter your role"
                value={teamMember.role}
                onChange={changeHandler}
                />
            <Button type="submit">Click to Submit</Button>
        </Forms>
    )
}

export default Form;