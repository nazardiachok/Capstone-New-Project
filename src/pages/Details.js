import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Details({ output, deleteFeedback }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const details = output.filter((obj) => obj.id === +id);
  console.log(details[0]);
  console.log(details[0].user, details[0].feedback);

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

        {details[0].feedback !== "" && (
          <div>
            <p>
              <b>Feedback:</b>
            </p>
            <p>{details[0].user}</p>
            <p>{details[0].feedback}</p>
            <button onClick={() => deleteFeedback(details[0])}>delete</button>
          </div>
        )}
      </figure>

      <button onClick={() => navigate("/")}>zurück</button>
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
  }
  button {
    width: 60px;
    margin: auto;
  }
`;
