import styled from "styled-components";

export default function PersonalData({ saveTheData }) {
  function savedInput(event) {
    event.preventDefault();
    const form = event.target;
    const { name, email, address } = form.elements;
    saveTheData(name.value, email.value, address.value);
  }
  return (
    <Section>
      <form onSubmit={savedInput}>
        <fieldset>
          <legend>Gib deine Persönlichen Daten ein: </legend>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            pattern=".*[^\s]{1,}.*"
            placeholder="Nazar Diachok"
            required
          ></input>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            pattern=".*[^\s]{1,}.*"
            placeholder="email@111.com"
            required
          ></input>
          <label htmlFor="address">Adresse: </label>
          <input
            placeholder="Schwarze Strasse 1, Hamburg 20537"
            type="text"
            name="address"
            id="address"
            pattern=".*[^\s]{1,}.*"
            required
          ></input>
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
      margin-top: 70px;
    }
  }
`;
