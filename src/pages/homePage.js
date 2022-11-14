import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function HomePage({
  setValue,
  selectValue,
  output,
  addToShoppingCard,
  bookmarkToggle,
  allDataItems,
}) {
  const navigate = useNavigate();

  return (
    <>
      <SectionInput>
        <input
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
          <h3>Schaue Dir unten alle Artikel an, oder starte Deine Suche!</h3>
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
                  Add to Card
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
`;
export const DetailsButton = styled.button`
  height: 20px;
  position: relative;
  top: -40px;
  right: -150px;
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
