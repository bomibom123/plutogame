import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DescriptionArray = [
  '"예전에는 모든 학교마다 쉽게 찾을수 있는 것이 동상이였어."',
  '"각 동상에는 여러가지 무시무시한 전설이 담겨있었지."',
  '"이순신 동상은 매일 저녁마다 깨어나서 자정이 되면 누군가와 싸운다고 했지..."',
  '"누구였지.... 기억이 나지 않는것 보면 나도 나이를 먹었구먼 허허"',
  '"귀여운 동물 동상들도 보이는군. 동물 동상들을 잘 둘러보면 알파벳 하나를 찾을 수도..."',
];

const StatueDescription = () => {
  const [descriptionOrder, setDescriptionOrder] = useState(0);
  const MinusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 0 ? prevOrder - 1 : prevOrder
    );
  };

  const PlusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 3 ? prevOrder : prevOrder + 1
    );
  };
  return (
    <Container>
      <RelayDescription>{DescriptionArray[descriptionOrder]}</RelayDescription>
      <ButtonDiv>
        {descriptionOrder > 0 ? (
          <SelectButton onClick={MinusOrder}>이전</SelectButton>
        ) : (
          <GoButton to="/GoToStatue">이전</GoButton>
        )}
        {descriptionOrder < 4 ? (
          <SelectButton onClick={PlusOrder}>다음</SelectButton>
        ) : (
          <GoButton to="/StatueQuiz">정답 입력하기</GoButton>
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
export default StatueDescription;
