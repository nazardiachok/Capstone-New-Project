import styled from "styled-components";
import Cards from "../components/Cards";
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
          <div>
            <h4>
              Name: <span>{inputData.name} </span>
            </h4>
            <h4>
              Email: <span>{inputData.email} </span>
            </h4>
            <h4>
              Adresse: <span> {inputData.address}</span>
            </h4>
          </div>
          <Artikel>
            <h4>Deine ausgewählte Artikel:</h4>
            <Cards shoppingCard={shoppingCard}></Cards>
            {/* {shoppingCard.map((element) => (
              <ul key={element.id}>
                <li>
                  {" "}
                  <h5>
                    {" "}
                    Artikel: <span> {element.title} </span>
                  </h5>{" "}
                  <h5>
                    <span>{element.amount} </span> x{" "}
                    <span>{element.price} </span> €
                  </h5>
                </li>
              </ul>
            ))} */}
          </Artikel>
          <div>
            Total Price: <br /> <span> {totalPrice} </span> €
          </div>
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
  ul {
    padding: 0;
  }
  li {
    display: flex;
    justify-content: space-around;
    text-align: start;
    gap: 40px;
  }
  h5 {
    margin: 10px 0 0 40px;
    width: 250px;
    display: flex;
    justify-content: flex-start;
  }
  h4 {
    margin: 10px;
    display: flex;
    justify-content: center;
  }
  p {
    color: red;
    margin: 40px;
    font-size: 17px;
  }
  span {
    color: #993366;
    font-size: 14px;
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
