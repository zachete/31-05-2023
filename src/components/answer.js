import { useState } from 'react';
import styled from 'styled-components';

export const Answer = ({ label, onSubmit }) => {
  const [answer, setAnswer] = useState();
  const onChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <Container>
      <Text onChange={onChange} value={answer} />

      <Button
        onClick={() => {
          onSubmit(answer);
        }}
      >
        {label}
      </Button>
    </Container>
  );
};

const Container = styled.div`
  text-align: right;
  margin: 0 auto;
  width: 300px;
`;

const Text = styled.textarea`
  display: block;
  resize: none;
  box-sizing: border-box;
  width: 100%;
  height: 60px;
  padding: 8px;
  font-size: 16px;
  background: none;
  border: 4px solid #772cbf;
  border-radius: 4px;
  outline: none;
  background-color: rgba(0, 0, 0, 0.65);
  color: #fff;
`;

const Button = styled.button`
  margin: 20px auto;
  display: inline-block;
  padding: 10px 16px;
  color: #fff;
  background: #772cbf;
  outline: none;
  border: none;
  font-size: 20px;
  border-radius: 4px;

  &:active {
    background: #551e89;
  }
`;
