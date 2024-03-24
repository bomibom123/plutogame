import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';

const OfficeQuiz = () => {
  const [answer, setAnswer] = useState('');
  const navigate = useNavigate();

  const answerCheck = () => {
    if (answer === 'a' || answer === 'A') {
      navigate('/GoToStatue');
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
        벽에 붙은 편지를 읽은 뒤 <br />
        문제를 풀어 답을 입력하세요!
      </AnswerDescription>
      <SmallAnswerDescription>
        정답인 알파벳을 기록해두고 꼭 기억하세요! <br />
        출발 장소로 돌아 오셨을 때 <br />
        정답들을 모아 단어를 만들어야 합니다!
      </SmallAnswerDescription>
      <QuizInput value={answer} onChange={changeControl}></QuizInput>
      <ButtonDiv>
        <GoButton to="/GoToPostOffice">설명 다시보기</GoButton>
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
