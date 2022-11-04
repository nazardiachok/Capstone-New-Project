import styled from "styled-components";
export default function OrderDetails({
  shoppingCard,
  inputData,
  totalPrice,
  moveToHistory,
}) {
  return (
    <>
      <Section>
        <h4>Prüfe Deine Daten und bestätige bitte den Kauf:</h4>
        <main>
          <h5>
            Name: <span>{inputData.name} </span>
          </h5>
          <h5>
            Email: <span>{inputData.email} </span>
          </h5>
          <h5>
            Adresse: <span> {inputData.address}</span>
          </h5>
          <Artikel>
            <h4>Deine ausgewählte Artikel:</h4>
            {shoppingCard.map((element) => (
              <ul key={element.id}>
                <li>
                  {" "}
                  <h5>
                    {" "}
                    Artikel: <span>{element.title} </span>
                  </h5>{" "}
                  <h5>
                    <span>{element.amount} </span> x{" "}
                    <span>{element.price} </span> €
                  </h5>
                </li>
              </ul>
            ))}
          </Artikel>
          <h4>
            Total Price: <br /> <span> {totalPrice} </span> €
          </h4>
          <p>
            Wenn Du keine Bestellung innerhalb von den nächsten 6 Stunden
            machst, werden deine Daten im Warenkorb nicht gespeichert!!!
          </p>
          <button onClick={() => moveToHistory(inputData)}>Bestellen</button>
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
  li {
    display: flex;
    justify-content: space-around;
    text-align: start;
    height: 0px;
  }
  h5 {
    margin: 10px;
  }
  h4 {
    display: flex;
    justify-content: center;
    margin: 50px;
  }
  p {
    color: red;
    margin: 40px;
    font-size: 17px;
  }
  span {
    color: #993366;
    font-size: 15px;
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
