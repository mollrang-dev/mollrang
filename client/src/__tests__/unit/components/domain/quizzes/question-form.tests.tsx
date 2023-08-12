import { QuestionForm } from "@components/quizzes/question-form/QuestionForm";
import { Quiz } from "@interfaces/quiz";
import { render } from "@testing-library/react";

interface Props {
  quizLists: Quiz.ListInformation;
  questionNumber: number;
}

describe("Quiz Form Test", () => {
  let quizLists: Quiz.ListInformation = {
    quizId: "",
    question: "",
    answer: "",
    description: "",
  };

  let questionNumber: number = 0;

  beforeEach(async () => {});

  test("quiz lists 를 불러오는지", async () => {
    render(
      <QuestionForm quizLists={quizLists} questionNumber={questionNumber} />,
    );
  });
});
