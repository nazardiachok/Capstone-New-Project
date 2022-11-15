import styled from "styled-components";
import { NextButton } from "./ShoppingCard";
export default function History({
  historyItems,
  clearHistory,
  goToFeedbackForm,
}) {
  return (
    <Section>
      <h1>Kaufübersicht</h1>

      {historyItems.length >= 1 && (
        <div>
          <h3>Lieber Kunde, danke für Dein Vertrauen!!</h3>
          <h4>Die von Dir früher bestellte Artikel:</h4>
        </div>
      )}
      {historyItems.map((element) => (
        <Artikel>
          <ul>
            <li key={element.id}>
              {" "}
              <div>
                <h5>
                  {" "}
                  Artikel: <span>{element.title}</span>
                </h5>{" "}
                <NextButton onClick={() => goToFeedbackForm(element)}>
                  Bewerten
                  {/* {toggleHistory ? "Neu bewerten" : "Bewerten"} */}
                </NextButton>
              </div>
              <h5>
                {" "}
                Bestelldatum:{" "}
                <span>
                  {element.date}, {element.time}
                </span>{" "}
              </h5>
              <h5>
                Menge: <span>{element.amount}</span> x Preis:{" "}
                <span>{element.price}</span> €
              </h5>
            </li>
          </ul>
        </Artikel>
      ))}
      {historyItems.length >= 1 && (
        <Button onClick={() => clearHistory()}>Clear</Button>
      )}
    </Section>
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
    margin: 10px;
  }
  li {
    display: flex;
    justify-content: space-around;
    text-align: start;
    ul {
      border-bottom: 1px solid black;
    }
  }
  h5 {
    margin: 5px;
    padding: 0px;
    width: 130px;
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
  span {
    color: #e67300;
    font-size: 15px;
  }
  button {
    margin-left: 5px;
  }
`;
const Button = styled.button`
  width: 60px;
  margin: 30px auto;
  background-color: #ff6666;
  border-radius: 10px;
  &:hover {
    cursor: pointer;
  }
`;
