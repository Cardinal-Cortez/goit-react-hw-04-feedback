import { useState } from "react";
import { FeedbackOptions } from "components/FeedbackOptions";
import { Statistics } from "components/Statistics";
import { Section } from "components/Section";
import { Notification } from "components/Notification";

export const Feedback = () => {
  
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);


  const onLeaveFeedback = (options) => {
    if (options === "good") {
      setGood((prev) => prev + 1);
    }
    if (options === "neutral") {
      setNeutral((prev) => prev + 1);
    }
    if (options === "bad") {
      setBad((prev) => prev + 1);
    }
  };
  
  
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    return total > 0 ? Math.round((good / total) * 100) : 0;
  };


    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys({ good, neutral, bad })}
            onLeaveFeedback={onLeaveFeedback}
          />
        </Section>
        <Section title="Statistics">
          {countTotalFeedback() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback yet" />
          )}
        </Section>
      </div>
    );
  };

