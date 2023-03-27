import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding-top: 10px;
  flex-direction: column;
  align-items: center;
  width: 300px;
  border: 1px solid lightgrey;
  border-radius: 10px;
  margin-left: 25px;
  margin-top: 25px;
  /* overflow: hidden; */
`;

export const DescriptionContainet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
`;

export const Name = styled.p`
  margin: 10px 0;
  font-size: 24px;
  font-weight: 700;
`;

export const Tag = styled.p`
  margin: 5px 0;
  font-size: 20px;
  color: gray;
`;

export const Location = styled(Tag)``;

export const StatsList = styled.ul`
  display: flex;
  margin: 25px 0 0 0;
  padding: 0;
  list-style: none;
  width: 100%;
  background-color: lightgray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border: 1px solid gray;
`;

export const StatsItem = styled.li`
  display: flex;
  padding: 15px 0;
  flex-direction: column;
  align-items: center;  
  width: calc(100% / 3);

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

export const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
`;

export const Label = styled.span`
  font-size: 20px;
  color: grey;
`;