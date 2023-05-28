import {StatisticsComponent, Review} from "./styled";
import PropTypes from "prop-types";


export const Statistics =({ good, neutral, bad, total, positivePercentage })=>{


    return (
    <StatisticsComponent>
        <h2 type="text">Statistics</h2>
        <Review>
          <span> Good: { good}</span>
          <span> Neutral: { neutral}</span>
          <span> Bad: {bad}</span>
          <span> Total: {total}</span>
          <span> PositiveFeedback: {positivePercentage}%</span>
        </Review>
    </StatisticsComponent>
    );
  }

  Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
  };