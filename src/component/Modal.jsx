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
      <BorderBox>
        <Subtitle>Modal</Subtitle>
        <ModalBtnBox>
          <ModalBtn onClick={handleClick}>Open Modal</ModalBtn>
        </ModalBtnBox>
        {modalSwitch ? ModalView({ handleClick }) : <></>}
      </BorderBox>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 100vw;
  height: 15rem;
  margin-bottom: 30px;
`;

const BorderBox = styled.div`
  width: 80rem;
  height: 15rem;
  border: 2px solid #eaeaea;
  border-radius: 10px;
`;

const Subtitle = styled.div`
  width: 100%;
  height: 8%;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 20px;
`;

const ModalBox = styled.div`
  position: absolute;
  top: 2px;
  left: 11.4vw;
  border-radius: 10px;
  width: 76.4vw;
  height: 15rem;
  background-color: rgba(173, 173, 173, 0.7);
`;

const ModalElement = styled.div`
  width: 50%;
  height: 60%;
  margin: 3% auto;
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
