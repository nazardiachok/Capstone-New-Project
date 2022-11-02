import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function PersonalData({ saveTheData, inputData }) {
  const navigate = useNavigate;

  function savedInput(event) {
    event.preventDefault();
    const form = event.target;
    const { name, email, address } = form.elements;
    saveTheData(name.value, email.value, address.value);
    /* console.log(name.value, email.value, address.value); */
    navigate("/bestellung");
  }
  return (
    <>
      <Section>
        <form onSubmit={savedInput}>
          <fieldset>
            <legend>Gebe deine Persönliche Daten ein: </legend>
            <label>Name: </label>
            <input type="text" name="name" id="name"></input>
            <label>Email: </label>
            <input type="email" name="email" id="email"></input>
            <label>Adresse: </label>
            <input type="text" name="address" id="address"></input>
            <button type="submit">Submit</button>
          </fieldset>
        </form>
      </Section>
    </>
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
