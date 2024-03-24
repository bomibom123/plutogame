import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <Container>
      <GameName>광활면을 소개하는 게임!</GameName>
      <GameDescription>
        기억조각을 찾아 모든 미션을 완료하세요!
        <br />
        <br />
        [테스트용 데모 버전]
        <br />
        지도 부분 애니메이션 X, 디자인 X 등
      </GameDescription>
      <SelectDiv>
        <SelectButton to="/StartDescription">게임 설명 보기</SelectButton>
        <SelectButton to="/Start">게임 바로 시작하기</SelectButton>
      </SelectDiv>
    </Container>
  );
}

const Container = styled.div`
  max-width: 100vw;
  min-height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GameName = styled.div`
  color: white;
  font-size: 30px;
`;

const GameDescription = styled.div`
  margin-top: 20px;
  color: white;
  font-size: 20px;
  text-align: center;
`;
const SelectDiv = styled.div`
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
