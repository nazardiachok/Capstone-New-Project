import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function PersonalData({ setInputData, inputData }) {
  const navigate = useNavigate;
  function savedInput(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { name, email, adress } = Object.fromEntries(formData);
    setInputData(name, email, adress);
    console.log(inputData.map((data) => data));
    navigate("/bestellung");
  }
  return (
    <>
      <Section>
        <form onSubmit={savedInput}>
          <fieldset>
            <legend>Gebe deine Persönliche Daten ein: </legend>
            <label>Name: </label>
            <input type="text" id="name"></input>
            <label>Email: </label>
            <input type="email" id="email"></input>
            <label>Adresse: </label>
            <input type="text" id="adress"></input>
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
