import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Warenkorb({
  deleteCard,
  localStorage,
  decreaseAmount,
  addToShoppingCard,
  setTotalPrice,
}) {
  const navigate = useNavigate();
  const totalPrice = localStorage.reduce(
    (prevPrice, currentItem) =>
      prevPrice + currentItem.price * currentItem.amount,
    0
  );
  setTotalPrice(totalPrice);
  return (
    <WarenorbStyle>
      <div>
        <h1>Warenkorb </h1>

        <SectionWarenkorb>
          <>
            {localStorage.length === 0 && (
              <h3>
                Es befinden sich zur Zeit keine Artikel in Ihrem Warenkorb!
              </h3>
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
                    <button onClick={() => decreaseAmount(obj)}>-</button>
                    <span>{obj.amount}</span>
                    <button onClick={() => addToShoppingCard(obj)}>+</button>
                    <button onClick={() => deleteCard(obj)}>x</button>
                  </div>
                </section>
              </figure>
            ))}
          </ul>
        </SectionWarenkorb>
        {localStorage.length > 0 && (
          <Gesamtpreis>
            <h3>
              Gesamtpreis: <span>{totalPrice}</span> €
            </h3>
            <button onClick={() => navigate("/personalData")}>Weiter </button>
          </Gesamtpreis>
        )}
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
const Gesamtpreis = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 30px 0 50px 0;
  button {
    height: 30px;
  }
  span {
    color: red;
  }
`;
