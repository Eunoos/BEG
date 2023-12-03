import React from "react";
import styled from "styled-components";
import { SectionContent } from "../atoms/SectionContent";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Title = styled.h2`
  font-size: 1.2rem;
  padding: 20px 0px;
`;
const JoinTable = styled.table`
  width: 100%;
  border-top: 2px solid black;
  margin-left: auto;
  margin-left: auto;
`;
const JoinTd = styled.td`
  border-bottom: 1px solid #eee;
  padding: 20px 0px;
`;
const JoinInput = styled.input`
  border: solid 1px #eee;
`;

export default function Join() {
  const [userId, setUserId] = useState('');
  const [idMessage, setIdMessage] = useState('');
  const [isId, setIsId] = useState(false);
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [passwordMessage, setPasswordMessage] = useState('');
  const [isPassword, setIsPassword] = useState(false);
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [birth, setBirth] = useState('');
  const [age, setAge] = useState('');

  //usestate 줄이게 수정필요
  // const [sex, setSex] = useState('')
  // const [inBusan, setInBusan] = useState("")

  const onChangeId = (e) => {
    const currentId = e.target.value;
    setUserId(currentId);
    const idRegExp = /^[a-zA-z0-9]{6,12}$/;

    if (!idRegExp.test(currentId)) {
      setIdMessage("6-12사이 대소문자 또는 숫자만 입력해 주세요!");
      setIsId(false);
    } else {
      setIdMessage("");
      setIsId(true);
    }
  };

  const onChangePassword = (e) => {
    const currentPassword = e.target.value;
    setPassword(currentPassword);
    const passwordRegExp =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]){8,20}$/;
    if (!passwordRegExp.test(currentPassword)) {
      setPasswordMessage(
        "숫자+영문자+특수문자 조합으로 8자리 이상 입력해주세요!"
      );
      setIsPassword(false);
    } else {
      setPasswordMessage("");
      setIsPassword(true);
    }
  };

  const onChangePasswordConfirm = (e) => {
    const currentPasswordConfirm = e.target.value;
    setPasswordConfirm(currentPasswordConfirm);
    if (password !== currentPasswordConfirm) {
      setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
      setIsPasswordConfirm(false);
    } else {
      setPasswordConfirmMessage("");
      setIsPasswordConfirm(true);
    }
  };

  const register = () => {
    axios.post('/dummy/logindata.json', {
      username: userId,
      password: password
    })
    .then((response) => {
      // localStorage.setItem('token', response.data.jwt)
    })
  }
  return (
    <SectionContent>
      <Title>회원정보 입력</Title>
      <JoinTable>
        <tr>
          <JoinTd>아이디</JoinTd>
          <JoinTd>
            <JoinInput type="text" name="User-id" value={userId} onChange={onChangeId}></JoinInput>
            <p>{idMessage}</p>
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>이름</JoinTd>
          <JoinTd>
            <JoinInput type="text" name="User-name" value={name} ></JoinInput>
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>비밀번호</JoinTd>
          <JoinTd>
             <JoinInput type="password" name="User-pw" value={password} onChange={onChangePassword} ></JoinInput>
             <p>{passwordMessage}</p>
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>비밀번호 확인</JoinTd>
          <JoinTd>
            <JoinInput type="password" name="User-pwConfirm" value={passwordConfirm} onChange={onChangePasswordConfirm} ></JoinInput>
            <p>{passwordConfirmMessage}</p>
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>핸드폰번호</JoinTd>
          <JoinTd>
            <JoinInput type="text" name="User-phone" value={phone}></JoinInput>
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>이메일</JoinTd>
          <JoinTd>
            <JoinInput type="text" name="User-email" value={email} ></JoinInput>
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>생일</JoinTd>
          <JoinTd>
            <JoinInput type="text" name="User-birth" value={birth}></JoinInput>
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>나이</JoinTd>
          <JoinTd>
          <JoinInput type="text" name="User-age" value={age}></JoinInput>
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>성별</JoinTd>
          <JoinTd>
            
          </JoinTd>
        </tr>
        <tr>
          <JoinTd>부산거주유무</JoinTd>
          <JoinTd>
          </JoinTd>
        </tr>
      </JoinTable>
      <button onClick={()=> {
       register
      }}>가입완료</button>

    </SectionContent>
  );
}