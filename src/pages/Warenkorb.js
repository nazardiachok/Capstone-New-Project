import styled from "styled-components";
import { SectionOutput } from "./homePage";
export default function Warenkorb({ warenKorb }) {
  return (
    <WarenorbStyle>
      <h1>Warenkorb </h1>

      <SectionOutput>
        <ul>
          {warenKorb.map((obj) => (
            <figure key={obj.id}>
              <img src={obj.image} alt="schuh"></img>
              <div>
                <figcaption>{obj.title} </figcaption>
                <p>{obj.category}</p>
                <p> Preis: {obj.price} €</p>
              </div>
            </figure>
          ))}
        </ul>
      </SectionOutput>
    </WarenorbStyle>
  );
}
const WarenorbStyle = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px auto;
`;
