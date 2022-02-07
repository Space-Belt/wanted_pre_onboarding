import React, { useState } from "react";
import styled from "styled-components";

function Tab() {
  const navBars = [
    { nav: "Tab1", text: "Tab menu ONE" },
    { nav: "Tab2", text: "Tab menu TWO" },
    { nav: "Tab3", text: "Tab menu THREE" },
  ];
  const [clickedNav, setClickedNav] = useState(0);
  const handleClick = (index) => {
    setClickedNav(index);
  };
  const tabText = navBars[clickedNav]["text"];
  return (
    <Container>
      <TopBox>
        <Subtitle>Tab</Subtitle>
        <Nav>
          {navBars.map((navs, index) => (
            <List
              className={clickedNav === index ? "active" : ""}
              key={index}
              onClick={() => handleClick(index)}
            >
              {navs.nav}
            </List>
          ))}
        </Nav>
      </TopBox>
      <BottomBox>{tabText}</BottomBox>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100vw;
  margin-bottom: 80px;
`;
const TopBox = styled.div`
  display: flex;
  align-items: center;
`;
const Subtitle = styled.div`
  width: 5%;
  height: 8%;
  font-size: 1.5rem;
  font-weight: 700;
  padding: 20px;
`;

const Nav = styled.div`
  width: 80%;
  height: 50px;
  margin-top: 34px;
  display: flex;
  flex-direction: row;
  background-color: #e0e0e0;
  /* border: 1px solid silver; */
  & :nth-child(1) {
    margin-left: 7%;
  }
`;

const List = styled.div`
  width: 31%;
  height: 50px;
  line-height: 50px;
  text-align: left;
  font-size: 20px;
  padding-left: 10px;
  background-color: #e0e0e0;
  border: none;
  color: #a0a0a0;
  cursor: pointer;
  transition: all 0.3s ease-in;
  &.active {
    background-color: #4900ce;
    color: #ffefff;
  }
`;

const BottomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  height: 12rem;
  font-weight: 600;
`;

export default Tab;
