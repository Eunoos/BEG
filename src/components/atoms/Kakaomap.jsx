import React from "react";
import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
const { kakao } = window;

const MapContainer = styled.div`
    width: 60%;
    height: 500px;
    border: 1px solid #ccc;
`
const MarkerStyle = styled.div`
  padding:5px;
  font-size:12px;
`
export default function Kakaomap() {
    const [location, setLocation] = useState({latitude:0,  longitude:0}) ;
    const [psList, setPsList] = useState([]);
    // let loMarkers = [];
    
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
        
        ps.categorySearch('CT1', placesSearchCB, {useMapBounds:true});
        function placesSearchCB(data, status, pagination){
          if (status === kakao.maps.services.Status.OK) {
             data.map((e)=>{
              
              displayMarker(e);
              
             }) 
          }

         }
        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시합니다
          let markers = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x) 
          });
          markers.setMap(map);
          if(place.place_name.length>0){
            setPsList(...psList, place.place_name);
          }
          '<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>';
          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(markers, 'click', function() {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, markers);
            
          });
          
          }
       
        marker.setMap(map);
        
    }, [location]);
    console.log(psList)
  return (
    <>
      <MapContainer id="map" />
      <div>
        {/* {psList.length!=0 ?psList.map((v)=>{
          return <li></li>
        }):null} */}
        {/* 데이터추출에러 수정중 */}
      </div>
    </>
  );
}