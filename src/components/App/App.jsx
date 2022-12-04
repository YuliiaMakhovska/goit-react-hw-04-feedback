
import { Component } from "react";
import Container from './App.styled';
import Notification from 'components/Notification';
import Section from 'components/Section';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';


export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => 
    this.countTotalFeedback() ? Math.round((this.state.good * 100) / this.countTotalFeedback()) : 0;
  
  onLeaveFeedback = e => {
    const name = e.target.name;
    this.setState(prev => ({
    [name]: prev[name] + 1,
  }))
  };
    render() {
      const { good, neutral, bad } = this.state;
      const total = this.countTotalFeedback();
      return (<Container>
        <Section title="Please leave feedback"></Section>
        <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.onLeaveFeedback} />
        <Section title="Statistics">
          {total !== 0 ? (
            <Statistics good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={this.countPositiveFeedbackPercentage()} />) :
            (<Notification message="There is no feedback"></Notification>)}
        </Section>
      </Container>)
    }
  };
