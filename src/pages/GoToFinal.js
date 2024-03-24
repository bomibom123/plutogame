import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DescriptionArray = [
  '"기억을 찾기 위해 떠난 광활면 여행은 어땠나?"',
  '"이제 정답으로 적었던 알파벳들 총 6개로 단어 하나를 만들어 출발 장소로 돌아오게."',
  '"단어가 정답이면 기억이 돌아오는 흙탕물을 주지!"',
];

const GoToFinal = () => {
  const [descriptionOrder, setDescriptionOrder] = useState(0);
  const MinusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 0 ? prevOrder - 1 : prevOrder
    );
  };

  const PlusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 1 ? prevOrder : prevOrder + 1
    );
  };
  return (
    <Container>
      <RelayDescription>{DescriptionArray[descriptionOrder]}</RelayDescription>
      <ButtonDiv>
        {descriptionOrder > 0 ? (
          <SelectButton onClick={MinusOrder}>이전</SelectButton>
        ) : (
          <GoButton to="/StatueQuiz">이전</GoButton>
        )}
        {descriptionOrder < 2 ? (
          <SelectButton onClick={PlusOrder}>다음</SelectButton>
        ) : null}
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
export default GoToFinal;
