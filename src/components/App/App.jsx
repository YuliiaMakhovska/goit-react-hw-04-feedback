import { useState } from "react";
import Container from './App.styled';
import Notification from 'components/Notification';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';


export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onLeaveFeedback = (e) => {
    const feedback = e.target.textContent
        switch (feedback) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        break;
    }
  }
   const countTotalFeedback = () => {
    let total = good + neutral + bad;
    return total;
  };
  const countPositiveFeedbackPercentage = total => {
    if (total !== 0) return Math.floor((good / total) * 100);
    return 0;
  };

    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage(totalFeedback);
      return (<Container>
        <Section title="Please leave feedback">
          <FeedbackOptions options={["good", "neutral", "bad"]}
            onLeaveFeedback={onLeaveFeedback} />
          </Section>
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage} />) :
            (<Notification message="There is no feedback"></Notification>)}
        </Section>
      </Container>)
    }  
