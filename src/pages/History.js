import styled from "styled-components";
export default function History({ historyItems, clearHistory }) {
  return (
    <Section>
      <h1>History Page</h1>

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
              <h5>
                {" "}
                Artikel: <span>{element.title}</span>
              </h5>{" "}
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
        <button onClick={() => clearHistory()}>Clear</button>
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
    margin: 0px 10px;
    padding: 0 10px;
  }
  button {
    width: 60px;
    margin: 50px auto;
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
`;
