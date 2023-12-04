import React from "react";
import styled from "styled-components";
import GoogleMap from "../atoms/GoogleMap";
import data from "../../MOCK_DATA.json";
import ListVertical from "./ListVertical";
import { useState } from "react";

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
  const [pickLo, setPickLo] = useState("부산시립미술관");
  const [count, setCount] = useState(0);

  return (
    <>
      <Title>{pickLo}에서 진행중인 전시.공연 </Title>
      <LoExList>
      {data.list.map((item, index)=>{
        if(item.location==pickLo){
        return <ListVertical key={index} item={item} />
        // if(count>2)
      }
      }
        )}
    </LoExList>
    </>
  );
}