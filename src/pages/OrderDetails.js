import styled from "styled-components";
import Cards from "../components/Cards";
import { NextButton } from "./ShoppingCard";
export default function OrderDetails({
  shoppingCard,
  inputData,
  totalPrice,
  moveToHistory,
}) {
  return (
    <>
      <Section>
        <h3>Prüfe Deine Daten und bestätige bitte den Kauf:</h3>
        <main>
          {" "}
          <div className="allInputs">
            <h4>
              <p className="inputs">Name: </p>{" "}
              <p className="inputs dataInputs">{inputData.name} </p>
            </h4>
            <h4>
              <p className="inputs">Email: </p>{" "}
              <p className="inputs dataInputs">{inputData.email} </p>
            </h4>
            <h4>
              <p className="inputs">Adresse: </p>{" "}
              <p className="inputs dataInputs address"> {inputData.address}</p>
            </h4>
          </div>
          <Artikel>
            <h4 className="chosenArticle">Deine ausgewählte Artikel:</h4>
            <Cards shoppingCard={shoppingCard}></Cards>
          </Artikel>
          <div className="totalPrice">
            Gesamtpreis: <br /> <span> {totalPrice} </span> €
          </div>
          <p className="warning">
            Wenn Du keine Bestellung innerhalb von den nächsten 6 Stunden
            machst, werden deine Daten im Warenkorb nicht gespeichert!!!
          </p>
          <NextButton onClick={() => moveToHistory(inputData)}>
            Bestellen
          </NextButton>
        </main>
      </Section>
    </>
  );
}

const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 40px auto;
  flex-direction: column;
  text-align: center;
  ul {
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-around;
    text-align: start;
    gap: 30px;
  }
  h5 {
    margin: 5px 0 5px 5px;
    width: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  h4 {
    margin: auto;
    display: flex;
    justify-content: flex-start;
    width: 250px;
    gap: 40px;
  }
  .warning {
    color: red;
    margin: 40px;
    font-size: 17px;
  }
  .allInputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: auto;
  }
  .inputs {
    color: black;
    font-size: 15px;
    margin: 5px 10px;
    display: flex;
    text-align: start;
  }
  .address {
    margin-left: 0;
  }
  .dataInputs {
    color: #993366;
  }
  .chosenArticle {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 30px auto;
  }
  .totalPrice {
    margin-top: 40px;
    font-weight: bold;
  }
  span {
    color: #993366;
    font-size: 14px;
    margin-left: 5px;
  }
`;
const Artikel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: start;
  p {
    font-size: 15px;
    text-align: center;
    font-weight: bold;
  }
`;
