import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
export default function HomePage({
  setValue,
  selectValue,
  output,
  addToShoppingCard,
  bookmarkToggle,
  allDataItems,
}) {
  const navigate = useNavigate();
  const ref = useRef(null);
  const handleClick = () => ref.current.focus();

  return (
    <>
      <SectionInput>
        <input
          ref={ref}
          type="text"
          placeholder="Nike React..."
          onChange={(event) => setValue(event.target.value)}
        />
        <form action="">
          <select onChange={(event) => selectValue(event.target.value)}>
            <option value="">All</option>
            <option value="Herrenschuh">Herrenschuh</option>
            <option value="Damenschuh">Damenschuh</option>
          </select>
        </form>
      </SectionInput>
      <SectionOutput>
        {output.length === 0 && (
          <h3>
            Schaue Dir alles an oder
            <span class="animate-motion" onClick={handleClick}>
              {" "}
              starte Deine Suche!
            </span>
          </h3>
        )}
        <ul>
          {(output.length === 0 ? allDataItems : output).map((obj) => (
            <figure key={obj.id}>
              <img src={obj.image} alt="schuh"></img>

              <div>
                <figcaption>{obj.title} </figcaption>

                <p>{obj.category}</p>
                <p> Preis: {obj.price} €</p>

                <DetailsButton
                  onClick={() => {
                    navigate(`/${obj.id}`);
                  }}
                >
                  details
                </DetailsButton>

                <AddCardButton onClick={() => addToShoppingCard(obj)}>
                  Add to Cards
                </AddCardButton>
              </div>
              <BookmarkButton onClick={() => bookmarkToggle(obj)}>
                <img
                  className="bookmark"
                  src={`${
                    obj.bookmarked
                      ? "https://img.icons8.com/ios-glyphs/30/null/bookmark-ribbon.png"
                      : "https://img.icons8.com/material-outlined/24/null/bookmark-ribbon--v1.png"
                  }`}
                  alt="bookmark"
                />
              </BookmarkButton>
            </figure>
          ))}
        </ul>
      </SectionOutput>
    </>
  );
}
const SectionInput = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -1;
  input {
    border-radius: 10px;
    margin: 0 10px;
  }
  select {
    border-radius: 10px;
    height: 20px;
  }
`;
export const SectionOutput = styled.section`
  margin-top: 70px;
  margin-bottom: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  .bookmark {
    width: 25px;
    height: 25px;
    &:hover {
      cursor: pointer;
      background-color: aliceblue;
    }
  }
  .animate-motion {
    height: 20px;
    line-height: 20px;
    background: white;
    border-radius: 20px;
    max-width: 500px;
    font-size: 18px;
    padding: 0.5px;
    margin-left: 5px;
    text-align: center;

    animation: animate_motion 5s 0s both infinite;
  }
  .animate-motion:hover {
    animation: none;
    cursor: pointer;
  }

  @keyframes animate_motion {
    0%,
    20% {
      transform: translate3d(0, 0, 0);
    }
    10%,
    14%,
    18%,
    2%,
    6% {
      transform: translate3d(-7px, 0, 0);
    }
    12%,
    16%,
    4%,
    8% {
      transform: translate3d(7px, 0, 0);
    }
  }
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
    height: 120px;
    margin: 0 auto;
    cursor: pointer;
  }
  figcaption {
    padding: 0px 0px 0px 4px;
    display: flex;
    width: 170px;
  }
  p {
    padding: 0 4px;
    width: 100px;
    margin-right: 0px;
  }
  img {
    height: 110px;
    width: 110px;
    margin: 0;
    border-radius: 5px;
  }
  h3 {
    width: 100%;
    display: flex;
    text-align: center;
    justify-content: center;
    margin: 10px auto 30px auto;
  }
`;
export const AddCardButton = styled.button`
  height: 40px;
  width: 55px;
  position: relative;
  top: -90px;
  right: -95px;
  margin-top: 20px;
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
export const DetailsButton = styled.button`
  height: 20px;
  position: relative;
  top: -40px;
  right: -150px;
  border-radius: 5px;
  &:hover {
    background-color: aliceblue;
    cursor: pointer;
  }
`;
export const BookmarkButton = styled.button`
  position: relative;
  top: -70px;
  right: 13px;
  height: 30px;
  width: 30px;
  display: flex;
  justify-content: center;
  margin: auto;
`;
