import React from "react";

function TabButton({ tabNum }) {
  return (
    <>
      <input id={tabNum} type="radio" />
      <label htmlFor={tabNum}>Tab{tabNum}</label>
    </>
  );
}

export default TabButton;
