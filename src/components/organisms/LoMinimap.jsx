import React from "react";
import styled from "styled-components";
import GoogleMap from "../atoms/GoogleMap";
const Title = styled.h3`
    font-size: 1.125rem;
    padding: 10px 0px;
    font-weight: "bold";

`

export default function LoMinimap() {
    return (
      <>
        <Title>내 주변 전시공연장 </Title>
        <GoogleMap />
      </>
    );
  }