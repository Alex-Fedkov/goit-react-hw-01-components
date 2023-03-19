import styled from "styled-components";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const Section = styled.div`
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

const StatList = styled.ul`
  display: flex;
  margin: 25px 0 0 0;
  padding: 0;
  list-style: none;
  width: 100%;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border: 1px solid gray;
`;

const LabelText = styled.span`
  font-size: 20px;
  margin-top: 5px;
  color: white;
`;

const PercentageText = styled.span`
  font-size: 30px;
  font-weight: 700;
  color: white;
`;

const ListItem = styled.li`
  background-color: ${props => props.color};
  display: flex;
  padding: 15px 0;
  flex-direction: column;
  align-items: center;  
  width: calc(100% / 5);
`;

const Statistics = ({data, title}) => {
  
  return (
    <Section class="statistics">
      {title && <h2 class="title">{title}</h2>}

      <StatList class="stat-list">
        {data.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          return (
            <ListItem key={id} color={color}>
              <LabelText class="label">{label}</LabelText>
              <PercentageText class="percentage">{percentage}%</PercentageText>
            </ListItem>
          )
        })}
      </StatList>
    </Section>
  );
}

export default Statistics;
