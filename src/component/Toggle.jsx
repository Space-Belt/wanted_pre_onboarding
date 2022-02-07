import React, { useState } from "react";
import styled from "styled-components";

function Toggle() {
  const [checked, setChecked] = useState(false);
  const textChange = () => {
    setChecked(!checked);
  };
  return (
    <Container>
      <Subtitle>Toggle</Subtitle>
      <ToggleContainer>
        <div>
          <OnOff id="toggleBtn" type="checkbox" onClick={textChange} />
          <Label htmlFor="toggleBtn"></Label>
          <TextBox>Toggle Switch {checked ? "OFF" : "ON"}</TextBox>
        </div>
      </ToggleContainer>
    </Container>
  );
}

const Container = styled.div`
  margin-bottom: 80px;
`;

const Subtitle = styled.div`
  width: 15%;
  height: 8%;
  font-size: 40px;
  font-weight: 700;
  padding: 20px;
`;

const ToggleContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100%;

  & > div > input + label::before {
    content: "";
    position: absolute;
    width: 0px;
    height: 80px;
    border-radius: 0px;
    left: 0;
    background-color: purple;
    transition: all 0.45s ease-in-out;
  }

  & > div > input:checked + label::before {
    left: 0px;
    width: 200px;
    height: 80px;
  }

  & > div > input + label::after {
    content: "";
    display: block;
    position: absolute;
    left: 10px;
    top: 10px;
    background-color: white;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition: all 0.5s ease-in-out;
  }

  & > div > input:checked + label::after {
    background-color: aliceblue;
    left: 130px;
  }
`;

const OnOff = styled.input`
  visibility: hidden;
  position: absolute;
`;

const Label = styled.label`
  display: block;
  position: relative;
  width: 200px;
  height: 80px;
  border-radius: 40px;
  background-color: #2cdbd5;
  overflow: hidden;
  margin-bottom: 10px;
`;

const TextBox = styled.h1`
  text-align: center;
  font-size: 20px;
`;

export default Toggle;
