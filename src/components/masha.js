import masha from '../masha.png';
import styled from 'styled-components';

export const Masha = () => {
  return (
    <Container>
      <img src={masha} width={200} />
      <Label>Мария</Label>
    </Container>
  );
};

const Container = styled.div`
  width: 200px;
  height: 175px;
`;

const Label = styled.div`
  position: absolute;
  display: inline-block;
  left: 120px;
  bottom: 4px;
  padding: 6px 12px;
  border-radius: 12px;
  font-size: 16px;
  border: 1px solid #fff;
  background: #333399;
`;
