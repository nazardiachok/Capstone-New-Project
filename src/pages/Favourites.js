import { SectionOutput } from "./homePage";
import { AddCardButton } from "./homePage";
import { DetailsButton } from "./homePage";
import { BookmarkButton } from "./homePage";
import { useNavigate } from "react-router-dom";
export default function Favourites({
  favourite,
  addToShoppingCard,
  bookmarkToggle,
}) {
  const navigate = useNavigate();
  return (
    <>
      <SectionOutput>
        {favourite.length === 0 ? (
          <h3>Du hast keine beliebteste Artikel zur Zeit!</h3>
        ) : (
          <h3>Deine beliebtesten Artikel!</h3>
        )}
        <ul>
          {favourite.map((obj) => (
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
