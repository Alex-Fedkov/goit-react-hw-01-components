import { Component } from "react";
import PropTypes from "prop-types";
import { 
  Container,
  DescriptionContainet,
  Avatar,
  Name,
  Tag,
  Location,
  StatsList,
  StatsItem,
  Quantity,
  Label
} from "./styles.jsx";

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats
}) => {
  return (
    <Container>
      <DescriptionContainet>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </DescriptionContainet>

      <StatsList>
        <StatsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </StatsItem>
      </StatsList>
    </Container>
  );
}

export default Profile;

export class ProfileClass extends Component {
  render () {
    const {
      username,
      tag,
      location,
      avatar,
      stats
    } = this.props;

    return (
      <Container>
        <DescriptionContainet>
          <Avatar
            src={avatar}
            alt="User avatar"
          />
          <Name>{username}</Name>
          <Tag>@{tag}</Tag>
          <Location>{location}</Location>
        </DescriptionContainet>
  
        <StatsList>
          <StatsItem>
            <Label>Followers</Label>
            <Quantity>{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Views</Label>
            <Quantity>{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label>Likes</Label>
            <Quantity>{stats.likes}</Quantity>
          </StatsItem>
        </StatsList>
      </Container>
    );
  }
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired
}

