import { Options, Button } from "./styled";
import PropTypes from 'prop-types';

export const FeedbackOptions =({ options, onLeaveFeedback })=>{

    return (
    <Options>
      {options.map((option) => (
        <Button key={option} onClick={() => onLeaveFeedback(option)}>
          {option}
        </Button>
      ))}
    </Options>
    )
  }


FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};