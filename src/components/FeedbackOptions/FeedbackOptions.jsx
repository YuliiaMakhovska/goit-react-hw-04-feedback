import PropTypes from "prop-types";
import {Block, Button} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (  <Block>
    {options.map((option, index) => (
      <Button key={index} name={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </Button>
    ))}
  </Block>)
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
