import styled from "styled-components";
import React, { useState } from "react";

const LoMapTabMenu = () => {
  const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    gap: 15px;
  `;
  const Content = styled.div`
    font-weight: ${(props) => (props.click ? "bold" : "normal")};
    color: ${(props) => (props.click ? "#000" : "#ccc")};
    cursor: pointer;
    font-size: 15px;
  `;

  const [LoClick, setLoClick] = useState(true);

  return (
    <Container>
      <Content click={LoClick}>공연.전시장위치</Content>
      <Content click={!LoClick}>주변주차장</Content>
      <Content click={!LoClick}>주변음식점</Content>
      <Content click={!LoClick}>관광명소</Content>
    </Container>
  );
};

export default LoMapTabMenu;