import { useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated, config } from '@react-spring/web';
import { GlobalStyles } from './global-styles';
import { Dialog } from './dialog';
import { Masha } from './masha';
import { Credits } from './credits';
import { scenary } from '../scenary';
import bgImage from '../bg.jpeg';

export const App = () => {
  const [activePage, setActivePage] = useState(0);
  const [end, setEnd] = useState(false);
  const mashaSprings = useSpring({
    from: { x: end ? 80 : 600 },
    to: { x: end ? -600 : 80 },
    delay: 3200,
  });
  const dialogSprings = useSpring({
    from: { x: end ? 0 : 600 },
    to: { x: end ? -600 : 0 },
    delay: 3700,
  });
  const [historySprings, historySpringsApi] = useSpring(() => ({}));
  const onNext = (pageNumber) => {
    setActivePage(pageNumber);
  };
  const onEnd = () => {
    setEnd(true);
    historySpringsApi.start({
      from: {
        opacity: 1,
      },
      to: {
        backgroundColor: '#000',
        opacity: 0.5,
      },
      delay: 1800,
      config: config.slow,
    });
  };

  return (
    <>
      <GlobalStyles />

      <animated.div style={{ ...historySprings }}>
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
                      buttonAction={item.buttonAction}
                      text={item.text}
                      answer={item.answer}
                      onNext={onNext}
                      onEnd={onEnd}
                      turnPage={() => setActivePage(key + 1)}
                    />
                  </animated.div>
                )
            )}
          </Page>
        </History>
      </animated.div>

      {end && <Credits />}
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
