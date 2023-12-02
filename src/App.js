import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { GlobalStyles } from "./styles";
import NavBar from "./components/organisms/NavBar";
import Footer from "./components/organisms/Footer";
import Exhibition from "./components/template/Exhibition";
import Location from "./components/template/Location";
import Community from "./components/template/Community";
import Main from "./components/template/Main";
import ExDetail from "./components/template/ExDetail";
import Write from "./components/template/Write";
import ReviewDetail from "./components/template/ReviewDetail";
import Search from "./components/template/Search";
import Login from "./components/template/Login";
import Join from "./components/template/Join";
import MyPage from "./components/template/MyPage";

const Wrapper = styled.div`
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  @media (max-width: 768px) {
    padding-top: 50px;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default function App() {
  return (
    <Router>
      <Wrapper>
        <GlobalStyles />
        <NavBar />
        <ContentWrapper>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/exhibition" element={<Exhibition />} />
            <Route path="/ex_detail/:id" element={<ExDetail />} />
            <Route path="/community" element={<Community />} />
            <Route path="/location" element={<Location />} />
            <Route path="/review_detail/:id" element={<ReviewDetail />} />
            <Route path="/write" element={<Write />} />
            <Route path="/search" element={<Search />} />
            <Route path="/login" element={<Login />} />
            <Route path="/join" element={<Join />} />
            <Route path="/join" element={<MyPage />} />
          </Routes>
        </ContentWrapper>
        <Footer />
      </Wrapper>
    </Router>
  );
}
