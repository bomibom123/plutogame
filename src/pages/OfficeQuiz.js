import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const OfficeQuiz = () => {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const answerCheck = () => {
    if (answer === 't' || answer === 'T') {
      navigate('/GoToPostOffice');
    } else alert('정답이 아닙니다.');
  };

  const changeControl = (event) => {
    setAnswer(event.target.value);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'Enter') {
        answerCheck();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [answer]);

  return (
    <Container>
      <AnswerDescription>
        문제의 정답인 알파벳을 <br /> 입력해주세요!
      </AnswerDescription>
      <SmallAnswerDescription>
        이 알파벳은 최종 단어를 만들 때 <br />
        2개가 필요합니다. <br />꼭 기록해두세요!
      </SmallAnswerDescription>
      <QuizInput value={answer} onChange={changeControl}></QuizInput>
      <ButtonDiv>
        <GoButton to="/OfficeDescription">설명 다시 보기</GoButton>
        <AnswerButton onClick={answerCheck}>입력 완료</AnswerButton>
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

const AnswerDescription = styled.div`
  color: white;
  font-size: 30px;
  text-align: center;
`;

const SmallAnswerDescription = styled.div`
  color: white;
  font-size: 20px;
  text-align: center;
  margin-top: 20px;
`;

const QuizInput = styled.input`
  width: 80px;
  height: 80px;
  margin-top: 20px;
  font-size: 40px;
  font-weight: '900';
  text-align: center;
`;
const ButtonDiv = styled.div`
  display: flex;
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

const AnswerButton = styled.button`
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

export default OfficeQuiz;
