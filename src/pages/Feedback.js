import styled from "styled-components";

export default function Feedback({
  feedbackSubmit,
  elementForFeedback,
  editFeedbackInput,
}) {
  function submitFeedback(event) {
    event.preventDefault();
    const form = event.target;
    const { name, feedback } = form.elements;
    feedbackSubmit(name.value, feedback.value, elementForFeedback);
  }
  return (
    <Section>
      <p>
        <b> Deine Bewertung zum folgenden Artikel: </b>
        <span>{elementForFeedback.title}</span>, <b> gekauft am </b> 
        <span>{elementForFeedback.date}</span>. <b> Gesamtmenge: </b>{" "}
        <span>{elementForFeedback.amount}</span>
        <b> Paar. </b> <b> Preis: </b> <span>{elementForFeedback.price}</span> 
        <b> € je Paar. </b>
      </p>
      <form onSubmit={submitFeedback}>
        <fieldset>
          <legend>Deine Bewertung</legend>
          <label htmlFor="name">Username</label>
          <input
            type="text"
            name="name"
            id="name"
            pattern=".*[^\s]{1,}.*"
            defaultValue={editFeedbackInput.user}
            placeholder="username"
            required
          ></input>
          <label htmlFor="feedback">Bewertung</label>
          <textarea
            name="feedback"
            id="feedback"
            defaultValue={editFeedbackInput.feedback}
            rows="9"
            maxLength="250"
            pattern=".*[^\s]{1,}.*"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </Section>
  );
}
const Section = styled.section`
  max-width: 400px;
  display: flex;
  justify-content: center;
  margin: 100px auto;
  flex-direction: column;
  span {
    color: red;
  }
  fieldset {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    gap: 10px;
    button {
      margin-top: 40px;
    }
  }
  p {
    text-align: center;
    margin-bottom: 40px;
    font-size: 18px;
  }
`;
