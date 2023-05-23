import styled from 'styled-components';
import { useSpring, animated, config } from '@react-spring/web';

export const Credits = () => {
  const springs = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 2000,
    config: config.slow,
  });
  return (
    <animated.div style={{ ...springs }}>
      <Container>
        <Title>The End</Title>
        <Caption>Любимой жене💜💜💜</Caption>
      </Container>
    </animated.div>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #e5e5e5;
`;
const Title = styled.h1`
  z-index: 20;
  font-size: 42px;
  text-align: center;
`;
const Caption = styled.p``;
