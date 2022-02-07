import React, { useState } from "react";
import styled from "styled-components";
import { GrFormClose } from "react-icons/gr";

const ModalView = ({ handleClick }) => {
  return (
    <ModalBox>
      <ModalElement>
        <ModalCloseBtn>
          <GrFormClose onClick={handleClick}></GrFormClose>
        </ModalCloseBtn>
        <ModalContent>HELLO CODESTATES</ModalContent>
      </ModalElement>
    </ModalBox>
  );
};

function Modal() {
  const [modalSwitch, setModalSwitch] = useState(false);
  const handleClick = () => {
    setModalSwitch(!modalSwitch);
  };

  return (
    <Container>
      <Subtitle>Modal</Subtitle>
      <ModalBtnBox>
        <ModalBtn onClick={handleClick}>Open Modal</ModalBtn>
      </ModalBtnBox>
      {modalSwitch ? ModalView({ handleClick }) : <></>}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin-bottom: 80px;
`;

const Subtitle = styled.div`
  width: 15%;
  height: 8%;
  font-size: 40px;
  font-weight: 700;
  padding: 20px;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 350px;
  background-color: rgba(173, 173, 173, 0.7);
`;

const ModalElement = styled.div`
  padding: 5px;
  width: 50%;
  height: 50%;
  margin: 5% auto;
  border: none;
  border-radius: 25px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  & svg {
    font-size: 30px;
    cursor: pointer;
  }
`;

const ModalCloseBtn = styled.div`
  width: 100%;
  text-align: center;
`;
const ModalContent = styled.div`
  width: 100%;
  height: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #614f86;
`;

const ModalBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBtn = styled.button`
  width: 200px;
  height: 80px;
  border-radius: 80px;
  border: none;
  background-color: #4602c3;
  color: #ece0f3;
  font-size: 20px;
  cursor: pointer;
`;
export default Modal;
