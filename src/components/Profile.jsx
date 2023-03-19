import { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
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

const DescriptionContainet = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 100px;
  border-radius: 50%;
`;

const Name = styled.p`
  margin: 10px 0;
  font-size: 24px;
  font-weight: 700;
`;

const Tag = styled.p`
  margin: 5px 0;
  font-size: 20px;
  color: gray;
`;

const Location = styled(Tag)``;

const StatsList = styled.ul`
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

const StatsItem = styled.li`
  display: flex;
  padding: 15px 0;
  flex-direction: column;
  align-items: center;  
  width: calc(100% / 3);

  &:not(:last-child) {
    border-right: 1px solid gray;
  }
`;

const Quantity = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 5px;
`;

const Label = styled.span`
  font-size: 20px;
  color: grey;
`;

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats
}) => {
  return (
    <Container class="profile">
      <DescriptionContainet class="description">
        <Avatar
          src={avatar}
          alt="User avatar"
          class="avatar"
        />
        <Name class="name">{username}</Name>
        <Tag class="tag">@{tag}</Tag>
        <Location class="location">{location}</Location>
      </DescriptionContainet>

      <StatsList class="stats">
        <StatsItem>
          <Label class="label">Followers</Label>
          <Quantity class="quantity">{stats.followers}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label class="label">Views</Label>
          <Quantity class="quantity">{stats.views}</Quantity>
        </StatsItem>
        <StatsItem>
          <Label class="label">Likes</Label>
          <Quantity class="quantity">{stats.likes}</Quantity>
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
      <Container class="profile">
        <DescriptionContainet class="description">
          <Avatar
            src={avatar}
            alt="User avatar"
            class="avatar"
          />
          <Name class="name">{username}</Name>
          <Tag class="tag">@{tag}</Tag>
          <Location class="location">{location}</Location>
        </DescriptionContainet>
  
        <StatsList class="stats">
          <StatsItem>
            <Label class="label">Followers</Label>
            <Quantity class="quantity">{stats.followers}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label class="label">Views</Label>
            <Quantity class="quantity">{stats.views}</Quantity>
          </StatsItem>
          <StatsItem>
            <Label class="label">Likes</Label>
            <Quantity class="quantity">{stats.likes}</Quantity>
          </StatsItem>
        </StatsList>
      </Container>
    );
  }
}

