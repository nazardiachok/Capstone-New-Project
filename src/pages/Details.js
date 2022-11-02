import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Details({ output }) {
  const navigate = useNavigate();

  const { id } = useParams();
  const details = output.filter((obj) => obj.id === +id);

  /* console.log(output);
  console.log(details);
  console.log(id); */

  return (
    <StyledDetails>
      <figure>
        <img src={details[0].image} alt="schuh"></img>
        <figcaption>{details[0].title} </figcaption>
        <p>
          <strong>{details[0].category}</strong>
        </p>
        <p>
          <strong>Made in:</strong> {details[0].MadeIn}
        </p>
        <p>
          <strong>Preis:</strong> {details[0].price} €
        </p>
        <p>
          <strong>Detallierte Beschreibung: </strong>
        </p>
        <p>{details[0].details}</p>
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
