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

const Text = styled.div``;

const Phrase = styled.p``;

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
