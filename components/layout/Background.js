import styled from 'styled-components';
import { Stars1, Stars2, Stars3 } from './styled-background/Stars';

const StarsContainer = styled.div`
  position: absolute;
  z-index: -1;
`;

const Background = ({ children }) => {
  return (
    <>
      <StarsContainer>
        <Stars1 />
        <Stars2 />
        <Stars3 />
      </StarsContainer>
      {children}
    </>
  );
};

export default Background;