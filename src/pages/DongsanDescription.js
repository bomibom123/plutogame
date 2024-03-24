import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DescriptionArray = [
  '"그래 동산을 올라보니 어떤가?"',
  '"광활은 간척지로 만들어진 마을로 동산 건너편 오래된 건물은 일본사람들이 살던 곳이라네."',
  '"물이 넘치면 피해가 없도록 감시자인 자신들의 건물만 높게 지었다는 이야기가 있어."',
  '"애석하게도 우린 지금 일제감정기에 만들어진 간척지 중심에 서 있지."',
  '"후손들이 그때의 탄압을 잊지 않았으면 해서 비석에 단서를 남겨두었다네."',
  '"비석을 꼼꼼히 보며 단서를 찾아 주게. 그럼 다음 장소를 알려주지."',
];

const DongsanDescription = () => {
  const [descriptionOrder, setDescriptionOrder] = useState(0);
  const MinusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 0 ? prevOrder - 1 : prevOrder
    );
  };

  const PlusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 4 ? prevOrder : prevOrder + 1
    );
  };
  return (
    <Container>
      <RelayDescription>{DescriptionArray[descriptionOrder]}</RelayDescription>
      <ButtonDiv>
        {descriptionOrder > 0 ? (
          <SelectButton onClick={MinusOrder}>이전</SelectButton>
        ) : (
          <GoButton to="/Start">이전</GoButton>
        )}
        {descriptionOrder < 5 ? (
          <SelectButton onClick={PlusOrder}>다음</SelectButton>
        ) : (
          <GoButton to="/DongsanQuiz">정답 입력하기</GoButton>
        )}
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

const RelayDescription = styled.div`
  width: 320px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 16px;
`;

const ButtonDiv = styled.div`
  display: flex;
`;

const SelectButton = styled.button`
  width: 150px;
  height: 40px;
  margin: 20px 10px;
  color: black;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  color: black;
  border-radius: 5px;
`;

const GoButton = styled(Link)`
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

export default DongsanDescription;
