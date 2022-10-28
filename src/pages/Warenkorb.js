import styled from "styled-components";
export default function Warenkorb({ warenKorb }) {
  return (
    <WarenorbStyle>
      <h1>Warenkorb </h1>
      <br />
      {warenKorb.map((ware) => (
        <h1>{ware.title}</h1>
      ))}
    </WarenorbStyle>
  );
}
const WarenorbStyle = styled.div`
  display: flex;
  justify-content: center;
`;
