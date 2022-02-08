import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { ANIMAL } from "../constants";

function AutoComplete() {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  const handleKeydown = (e) => {
    setSearch(e.target.value);
    if (search === "") {
      setFiltered([]);
      return;
    }
    let regex = new RegExp(search, "gi");
    const find = ANIMAL.filter((animal) => animal.match(regex));
    setFiltered(find);
  };

  const cancleInput = () => {
    setSearch("");
    setFiltered([]);
  };

  const searchComplete = (filter) => {
    setSearch(filter);
  };

  return (
    <Container>
      <AutoCompleteBox>
        <Subtitle>Autocomplete</Subtitle>
        <SearchBox className={filtered.length === 0 ? "" : "active"}>
          <InputBox>
            <Input
              type="text"
              onKeyUp={(e) => handleKeydown(e)}
              onChange={(e) => handleKeydown(e)}
              value={search}
            />
          </InputBox>
          <Button onClick={cancleInput}>
            <GrClose />
          </Button>
        </SearchBox>
        <FilteredUl className={filtered.length === 0 ? "" : "active"}>
          {filtered.map((filter, i) => (
            <FilteredLi key={i} onClick={() => searchComplete(filter)}>
              {filter}
            </FilteredLi>
          ))}
        </FilteredUl>
      </AutoCompleteBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 30rem;
`;

const AutoCompleteBox = styled.div`
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

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 70%;
  height: 3rem;
  margin: 0 auto;
  padding: 0 2em;
  border-radius: 25px;
  border: 1px solid #d1d1d1;
  &.active {
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const InputBox = styled.div`
  width: 95%;
  height: 3rem;
  margin-right: 2rem;
`;

const Input = styled.input`
  width: 100%;
  height: 2.5rem;
  border: none;
  outline: none;
  font-size: 1.3rem;
`;

const Button = styled.button`
  border: none;
  background-color: #ffffff;
`;

const FilteredUl = styled.ul`
  width: 70%;
  padding: 0 2em;
  max-height: 200px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  &.active {
    border: 1px solid silver;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
`;

const FilteredLi = styled.li`
  font-size: 1.2rem;
  height: 2.5rem;
  width: 100%;
  line-height: 2.5rem;
  cursor: pointer;
  &:hover {
    background-color: #efefef;
  }
`;

export default AutoComplete;
