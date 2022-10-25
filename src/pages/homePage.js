import styled from "styled-components";
export default function HomePage({ inputValue, selectValue }) {
  return (
    <>
      <SectionInput>
        <div>
          <input
            type="text"
            onChange={(event) => inputValue(event.target.value)}
          />
          <form action="">
            <select onChange={(event) => selectValue(event.target.value)}>
              <option value="">Category</option>
              <option value="Herrenschuh">Herrenschuh</option>
              <option value="Dammenschuh">Dammenschuh</option>
            </select>
          </form>
        </div>
      </SectionInput>
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
