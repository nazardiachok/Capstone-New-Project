import styled from "styled-components";
export default function Bestellung({ localStorage, inputData }) {
  console.log(localStorage);
  return (
    <>
      <Section>
        <h4>Prüfe deine daten und bestätige den Kauf</h4>
        <div>
          <h4>Dein persönliches Data: </h4>
          <h5>Name: {inputData.name}</h5>
          <h5>Email: {inputData.email}</h5>
          <h5>Adresse: {inputData.address}</h5>
          <h4>
            Deie bestellte Artikel:
            {localStorage.map((element) => (
              <h5 key={element.id}>
                Artikel: {element.title}, Preis: {element.price}
              </h5>
            ))}
          </h4>
        </div>
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
`;
