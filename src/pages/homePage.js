import styled from "styled-components";
export default function HomePage({
  inputValue,
  selectValue,
  output,
  showDetails,
}) {
  return (
    <>
      <SectionInput>
        <input
          type="text"
          placeholder="Nike React..."
          onChange={(event) => inputValue(event.target.value)}
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
        {/*  {output ? ( */}

        <ul>
          {output.map((obj) => (
            <figure key={obj.id}>
              <img src={obj.image} alt="schuh"></img>
              <div>
                <figcaption>{obj.title} </figcaption>
                <p>{obj.category}</p>
                <p> Preis: {obj.price} €</p>
                <button onClick={() => showDetails()}>details</button>
              </div>
            </figure>
          ))}
        </ul>
        {/* ) : (
          <h1>Starte deine suche</h1>
        )} */}
      </SectionOutput>
    </>
  );
}
const SectionInput = styled.section`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -10;
`;
const SectionOutput = styled.section`
  margin-top: 50px;
  margin-bottom: 70px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: -10;
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
    min-width: 350px;
    margin: 0 auto;
    cursor: pointer;
  }
  figcaption {
    padding: 4px;
    display: flex;
    justify-content: center;
  }
  p {
    padding: 4px;
  }
  img {
    height: 110px;
    width: 110px;
  }
  button {
    height: 20px;
    position: relative;
    top: -40px;
    right: -150px;
  }
`;
