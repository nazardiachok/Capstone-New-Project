import styled from "styled-components";
export default function HomePage() {
  return (
    <>
      <SectionInput>
        <div>
          <input type="text" />
          <form action="">
            <select>
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
