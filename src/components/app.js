import { useState } from 'react';
import styled from 'styled-components';
import { GlobalStyles } from './global-styles';
import { Page } from './page';
import { scenary } from '../scenary';
import bgImage from '../image.jpeg';

export const App = () => {
  const [activePage, setActivePage] = useState(0);
  const onNext = (pageNumber) => {
    setActivePage(pageNumber);
  };

  return (
    <>
      <GlobalStyles />
      <History>
        {scenary.pages.map(
          (item, key) =>
            activePage === key && (
              <Page
                key={key}
                active={activePage === key}
                buttonLabel={item.buttonLabel}
                turnPage={() => setActivePage(key + 1)}
                text={item.text}
                answer={item.answer}
                onNext={onNext}
              />
            )
        )}
      </History>
    </>
  );
};

const History = styled.div`
  margin: 0 auto;
  min-width: 320px;
  max-width: 680px;
  min-height: 800px;
  padding: 40px 20px;
  background-image: url(${bgImage});
  background-size: cover;
`;
