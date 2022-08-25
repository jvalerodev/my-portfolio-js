import styled, { css } from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Circles = styled.div`
  width: 80px;
  height: 80px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @-webkit-keyframes sk-bounce {
    0%, 100% {
      -webkit-transform: scale(0.0)
    }

    50% {
      -webkit-transform: scale(1.0)
    }
  }

  @keyframes sk-bounce {
    0%, 100% { 
      transform: scale(0.0);
      -webkit-transform: scale(0.0);
    }
    50% { 
      transform: scale(1.0);
      -webkit-transform: scale(1.0);
    }
  }
`;

const sharedStyle = css`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: rgb(34, 197, 94);
  opacity: 0.7;
  position: absolute;
  top: 0;
  left: 0;
  -webkit-animation: sk-bounce 2.0s infinite ease-in-out;
  animation: sk-bounce 2.0s infinite ease-in-out;
`;

const Bounce1 = styled.div`
  ${sharedStyle}
`;

const Bounce2 = styled.div`
  ${sharedStyle}
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
`;

const Spinner = () => {
  return (
    <Container>
      <Circles>
        <Bounce1 />
        <Bounce2 />
      </Circles>
    </Container>
  );
};

export default Spinner;