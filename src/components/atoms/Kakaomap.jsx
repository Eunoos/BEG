import React from "react";
import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import LoIngEx from "../molecules/LoIngEx";
const { kakao } = window;

const Container = styled.div`
  display: flex;
`
const MapContainer = styled.div`
    width: 50%;
    height: 400px;
    border: 1px solid #ccc;
    
`
const MarkerStyle = styled.div`
  padding:5px;
  font-size:12px;
`
const ListContainer = styled.table`
  width: 50%;
  height: 400px;
  padding: 0px 20px;
  /* border: 1px solid #ccc; */
`
const ListTr = styled.tr`
  border-top: 2px solid black;
  font-size: 0.8rem;
  border-bottom: 1px solid #eee;
  cursor:pointer;
`
export default function Kakaomap() {
    const [location, setLocation] = useState({latitude:0,  longitude:0}) ;
    const [psList, setPsList] = useState([]);
    const [keyword, setKeyword] = useState("");
    // const [adList, setAdList] = useState([]);
    // const [phList, setPhList] = useState([]);
    // let loMarkers = [];
    function clickTr(v){
      <Link key={v} to = {`/lo_Detail/${v}`}></Link>
    }
    
    useMemo(()=>{
        if (navigator.geolocation){
          navigator.geolocation.getCurrentPosition(success, error);
        }
      
        function success(position){
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        }
      
        function error(){
          setLocation({
            latitude: 33.450701,
            longitude: 126.902435
          })
          console.log("위치 받기 실패");
        }
      },[navigator.geolocation.getCurrentPosition]);

    useEffect(()=>{
      
        const container = document.getElementById('map');
        const options = {
            center: new kakao.maps.LatLng(location.latitude, location.longitude),
            level: 5
        };
        const map = new kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
        let marker = new kakao.maps.Marker({position: markerPosition});
        let ps = new kakao.maps.services.Places(map);
        let infowindow = new kakao.maps.InfoWindow({zindex:1});
        
        kakao.maps.event.addListener(marker, 'click', function() {
        infowindow.setContent('<div style="padding:5px;font-size:12px;text-align: center;">내위치</div>');
        infowindow.open(map, marker);})
        ps.categorySearch('CT1', placesSearchCB, {useMapBounds:true});
        function placesSearchCB(data, status, pagination){
          
          if (status === kakao.maps.services.Status.OK) {
            setPsList([])
            data.map((e)=>{displayMarker(e);}) 
          }

         }
        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시합니다
          let markers = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x) 
          });
          markers.setMap(map);
          if(place.place_name.length){
            setPsList([...psList, [place.place_name, place.address_name, place.phone]]);
          }
          // if(){
          //   setAdList([...adList, place.address_name]);
          // }
          // if(place.phone.length){
          //   setPhList([...phList, place.phone]);
          // }
          '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>';
          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(markers, 'click', function() {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;text-align: center;">' + place.place_name + '</div>');
            infowindow.open(map, markers);
            setKeyword(place.place_name)
            
          });
          
          }
       
        marker.setMap(map);
        
    }, [location]);
    console.log(psList)
  return (
    <>
      <Container>
        <MapContainer id="map" />
        <ListContainer>
          {psList.map((v)=>{
            return <ListTr onClick={clickTr(v[0])}>
              <td>{v[0]}</td>
              <td>{v[1]}</td>
              <td>{v[2]}</td>
            </ListTr>
          })}
          {/* 데이터추출에러 수정중 */}
        </ListContainer>
      </Container>
      <LoIngEx keyword = {keyword}/>
    </>
  );
}