import React from 'react';
import styled from 'styled-components';
import mapImage from '../assets/goToDongsan.png';
import { Link } from 'react-router-dom';

const Start = () => {
  return (
    <Container>
      <MapDescription>
        다음 장소인 <br /> '마을 동산'으로 가세요!
      </MapDescription>
      <MapImage src={mapImage} alt="지도 이미지" />
      <ButtonDiv>
        <SelectButton to="/StartDescription">설명 다시보기</SelectButton>
        <SelectButton to="/DongsanDescription">도착 완료</SelectButton>
      </ButtonDiv>
    </Container>
  );
};

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const MapDescription = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
`;

const MapImage = styled.img`
  max-width: 80vw;
  margin-top: 20px;
`;

const ButtonDiv = styled.div`
  display: flex;
`;

const SelectButton = styled(Link)`
  width: 150px;
  height: 40px;
  margin: 20px 10px;
  color: black;
  font-size: 15px;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
`;

export default Start;
