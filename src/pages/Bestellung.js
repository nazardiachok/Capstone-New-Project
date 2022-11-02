import styled from "styled-components";
export default function Bestellung({ localStorage, inputData, totalPrice }) {
  return (
    <>
      <Section>
        <h4>Prüfe deine daten und bestätige den Kauf</h4>
        <main>
          <h4>Dein persönliches Data: </h4>
          <h5>Name: {inputData.name}</h5>
          <h5>Email: {inputData.email}</h5>
          <h5>Adresse: {inputData.address}</h5>
          <h4>
            Deie bestellte Artikel:
            {localStorage.map((element) => (
              <ul key={element.id}>
                <div>
                  {" "}
                  <h5> Artikel: {element.title}</h5>{" "}
                  <h5>
                    {element.amount} x {element.price} €
                  </h5>
                </div>
              </ul>
            ))}
          </h4>
          <h4>{totalPrice}</h4>
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
  div {
    display: flex;
    justify-content: space-around;
    text-align: start;
  }
  h5 {
    margin: 5px;
  }
`;
