import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";

export default function Details({
  deleteFeedback,
  allDataItems,
  editFeedback,
}) {
  const navigate = useNavigate();

  const { id } = useParams();

  const details = allDataItems.filter((obj) => obj.id === +id);

  const [toggleFeedback, setToggleFeedback] = useState(false);

  return (
    <StyledDetails>
      <figure>
        <img src={details[0].image} alt="schuh"></img>
        <figcaption>{details[0].title} </figcaption>
        <p>
          <b>{details[0].category}</b>
        </p>
        <p>
          <b>Made in:</b> {details[0].MadeIn}
        </p>
        <p>
          <b>Preis:</b> {details[0].price} €
        </p>
        <p>
          <b>Detallierte Beschreibung: </b>
        </p>
        <p>{details[0].details}</p>

        {details[0].feedback ? (
          <>
            <FeedbackButton onClick={() => setToggleFeedback(!toggleFeedback)}>
              {!toggleFeedback ? "Bewertung ansehen" : "Bewertung verstecken"}
            </FeedbackButton>
            <Section toggleFeedback={toggleFeedback}>
              <p>Username: {details[0].user}</p>
              <p>Bewertung: {details[0].feedback}</p>
              <p>Datum: {details[0].date}</p>
              <DeleteButton onClick={() => deleteFeedback(details[0])}>
                Bewertung löschen
              </DeleteButton>
              <DeleteButton onClick={() => editFeedback(details[0])}>
                Bewertung bearbeiten
              </DeleteButton>
            </Section>
          </>
        ) : (
          <div>Es gibt keine Bewertungen zur Zeit!</div>
        )}
      </figure>

      <BackButton toggleFeedback={toggleFeedback} onClick={() => navigate("/")}>
        Zurück
      </BackButton>
    </StyledDetails>
  );
}

const StyledDetails = styled.main`
  display: flex;
  flex-direction: column;
  margin: 50px auto;

  width: 100%;
  figure {
    margin: 0px;
  }
  img {
    display: flex;
    justify-content: center;
    margin: auto;
    width: 100%;
    max-width: 600px;
    max-height: 600px;
  }
  figcaption {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    font-size: 25px;
  }
  p {
    font-size: 20px;
    margin-left: 10px;
  }

  div {
    margin: 10px;
  }
`;
const Section = styled.section`
  display: ${({ toggleFeedback }) => (toggleFeedback ? "block" : "none")};
`;
const BackButton = styled.button`
  min-width: 60px;
  margin: auto;
  background-color: #ff6666;
`;
const FeedbackButton = styled.button`
  min-width: 60px;
  margin: auto;
  margin-left: 10px;
  border-radius: 10px;
  &:hover {
    background-color: aliceblue;
    cursor: pointer;
  }
  /* background-color: ${({ toggleFeedback }) =>
    toggleFeedback ? "green" : "red"}; */
`;
const DeleteButton = styled.button`
  min-width: 60px;
  margin-bottom: 20px;
  margin-left: 10px;
  border-radius: 10px;

  border: none;
  &:hover {
    cursor: pointer;
    background-color: #ff6666;
  }
`;
