import React from "react";
import styled from "styled-components";
import GoogleMap from "../atoms/GoogleMap";
import data from "../../MOCK_DATA.json";
import ListVertical from "./ListVertical";

const Title = styled.h3`
    font-size: 1.125rem;
    padding: 10px 0px;
    font-weight: "bold";
`
const LoExList = styled.ul`
  margin-top: 1.25rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function LoIngEx() {
  
    return (
      <>
        <Title>에서 진행중인 전시.공연 </Title>
        <LoExList>
        {/* {data.list.map((item, index) => (
            <ListVertical key={index} item={item} />
          ))} */}
          {/* 필터링해야함 */}
      </LoExList>
      </>
    );
  }