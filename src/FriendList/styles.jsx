import styled from "styled-components";

export const IsOnline = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 10px;
  background-color: ${props => props.color};
`;

export const Container = styled.ul`
  margin-top: 25px;
  margin-left: 25px;
  padding: 0;
`;

export const CardItem = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 300px;
  height: 100px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  box-shadow: 4px 4px 8px 0px rgba(34, 60, 80, 0.2);

  &:not(:last-child) {
    margin: 0 0 15px 0;
  }
`;

export const Avatar = styled.img`
  width: 70px;
  margin-right: 15px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
`;