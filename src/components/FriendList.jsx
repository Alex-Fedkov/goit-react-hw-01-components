import styled from "styled-components";

const IsOnline = styled.span`
  display: block;
  width: 25px;
  height: 25px;
  border-radius: 50%;
  margin: 10px;
  background-color: ${props => props.color};
`;

const Container = styled.ul`
  margin-top: 25px;
  margin-left: 25px;
  padding: 0;
`;

const CardItem = styled.li`
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

const Avatar = styled.img`
  width: 70px;
  margin-right: 15px;
`;

const Name = styled.p`
  font-size: 28px;
  font-weight: 700;
`;

const FriendList = ({ friends }) => {
  return (
    <Container class="friend-list">
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <CardItem key={id}>
            <IsOnline color={isOnline ? "green" : "red"}></IsOnline>
            <Avatar class="avatar" src={avatar} alt="User avatar" width="48" />
            <Name class="name">{name}</Name>
          </CardItem>
        );
      })}

    </Container>
  );
}

export default FriendList;