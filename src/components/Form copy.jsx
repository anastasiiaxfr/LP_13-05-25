import React from "react";

function Form() {
  return (
    <form method="POST" action="/" className="form" noValidate>
      <div className="form_row">
        <div className="input-block input-block-first-name">
          <label htmlFor="">First Name</label>
          <input type="text" required />
        </div>
        <div className="input-block input-block-last-name">
          <label htmlFor="">Last Name</label>
          <input type="text" required />
        </div>
      </div>
      <div className="input-block input-block-email">
        <label htmlFor="">Email</label>
        <input type="email" required />
      </div>
      <div className="input-block input-block-phone">
        <label htmlFor="">Phone</label>
        <input type="text" className="phone" required />
      </div>
      <button type="submit" className="btn">
        Register
      </button>
      <hr />
      <div className="form_inline">
        <input type="checkbox" id="policy" />
        <label htmlFor="policy">
          <span>
            By registration I agree and accept Website{" "}
            <a href="/terms">
              <u>Terms of use</u>
            </a>{" "}
             and {" "}
            <a href="/policy">
              <u>Privacy Policy</u>
            </a>
            .
          </span>
        </label>
      </div>
    </form>
  );
}

export default Form;
