import styled from "styled-components";

export default function Feedback({ feedbackSubmit, elementForFeedback }) {
  function submitFeedback(event) {
    event.preventDefault();
    const form = event.target;
    const { name, feedback } = form.elements;
    feedbackSubmit(name.value, feedback.value, elementForFeedback);
    console.log(name.value, feedback.value);
    console.log(elementForFeedback);
  }
  return (
    <Section>
      <p>
        <b> Deine Bewertung zum folgenden Artikel: </b>
        {elementForFeedback.title}, <b> gekauft am </b> 
        {elementForFeedback.date}. <b> Gesamtmenge: </b>{" "}
        {elementForFeedback.amount} <b> Paar. </b> <b> Preis: </b>{" "}
        {elementForFeedback.price} <b> € je Paar. </b>
      </p>
      <form onSubmit={submitFeedback}>
        <fieldset>
          <legend>Deine Bewertung</legend>
          <label>Username</label>
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
            maxLength="250"
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
