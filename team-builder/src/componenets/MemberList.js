import React from "react";
import styled from "styled-components";

const MemberListDiv = styled.div `
    display: flex;
    flex-wrap: wrap;
`
const MemberDiv = styled.div `
    background-color: #D8BBFF;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12), 0 5px 2px rgba(0, 0, 0, 0.24);
    border-radius: 8px;
    width: 100%;
    max-width: 250px;
    padding: 20px;
    margin: 16px auto;
    text-align: left
`
const Paragraph = styled.p `
    font-family: 'Jaldi', sans-serif;
    font-size: 1.7rem;
`
const MemberList = props => {
    return(
        <MemberListDiv>
            {props.teamMembers.map(teamMember =>
                <MemberDiv key={teamMember.id}>
                    <Paragraph>Name: {teamMember.name}</Paragraph>
                    <Paragraph>Email: {teamMember.email}</Paragraph>
                    <Paragraph>Role: {teamMember.role}</Paragraph>
                </MemberDiv>
                )}
        </MemberListDiv>
    )
}

export default MemberList;