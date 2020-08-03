import { shuffleArray } from "./../utils/utils";
import { Difficulty, Question } from "../Types/QuizType";

export const fetchQuizQuestion = async (
  amount: number,
  difficulty: Difficulty
) => {
  const endPoint = `http://opentdb.com/api.php?amount=${amount}&dificulty=${difficulty}&type=multiple`;
  const data = await (await fetch(endPoint)).json();
  return data.results.map((question: Question) => ({
    ...question,
    answers: shuffleArray([
      ...question.incorrect_answers,
      question.correct_answer,
    ]),
  }));
};
