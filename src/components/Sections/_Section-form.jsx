import Form from "../Form";

function SectionForm() {
  return (
    <section className="section section_form" id="contacts">
      <div className="container">
        <div className="row_1">
          <div>
            <h2>Enrol Today — Just Leave Your Details</h2>
            <p>
              To join the programme, simply fill out the form below. Our project
              manager will contact you shortly to confirm your interest and
              answer all your questions.
            </p>
          </div>
          <div>
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionForm;
