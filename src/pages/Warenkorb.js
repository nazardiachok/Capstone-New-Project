import styled from "styled-components";

export default function Warenkorb({
  deleteCard,
  localStorage,
  count,
  setCount,
}) {
  return (
    <WarenorbStyle>
      <div>
        <h1>Warenkorb </h1>

        <SectionWarenkorb>
          <>
            {localStorage.length === 0 && (
              <h2>
                Es befinden sich zur Zeit keine Artikel in Ihrem Warenkorb!
              </h2>
            )}
          </>
          <ul>
            {localStorage.map((obj) => (
              <figure key={obj.id}>
                <img src={obj.image} alt="schuh"></img>
                <section>
                  <figcaption>{obj.title} </figcaption>
                  <p>{obj.category}</p>
                  <p> Preis: {obj.price} €</p>
                  <div>
                    <button onClick={() => setCount(count - 1)}>-</button>
                    <span>{`${count >= 1 ? count : 1}`}</span>
                    <button onClick={() => setCount(count + 1)}>+</button>
                    <button onClick={() => deleteCard(obj)}>x</button>
                  </div>
                </section>
              </figure>
            ))}
          </ul>
        </SectionWarenkorb>
      </div>
    </WarenorbStyle>
  );
}
const WarenorbStyle = styled.main`
  display: flex;
  justify-content: center;
  margin: 30px auto;
  h1 {
    display: flex;
    justify-content: center;
  }
`;
export const SectionWarenkorb = styled.section`
  margin-top: 50px;
  margin-bottom: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  ul {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin: 0 auto;
    padding-left: 0px;
  }
  figure {
    padding-left: 10px;
    padding-top: 10px;
    padding-bottom: 0px;
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    min-width: 340px;
    height: 160px;
    margin: 0 auto;
    cursor: pointer;
  }
  figcaption {
    padding: 4px;
    display: flex;
  }
  p {
    padding: 4px;
  }
  img {
    height: 160px;
    width: 110px;
    margin: 0;
    border-radius: 5px;
  }
  div {
    background-color: aliceblue;
    border-radius: 5px;
  }
  button {
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 5px;
    margin-bottom: 5px;
  }
`;
