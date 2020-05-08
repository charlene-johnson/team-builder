import React, {useState} from "react";

const Form = props => {
    const [teamMember, setTeamMember] = useState({
       name: "",
       email: "",
       role: "",
    })

    const changeHandler = (event) => {

    }

    return (
        <form onSubmit = {event =>{
            event.preventDefault()
            props.addTeamMember(teamMember)

            setTeamMember({})
        }} >
            <lable htmlFor="name">Name:</lable>
            <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                />
                <lable htmlFor="email">Email:</lable>
                <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                />
                <lable htmlFor="role">Role:</lable>
                <input
                    id="role"
                    type="text"
                    name="role"
                    placeholder="Enter your role"
                />
            <button type="submit">Click to Submit</button>
        </form>
    )
}

export default Form;