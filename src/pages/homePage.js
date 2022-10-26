import styled from "styled-components";
export default function HomePage({ inputValue, selectValue, output }) {
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
        <ul>
          {output?.map((obj) => (
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
    gap: 40px;
    margin: 0 auto;
    padding-left: 0px;
  }
  figure {
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
    height: 100px;
    width: 110px;
  }
`;
