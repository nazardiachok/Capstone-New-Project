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
        <h4>Prüfe deine daten und bestätige den Kauf</h4>
        <main>
          <h4>Dein persönliches Data: </h4>
          <h5>Name: {inputData.name}</h5>
          <h5>Email: {inputData.email}</h5>
          <h5>Adresse: {inputData.address}</h5>
          <Artikel>
            <p>Deine bestellte Artikel:</p>
            {shoppingCard.map((element) => (
              <ul key={element.id}>
                <li>
                  {" "}
                  <h5> Artikel: {element.title}</h5>{" "}
                  <h5>
                    {element.amount} x {element.price} €
                  </h5>
                </li>
              </ul>
            ))}
          </Artikel>
          <h4>Total Price: {totalPrice} €</h4>
          <button onClick={() => moveToHistory(inputData)}>Bestellen</button>
        </main>
      </Section>
    </>
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
    height: 0px;
  }
  h5 {
    margin: 10px;
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
