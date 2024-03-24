import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DescriptionArray = [
  '"이곳은 주민의 일상생활과 행정업무를 최일선에서 담당하는 기관이지."',
  '"광활마을을 위해 열심히 일해주는 그들에게 감사의 선물을 전달해 주고 싶은데..."',
  '"벽에 붙은 문제를 풀어 빈칸에 들어갈 알파벳을 맞춰보게."',
  '"그럼 기억을 찾을 수 있는 다음 장소를 알려주지!"',
];

const OfficeDescription = () => {
  const [descriptionOrder, setDescriptionOrder] = useState(0);
  const MinusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 0 ? prevOrder - 1 : prevOrder
    );
  };

  const PlusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 2 ? prevOrder : prevOrder + 1
    );
  };
  return (
    <Container>
      <RelayDescription>{DescriptionArray[descriptionOrder]}</RelayDescription>
      <ButtonDiv>
        {descriptionOrder > 0 ? (
          <SelectButton onClick={MinusOrder}>이전</SelectButton>
        ) : (
          <GoButton to="/GoToOffice">이전</GoButton>
        )}
        {descriptionOrder < 3 ? (
          <SelectButton onClick={PlusOrder}>다음</SelectButton>
        ) : (
          <GoButton to="/OfficeQuiz">정답 입력하기</GoButton>
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
export default OfficeDescription;
