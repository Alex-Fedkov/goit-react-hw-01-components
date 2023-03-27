import PropTypes from "prop-types";
import { 
  IsOnline,
  Container,
  CardItem,
  Avatar,
  Name
} from "./styles.jsx";

const FriendList = ({ friends }) => {
  return (
    <Container>
      {friends.map(({ avatar, name, isOnline, id }) => {
        return (
          <CardItem key={id}>
            <IsOnline color={isOnline ? "green" : "red"}></IsOnline>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </CardItem>
        );
      })}

    </Container>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired,
};

export default FriendList;