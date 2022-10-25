import styled from "styled-components";
function Header() {
  return (
    <Head className="header">
      <h4>Shop App</h4>
    </Head>
  );
}
const Head = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 0;
  background-color: aliceblue;
  margin-bottom: 200px;
  max-height: 40px;
`;
export default Header;
