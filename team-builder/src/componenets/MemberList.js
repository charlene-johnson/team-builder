import React from "react";

const MemberList = props => {
    return(
        <div className="member-list">
            {props.teamMembers.map(teamMember =>
                <div className="member" key={teamMember.id}>
                    <h2>{teamMember.name}</h2>
                    <h2>{teamMember.email}</h2>
                    <h2>{teamMember.role}</h2>
                </div>
                )}
        </div>
    )
}

export default MemberList;