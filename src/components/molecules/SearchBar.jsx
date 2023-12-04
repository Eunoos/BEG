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
  justify-content: space-between;
  flex-wrap: wrap;
`;


export default function SearchBar() {
    const [SearchItem, setSearchItem] = useState('');
    const navigate = useNavigate();
    const [searchList, setSearchList] = useState([]);

//     function searchData(){data.list.map((item, index)=>{
//         if(item.title.toLowerCase().includes(SearchItem.toLocaleLowerCase())){
//         // return <ListVertical key={index} item={item} />
//         // alert('성공')
//             const searchVal = [index, item];
//             setSearchList([...searchList, searchVal]);
//     }
//   })}
    const enterSearch = (event)=>{
        if (event.key === "Enter"){
            setSearchItem(event.target.value);
            setSearchList([]);
            {data.list.map((item, index)=>{
                if(item.title.toLowerCase().includes(SearchItem.toLocaleLowerCase())){
                // alert('성공')
                    const searchVal = [index, item];
                    setSearchList([...searchList, searchVal]);
            }
            })}
            console.log(searchList);
            
        }
    }
    return (
        <>
        <Title>{SearchItem}이 포함된 전시.공연 </Title>
            {/* <SearchInput />
            <SearchButton /> */}
            <div>
                <input type="search" placeholder="Search..." onKeyPress={(e)=>{enterSearch(e)}} />
                {/* map써서 필요한데이터만 리턴해보기 */}
                <SearchExList>
                    {searchList.length===0 ?
                        <p>{SearchItem}를(을) 포함한 검색결과가 없습니다.</p>:
                        searchList.map((v)=>{
                            return <ListVertical key={v[0]} item={v[1]} />
                        })}
                    
                </SearchExList>
                
            </div>
        </>
    );
  }