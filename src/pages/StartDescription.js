import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DescriptionArray = [
  '"광자야"',
  '"허허허. 난 곰팡팡쓰리라차 도사! 넌 흙마법에 걸려서 기억을 잃었다."',
  '"흠흠! 지금은 이런 말을 해도 전혀 알지 못하겠지."',
  '"중요한 것은, 광자야. 네가 기억을 찾으려면 지도에 나온 미션장소로 가서 기억의 조각을 찾아야 한다는 것이다."',
  '"네가 본래의 너의 모습으로 돌아오려면 기억 조각들을 모아야 해."',
  '"기억조각을 모두 모으면 넌 흙약물을 얻을 수 있단다."',
  '"이곳을 돌아다니면 자연스레 너의 기억을 찾을 수 있을게야."',
  '"너에게 이 지도를 주마. 이 지도가 아마 기억 조각을 찾는데 큰 도움이 될 거야."',
  '"각 구역의 흔적들을 따라가렴."',
  '" 가장 먼저 네가 가야 할 곳은 이 화합관 바로 앞에 있는 동산!"',
  '"영원한 불꽃의 화살표가 너를 기억의 조각으로 이끌 것이야..."',
  '" 그럼 너에게 행운 감자의 축복이 함께하길..."',
];
const StartDescription = () => {
  const [descriptionOrder, setDescriptionOrder] = useState(0);
  const MinusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 0 ? prevOrder - 1 : prevOrder
    );
  };

  const PlusOrder = () => {
    setDescriptionOrder((prevOrder) =>
      prevOrder > 10 ? prevOrder : prevOrder + 1
    );
  };
  return (
    <Container>
      <RelayDescription>{DescriptionArray[descriptionOrder]}</RelayDescription>
      <ButtonDiv>
        {descriptionOrder > 0 ? (
          <SelectButton onClick={MinusOrder}>이전</SelectButton>
        ) : (
          <GoButton to="/">이전</GoButton>
        )}
        {descriptionOrder < 11 ? (
          <SelectButton onClick={PlusOrder}>다음</SelectButton>
        ) : (
          <GoButton to="/Start">게임 시작</GoButton>
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
export default StartDescription;
