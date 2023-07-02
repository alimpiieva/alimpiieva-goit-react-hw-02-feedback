import React, { Component } from "react";
import Section from "../Section/Section";
import Statistics from "../Statistics/Statistics";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import { Container } from "./App.styled.jsx";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      feedback: {
        good: 0,
        neutral: 0,
        bad: 0
      }
    };
  }

  handleFeedback = option => {
    this.setState(prevState => ({
      feedback: {
        ...prevState.feedback,
        [option]: prevState.feedback[option] + 1
      }
    }));
  };

  render() {
    const { good, neutral, bad } = this.state.feedback;
    const total = good + neutral + bad;
    const positivePercentage = total > 0 ? Math.round((good / total) * 100) : 0;

    const options = ["good", "neutral", "bad"];

    return (
      <Container>
        <Section title="Please leave your Feedback">
          <FeedbackOptions options={options} onLeaveFeedback={this.handleFeedback} />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </Container>
    );
  }
}

export default App;
