import React, { useRef, useState } from "react";
import styled from "styled-components";
import { AiFillCloseCircle } from "react-icons/ai";

function Tag() {
  const [tags, setTags] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const newId = tags.length === 0 ? 0 : tags[tags.length - 1]["id"] + 1;
    const newTags = [...tags, { id: newId, text: e.target[0].value }];
    setTags(newTags);
    console.log(inputRef.current.value);
    inputRef.current.value = "";
  };

  const handleClear = (index) => {
    const filteredTags = tags.filter((el) => el.id !== index);
    setTags(filteredTags);
  };
  return (
    <Container>
      <TagBox>
        <Subtitle>Tag</Subtitle>
        <BottomBox>
          <Form
            className={isFocused ? "active" : ""}
            onSubmit={(e) => handleSubmit(e)}
          >
            {tags.map((el, i) => (
              <TagContent key={i}>
                <span>{el.text}</span>
                <AiFillCloseCircle
                  style={{ fontSize: "18", cursor: "pointer" }}
                  onClick={() => handleClear(el["id"])}
                />
              </TagContent>
            ))}
            <Input
              type="text"
              placeholder="Press enter to add tags"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              ref={inputRef}
            />
          </Form>
        </BottomBox>
      </TagBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height: 25rem; */
`;

const TagBox = styled.div`
  display: flex;
  flex-direction: column;
  border: 3px solid #eaeaea;
  border-radius: 10px;
  width: 80rem;
  height: 15rem;
`;

const Subtitle = styled.div`
  width: 5%;
  height: 8%;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 20px;
`;

const BottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 35rem;
  height: 3rem;
  padding: 1em 2em;
  border-radius: 5px;
  border: 1px solid #d1d1d1;
  &.active {
    border: 1px solid #4900ce;
  }
`;

const TagContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-right: 0.5rem;
  padding: 0.2em;
  width: 6rem;
  height: 3rem;
  border-radius: 5px;
  font-size: 14px;
  color: #ffffff;
  background-color: #4900ce;
`;

const Input = styled.input`
  flex-basis: 50%;
  height: 2.5rem;
  border: none;
  outline: none;
`;

export default Tag;
