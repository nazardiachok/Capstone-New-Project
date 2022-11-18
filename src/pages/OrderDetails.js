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
          <AllInputs>
            <ArtikleHeading>
              <InputsName>Name: </InputsName> <Inputs>{inputData.name} </Inputs>
            </ArtikleHeading>
            <ArtikleHeading>
              <InputsName>Email: </InputsName>{" "}
              <Inputs>{inputData.email} </Inputs>
            </ArtikleHeading>
            <ArtikleHeading>
              <InputsAddress>Adresse:</InputsAddress>
              <InputsAddresse>{inputData.address}</InputsAddresse>
            </ArtikleHeading>
          </AllInputs>
          <Artikel>
            <ChosenArticle>Deine ausgewählte Artikel:</ChosenArticle>
            <Cards shoppingCard={shoppingCard}></Cards>
          </Artikel>
          <TotalPrice>
            Gesamtpreis: <br /> <span> {totalPrice} </span> €
          </TotalPrice>
          <Warning>
            Wenn Du keine Bestellung innerhalb von den nächsten 6 Stunden
            machst, werden Deine Daten im Warenkorb nicht gespeichert!!!
          </Warning>
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

  span {
    color: #e67300;
    font-size: 14px;
    margin-left: 5px;
  }
`;
const AllInputs = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
`;
const Inputs = styled.p`
  color: black;
  font-size: 15px;
  margin: 5px 15px;
  display: flex;
  text-align: start;
  color: #e67300;
`;
const InputsName = styled.p`
  color: black;
  font-size: 15px;
  margin: 5px 10px;
  display: flex;
  text-align: start;
`;
const InputsAddress = styled.p`
  color: black;
  font-size: 15px;
  margin: 5px 0px 5px 0px;
  display: flex;
  text-align: start;
`;
const InputsAddresse = styled.p`
  color: black;
  font-size: 15px;
  margin: 5px 0px 5px 25px;
  display: flex;
  text-align: start;
  color: #e67300;
`;
const ChosenArticle = styled.h4`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px auto;
`;
const TotalPrice = styled.div`
  margin-top: 40px;
  font-weight: bold;
`;
const Warning = styled.p`
  margin-top: 40px;
  font-weight: bold;
  color: red;
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
const ArtikleHeading = styled.h4`
  margin: auto;
  display: flex;
  justify-content: flex-start;
  width: 250px;
  gap: 40px;
`;
