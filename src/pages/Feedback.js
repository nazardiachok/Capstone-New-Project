import styled from "styled-components";

export default function Feedback({ feedbackSubmit }) {
  function submitFeedback(event) {
    event.preventDefault();
    const form = event.target;
    const { name, feedback } = form.elements;
    feedbackSubmit(name.value, feedback.value);
  }
  return (
    <Section>
      <form onSubmit={submitFeedback}>
        <fieldset>
          <legend>feedback</legend>
          <label>Name</label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="username"
            required
          ></input>
          <label>Bewertung</label>
          <textarea
            name="feedback"
            id="feedback"
            rows="9"
            maxLength="150"
            required
          ></textarea>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 100px auto;

  fieldset {
    display: flex;
    flex-direction: column;
    min-height: 300px;
    gap: 10px;
    button {
      margin-top: 40px;
    }
  }
`;
