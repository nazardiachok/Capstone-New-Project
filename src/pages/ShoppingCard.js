import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function ShoppingCard({
  deleteCard,
  shoppingCard,
  decreaseAmount,
  addToShoppingCard,
  setTotalPrice,
}) {
  const navigate = useNavigate();
  const totalPrice = shoppingCard.reduce(
    (prevPrice, currentItem) =>
      prevPrice + currentItem.price * currentItem.amount,
    0
  );
  setTotalPrice(totalPrice);
  return (
    <WarenkorbStyle>
      <div>
        <h1>Warenkorb </h1>

        <SectionWarenkorb>
          <>
            {shoppingCard.length === 0 && (
              <h3>
                Es befinden sich zur Zeit keine Artikel in Ihrem Warenkorb!
              </h3>
            )}
          </>
          <ul>
            {shoppingCard.map((obj) => (
              <figure key={obj.id}>
                <img src={obj.image} alt="schuhe"></img>
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
        {shoppingCard.length > 0 && (
          <Gesamtpreis>
            <h3>
              Gesamtpreis: <span>{totalPrice}</span> €
            </h3>
            <NextButton onClick={() => navigate("/personalData")}>
              Weiter{" "}
            </NextButton>
          </Gesamtpreis>
        )}
      </div>
    </WarenkorbStyle>
  );
}
const WarenkorbStyle = styled.main`
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
  h3 {
    text-align: center;
    color: red;
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
export const NextButton = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 5px;
  margin-bottom: 5px;
  border-radius: 10px;

  &:hover {
    background-color: aliceblue;
    cursor: pointer;
    animation: none;
  }
  color: #ffffff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: animate_gradient 5s ease infinite;
  @keyframes animate_gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
