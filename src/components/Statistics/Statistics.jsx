import PropTypes from 'prop-types';
import { 
  Section,
  StatList,
  LabelText,
  PercentageText,
  ListItem,
} from "./styles";


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


const Statistics = ({data, title}) => {
  
  return (
    <Section>
      {title && <h2>{title}</h2>}

      <StatList>
        {data.map(({ id, label, percentage }) => {
          const color = getRandomHexColor();
          return (
            <ListItem key={id} color={color}>
              <LabelText>{label}</LabelText>
              <PercentageText>{percentage}%</PercentageText>
            </ListItem>
          )
        })}
      </StatList>
    </Section>
  );
}

Statistics.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired
  })).isRequired,
  title: PropTypes.string
};

export default Statistics;
