import { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from '@react-spring/web';
import { GlobalStyles } from './global-styles';
import { Dialog } from './dialog';
import { Masha } from './masha';
import { scenary } from '../scenary';
import bgImage from '../bg.jpeg';

export const App = () => {
  const [activePage, setActivePage] = useState(0);
  const onNext = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const mashaSprings = useSpring({
    from: { x: 500 },
    to: { x: 80 },
    delay: 4000,
  });
  const dialogSprings = useSpring({
    from: { x: 500 },
    to: { x: 0 },
    delay: 5500,
  });

  return (
    <>
      <GlobalStyles />
      <History>
        <Page>
          <MashaContainer>
            <animated.div style={{ ...mashaSprings }}>
              <Masha />
            </animated.div>
          </MashaContainer>

          {scenary.pages.map(
            (item, key) =>
              activePage === key && (
                <animated.div style={{ ...dialogSprings }}>
                  <Dialog
                    key={key}
                    active={activePage === key}
                    buttonLabel={item.buttonLabel}
                    turnPage={() => setActivePage(key + 1)}
                    text={item.text}
                    answer={item.answer}
                    action
                    onNext={onNext}
                  />
                </animated.div>
              )
          )}
        </Page>
      </History>
    </>
  );
};

const History = styled.div`
  overflow: hidden;
  margin: 0 auto;
  min-width: 320px;
  max-width: 680px;
  min-height: 800px;
  padding: 40px 20px;
  background-image: url(${bgImage});
  background-size: cover;
  color: #fff;
`;

const Page = styled.div`
  width: 300px;
  margin: 0 auto;
`;

const MashaContainer = styled.div``;
