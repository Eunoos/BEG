import React from "react";
import styled from "styled-components";
import data from "../../MOCK_DATA.json";
import { useState } from "react";
import SearchButton from "../atoms/SearchButton";
import SearchInput from "../atoms/SearchInput";
import { useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import ListVertical from "./ListVertical";

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
    const navigate = useNavigate();
    function searchData(){data.list.map((item, index)=>{
        if(item.title.toLowerCase().includes(SearchItem.toLocaleLowerCase())){
        return <ListVertical key={index} item={item} />
        // alert('성공')
        
    }
  })}
    const enterSearch = (event)=>{
        if (event.key === "Enter"){
            setSearchItem(event.target.value);
            searchData();
            alert(SearchItem);
            
        }
    }
    return (
        <>
        <Title>{SearchItem}이 포함된 전시.공연 </Title>
            {/* <SearchInput />
            <SearchButton /> */}
            <div>
                {/* <input type="text" placeholder="Search..." onChange={(e)=>{setSearchItem(e.target.value)}} /> */}
                <input type="text" placeholder="Search..." onKeyPress={(e)=>{enterSearch(e)}} />
                {/* map써서 필요한데이터만 리턴해보기 */}
                {/* {data.list.map((item, index)=>{
                    if(item.title.toLowerCase().includes(SearchItem.toLocaleLowerCase())){
                    return <ListVertical key={index} item={item} />
                }
              })} */}
                {/* {data.list.filter((item)=>{
                    if (SearchItem ==""){
                        return item
                    } else if (item.title.toLowerCase().includes(SearchItem.toLocaleLowerCase())){
                        return item
                    }
                }).map((item)=>{
                    return <SearchExList></SearchExList>
                })} */}
            </div>
        </>
    );
  }