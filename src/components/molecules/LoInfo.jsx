import React from "react";
import styled from "styled-components";

const LoImage = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    height: 400px;
    padding: 10px 0px;
  }
`;

export default function LoInfo({ item }) {
  return (
    <LoImage href={`/location/${item}`}>
      <img src="/images/loca1.png" height='30px' />
      {/* 추후 목업데이터에 추가 후 연결 */}
    </LoImage>
  );
}