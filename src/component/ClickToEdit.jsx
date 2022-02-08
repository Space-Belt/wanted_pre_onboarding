import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";

function DivOrInput({ spanName, label, value, id, handleValue, type }) {
  const [clicked, setClicked] = useState(false);
  const [temporaryValue, setTemporaryValue] = useState(value);
  const inputRef = useRef();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const handleBlur = () => {
    setClicked(!clicked);
    handleValue(temporaryValue);
  };

  useEffect(() => {
    if (clicked) {
      inputRef.current.focus();
    }
  }, [clicked]);

  const handleTemporaryValue = (e) => {
    setTemporaryValue(e.target.value);
  };

  return (
    <>
      {clicked ? (
        <>
          <label htmlFor={id}>{label}</label>
          <input
            type={type}
            id={id}
            ref={inputRef}
            onChange={(e) => handleTemporaryValue(e)}
            onKeyUp={(e) => handleTemporaryValue(e)}
            onBlur={handleBlur}
            value={temporaryValue}
          />
        </>
      ) : (
        <>
          <span>{spanName}</span>
          <div onClick={handleClick}>{value}</div>
        </>
      )}
    </>
  );
}

function ClickToEdit() {
  const [name, setName] = useState("고라니");
  const [age, setAge] = useState(12);

  return (
    <Container>
      <ClickToEditBox>
        <Subtitle>ClickToEdit</Subtitle>
        <ClickToInput>
          <DivOrInput
            id="name"
            spanName="이름"
            label="이름"
            value={name}
            type="text"
            handleValue={(e) => setName(e)}
          />
        </ClickToInput>
        <ClickToInput>
          <DivOrInput
            id="age"
            spanName="나이"
            label="나이"
            type="number"
            value={age}
            handleValue={(e) => setAge(e)}
          />
        </ClickToInput>
        <Result>
          이름 {name} 나이 {age}
        </Result>
      </ClickToEditBox>
    </Container>
  );
}
const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 80px;
  height: 20rem;
`;

const ClickToEditBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 3px solid #eaeaea;
  border-radius: 10px;
  width: 80rem;
  height: 25rem;
`;

const Subtitle = styled.div`
  width: 97%;
  height: 8%;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 20px;
`;

const ClickToInput = styled.div`
  display: flex;
  width: 30%;
  height: 3rem;
  margin: 0 auto;
  align-items: center;
  margin-bottom: 30px;
  & > span {
    width: 30%;
    height: 2rem;
    font-size: 1.2rem;
    text-align: center;
  }
  & > div {
    width: 70%;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
    border: 1px solid #eaeaea;
  }
  & > label {
    width: 30%;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
  }
  & > input {
    width: 70%;
    height: 2rem;
    line-height: 2rem;
    font-size: 1.2rem;
    text-align: center;
  }

  & > input[type="number"]::-webkit-outer-spin-button,
  input[type="number"]::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const Result = styled.div`
  font-size: 1.1rem;
`;

export default ClickToEdit;
