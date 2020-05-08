import React from "react";

const MemberList = props => {
    return(
        <div className="member-list">
            {props.teamMembers.map(teamMember =>
                <div className="member" key={teamMember.id}>
                    <p>Name: {teamMember.name}</p>
                    <p>Email: {teamMember.email}</p>
                    <p>Role: {teamMember.role}</p>
                </div>
                )}
        </div>
    )
}

export default MemberList;