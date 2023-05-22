import styled from 'styled-components';
import { Masha } from './masha';
import { Answer } from './answer';

export const Page = ({ text, answer, turnPage, buttonLabel }) => {
  const onSubmit = (value) => {
    console.log(value, answer);
    if (value === answer) {
      turnPage();
    }
  };

  return (
    <StyledPage>
      <Masha />

      <DialogContainer>
        <Dialog>
          {text.map((item, key) => (
            <Text key={key}>{item}</Text>
          ))}
        </Dialog>
        {answer ? (
          <Answer label={'Отправить'} onSubmit={onSubmit} />
        ) : (
          <Button onClick={turnPage}>{buttonLabel}</Button>
        )}
      </DialogContainer>
    </StyledPage>
  );
};

const StyledPage = styled.div`
  height: 100%;
  color: #fff;
`;

const DialogContainer = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const Dialog = styled.div``;

const Text = styled.p``;

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
