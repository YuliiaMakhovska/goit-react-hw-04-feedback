import PropTypes from "prop-types";
import {Block, Button} from './FeedbackOptions.styled'

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <Block>
    {options.map((option, index) => (
      <Button key={index} name={option} type="button" onClick={onLeaveFeedback}>
        {option}
      </Button>
    ))}
  </Block>
);
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
