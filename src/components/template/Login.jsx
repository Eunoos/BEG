import React from "react";
import styled from "styled-components";
import { SectionContent } from "../atoms/SectionContent";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Join from "./Join";

const User = {
    userId : 'dmsdn11',
    password : 'hello11'
}
// 더미데이터 리코일 axios 사용하여 구현 수정

const Title = styled.h2`
    font-weight: bold;
    font-size: 3rem;
    padding: 70px;
`

export default function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPossword] = useState('');
    const navigate = useNavigate();
    // const [idPrime, setidPrime] = useState(false);
    // const [pwPrime, setpwPrime] = useState(false);


    const onClickLogin = ()=>{
        if(userId === User.userId && pw === User.pw) {
            alert('안녕하세요!');
            navigate("/")
        } else{
            alert('아이디 또는 비밀번호가 일치하지 않습니다')
        }
    }

    const naviJoin = ()=>{
        navigate("/join")
    }
    return (
        <SectionContent>
            <Title>로그인</Title>
            <form >
                <div>
                    <input 
                        type="text"
                        placeholder="아이디"
                        value={userId}
                        name="User-id"
                        onChange={(e)=>setid(e.target.value)}
                    />
                </div>
                
                <div>
                    <input
                        type="password"
                        placeholder="비밀번호"
                        value={password}
                        name="User-pw"
                        onChange={(e)=>setPw(e.target.value)}
                    />
                </div>
                
                <button onClick={onClickLogin} type="submit">로그인</button>
                <button onClick={naviJoin} >회원가입</button>
            </form>
        </SectionContent>
    );
}