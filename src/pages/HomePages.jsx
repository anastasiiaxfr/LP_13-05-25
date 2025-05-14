import { useState } from "react";
import SectionForm from "../components/Sections/_Section-form";
import Section1 from "../components/Sections/_Section-1";
import Section2 from "../components/Sections/_Section-2";
import Section3 from "../components/Sections/_Section-3";
import Brands from "../components/Brands";
import Hero from "../components/Hero";
import QuizHero from "../components/Quiz/_Quiz-hero";
import QuizForm from "../components/Quiz/_Quiz-form";
import QuizItem from "../components/Quiz/_Quiz-item";
import { quiz } from "../constants/index";

function HomePages() {
  const [showQuizForm, setShowQuizForm] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const startQuiz = () => {
    setShowQuizForm(true);
    setCurrentQuestion(0);
    setIsFinished(false);
  };

  const handleAnswer = (answer) => {
    const currentQw = quiz[currentQuestion].qw;

    // Get existing entries from localStorage
    const existingData = JSON.parse(localStorage.getItem("quizAnswers")) || [];

    // Add new entry with question and answer
    const updatedData = [
      ...existingData,
      {
        question: currentQw,
        answer: answer,
      },
    ];

    // Save to localStorage
    localStorage.setItem("quizAnswers", JSON.stringify(updatedData));

    // Move to next question or finish
    if (currentQuestion < quiz.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  return (
    <article>
      <div className="bg">
        <Hero />
        <Brands />
        {!showQuizForm && !isFinished && <QuizHero startQuiz={startQuiz} />}
        {showQuizForm && !isFinished && (
          <QuizItem
            question={quiz[currentQuestion]}
            currentIndex={currentQuestion}
            total={quiz.length}
            onAnswer={handleAnswer}
          />
        )}
        {isFinished && <QuizForm />}
      </div>
      <Section3 />
      <Section2 />
      <Section1 />
      <SectionForm />
    </article>
  );
}

export default HomePages;
