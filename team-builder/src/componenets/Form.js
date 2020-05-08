import React, {useState} from "react";

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
                value={teamMember.name}
                onChange={changeHandler}
                />
                <lable htmlFor="email">Email:</lable>
                <input
                    id="email"
                    type="text"
                    name="email"
                    placeholder="Enter your email"
                    value={teamMember.email}
                    onChange={changeHandler}
                />
                <lable htmlFor="role">Role:</lable>
                <input
                    id="role"
                    type="text"
                    name="role"
                    placeholder="Enter your role"
                    value={teamMember.role}
                    onChange={changeHandler}
                />
            <button type="submit">Click to Submit</button>
        </form>
    )
}

export default Form;