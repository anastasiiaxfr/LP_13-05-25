import React from "react";

function QuizHero({ startQuiz }) {
  return (
    <section className="">
      <div className="container">
        <div className=" quiz">
          <div className="chip">Quiz</div>
          <h2>Top investment strategies</h2>
          <p className="text">
            Learn to Invest Wisely, Grow Your Wealth Safely
          </p>
          <button className="btn" onClick={startQuiz}>
            Start
          </button>

          <div className="contacts">
            <div>
              <p>
                <b>Address</b>
              </p>
              <address>115 Great Portland St, London W1W 6QH</address>
            </div>
            <hr />
            <div>
              <p>
                <b>Call Us:</b>
              </p>
              <a href="tel:02039173949">0203 917 3949</a>
            </div>
            <hr />
            <div>
              <p>
                <b>Email:</b>
              </p>
              <a href="mailto:info@topstrategies.com">info@topstrategies.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default QuizHero;
