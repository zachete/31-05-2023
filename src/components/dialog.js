import styled from 'styled-components';
import { Answer } from './answer';

export const Dialog = ({
  text,
  answer,
  turnPage,
  buttonLabel,
  buttonAction,
  onEnd,
}) => {
  const onSubmit = (value) => {
    if (value === answer) {
      turnPage();
    }
  };
  const onClick = () => {
    if (buttonAction) {
      switch (buttonAction) {
        case 'END':
          onEnd();
      }
      return;
    }

    turnPage();
  };

  return (
    <Container>
      <Text>
        {text.map((item, key) => (
          <Phrase key={key}>{item}</Phrase>
        ))}
      </Text>

      {answer ? (
        <Answer label={'Отправить'} onSubmit={onSubmit} />
      ) : (
        <Button onClick={onClick}>{buttonLabel}</Button>
      )}
    </Container>
  );
};

const Container = styled.div``;

const Text = styled.div`
  box-sizing: border-box;
  padding: 20px;
  margin-top: -3px;
  border-radius: 4px;
  border-top: 4px solid #000;
  border-bottom: 4px solid #000;
  background-color: rgba(0, 0, 0, 0.4);
`;

const Phrase = styled.p`
  :first-child {
    margin-top: 0;
  }

  :last-child {
    margin-bottom: 0;
  }
`;

const Button = styled.button`
  margin: 20px auto;
  display: block;
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
