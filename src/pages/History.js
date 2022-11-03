import styled from "styled-components";
export default function History({ historyItems, orderTime }) {
  return (
    <Section>
      <h1>History Page</h1>
      <h4>Deine Artikel:</h4>
      {historyItems.map((element) => (
        <Artikel>
          <ul>
            <p>
              Bestelldatum: {orderTime[0]} {orderTime[1]}
            </p>
            <li key={element.id}>
              {" "}
              <h5> Artikel: {element.title}</h5>{" "}
              <h5>
                {element.amount} x {element.price} €
              </h5>
            </li>
          </ul>
        </Artikel>
      ))}
    </Section>
  );
}
const Section = styled.section`
  display: flex;
  justify-content: center;
  margin: 100px auto;
  flex-direction: column;
  text-align: center;
  li {
    display: flex;
    justify-content: space-around;
    text-align: start;
    ul {
      border-bottom: 1px solid black;
    }
  }
  h5 {
    margin: 0px;
    padding: 0px;
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
