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
    
    let loMarkers = [];
    // let ps = new kakao.maps.services.Places();
    
   
    // function displayPlaces(places){
    //     for ( var i=0; i<places.length; i++ ) {

    //         // 마커를 생성하고 지도에 표시
    //         var marker = addMarker(new kakao.maps.LatLng(places[i].y, places[i].x));

    //         // 마커와 검색결과 항목을 클릭 했을 때
    //         // 장소정보를 표출하도록 클릭 이벤트를 등록
    //         (function(marker, place) {
    //             // kakao.maps.event.addListener(marker, 'click', function() {
    //             //     displayPlaceInfo(place);
    //             // });
    //         })(marker, places[i]);
    // }
    // }
    // function addMarker(position){
    //     let marker = new kakao.maps.Marker({
    //         position: position, // 마커의 위치
    //     });
    //     marker.setMap(map);
    //     loMarkers.push(marker)
        
    //     return marker;
    // }
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
            level: 3
        };
        const map = new kakao.maps.Map(container, options);
        let markerPosition = new kakao.maps.LatLng(location.latitude, location.longitude);
        let marker = new kakao.maps.Marker({position: markerPosition});
        let ps = new kakao.maps.services.Places();
        let infowindow = new kakao.maps.InfoWindow({zindex:1});
        ps.categorySearch('SC4', placesSearchCB, {useMapBounds:true});
        function placesSearchCB(data, status, pagination){
          if (status === kakao.maps.services.Status.OK) {
             data.map((e)=>{
              
              displayMarker(e);
             })
          }
         }
        function displayMarker(place) {
          // 마커를 생성하고 지도에 표시합니다
          const marker = new kakao.maps.Marker({
              map: map,
              position: new kakao.maps.LatLng(place.y, place.x) 
          });
          // if(kakao){
          //   alert('tjd')
          // }
          // 마커에 클릭이벤트를 등록합니다
          kakao.maps.event.addListener(marker, 'click', function() {
              // 마커를 클릭하면 장소명이 인포윈도우에 표출됩니다
            infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>');
            infowindow.open(map, marker);
            
          });
          marker.setMap(map);
          }
       
        marker.setMap(map);
        
    }, [location]);

  return (
    <>
      <MapContainer id="map" />
    </>
  );
}