import styled from "styled-components";

export default function Modal({
  modalActive,
  setModalActive,
  objForModalWindow,
  deleteFeedback,
}) {
  return (
    <>
      <ModalDiv modalActive={modalActive} onClick={() => setModalActive(false)}>
        <ModalContent onClick={(e) => e.stopPropagation()}>
          <p>Möchten Sie Ihre Bewertung tatsächlich löschen?</p>
          <div>
            <button onClick={() => deleteFeedback(objForModalWindow)}>
              Ja
            </button>
            <button onClick={() => setModalActive(false)}>Nein</button>
          </div>
        </ModalContent>
      </ModalDiv>
    </>
  );
}
const ModalDiv = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${({ modalActive }) => (modalActive ? "scale(1)" : "scale(0)")};
`;

const ModalContent = styled.div`
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  max-width: 200px;
  div {
    display: flex;
    margin: 10px;
    justify-content: space-around;
  }
`;
