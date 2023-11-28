import React from "react";
import styled from "styled-components";
import data from "../../MOCK_DATA.json";
import { useState } from "react";
import SearchButton from "../atoms/SearchButton";
import SearchInput from "../atoms/SearchInput";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";

const Title = styled.h3`
    font-size: 1.125rem;
    padding: 10px 0px;
    font-weight: "bold";
`
const SearchExList = styled.ul`
  margin-top: 1.25rem;
  display: flex;
`;

export default function SearchBar() {
    const [SearchItem, setSearchItem] = useState('');
    const navigate = useNavigate()
    const enterSearch = (event)=>{
        if (event.key === "Enter"){
            let keyword = event.target.value
            navigate(`/?q=${keyword}`)
        }
    }
    return (
        <>
        {/* <Title>에서 진행중인 전시.공연 </Title> */}
            {/* <SearchInput />
            <SearchButton /> */}
            <div>
                {/* <input type="text" placeholder="Search..." onChange={(e)=>{setSearchItem(e.target.value)}} /> */}
                <input type="text" placeholder="Search..." onKeyPress={(e)=>{enterSearch(e)}} />
                {data.list.filter((item)=>{
                    if (SearchItem ==""){
                        return item
                    } else if (item.title.toLowerCase().includes(SearchItem.toLocaleLowerCase())){
                        return item
                    }
                }).map((item)=>{
                    return <SearchExList></SearchExList>
                })}
            </div>
        </>
    );
  }