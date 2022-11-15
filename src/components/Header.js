import styled from "styled-components";
function AppHeader() {
  return (
    <Header>
      <h4> NIKE STORE</h4>
    </Header>
  );
}
const Header = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: aliceblue;
  margin-bottom: 200px;
  max-height: 40px;

  color: #ffffff;
  background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
  background-size: 400% 400%;
  animation: animate_gradient 5s ease infinite;
  @keyframes animate_gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export default AppHeader;
