import styled from "styled-components";

export const Section = styled.div`
display: flex;
padding-top: 10px;
flex-direction: column;
align-items: center;
width: 400px;
border: 1px solid lightgrey;
border-radius: 5px;
margin-left: 25px;
margin-top: 25px;
`;

export const StatList = styled.ul`
display: flex;
margin: 25px 0 0 0;
padding: 0;
list-style: none;
width: 100%;
border-bottom-left-radius: 5px;
border-bottom-right-radius: 5px;
border: 1px solid gray;
`;

export const LabelText = styled.span`
font-size: 20px;
margin-top: 5px;
color: white;
`;

export const PercentageText = styled.span`
font-size: 30px;
font-weight: 700;
color: white;
`;

export const ListItem = styled.li`
background-color: ${props => props.color};
display: flex;
padding: 15px 0;
flex-direction: column;
align-items: center;
width: 100%;
`;
