import React from "react";
import { QuestionProps } from "../Types/QuizType";
import { Wrapper, ButtonWrapper } from "./QuestionCard.style";

const QuestionCard: React.FC<QuestionProps> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => {
  return (
    <Wrapper>
      <div className="question-container">
        <div className="quest">
          <p className="number">
            Question: {questionNumber}/ {totalQuestions}
          </p>
          <p dangerouslySetInnerHTML={{ __html: question }}></p>
        </div>
        <div>
          {answers.map((answer, ind) => (
            <ButtonWrapper
              key={ind}
              correct={userAnswer?.correctAnswer === answer}
              userClicked={userAnswer?.answer === answer}
            >
              <button
                disabled={userAnswer ? true : false}
                value={answer}
                onClick={callback}
              >
                <span dangerouslySetInnerHTML={{ __html: answer }}></span>
              </button>
            </ButtonWrapper>
          ))}
        </div>
      </div>
    </Wrapper>
  );
};
export default QuestionCard;
