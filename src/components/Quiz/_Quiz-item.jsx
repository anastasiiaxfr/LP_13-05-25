export default function QuizItem({ question, currentIndex, total, onAnswer }) {
  return (
    <section className="" key={currentIndex}>
      <div className="container">
        <div className="quiz">
          <div className="quiz_inner">
            <h2>{question.qw}</h2>

            <div className="quiz_answers">
              {question.answers.map((answer, idx) => (
                <button
                  key={idx}
                  data-value={answer}
                  onClick={() => onAnswer(answer)}
                  className="quiz_answer_btn"
                >
                  {answer}
                </button>
              ))}
            </div>

            <div className="quiz_progress">
              <b
                style={{
                  width: `${((currentIndex + 1) / (total + 1)) * 100}%`,
                }}
              ></b>
            </div>

            <span className="quiz_counter">
              {currentIndex + 1} / {total + 1}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
