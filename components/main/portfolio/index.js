import styled from 'styled-components';
import { FaRegEye, FaCode } from 'react-icons/fa';
import useObserver from '@/hooks/useObserver';

const Container = styled.div`
  position: relative;

  &:hover .overlay {
    opacity: 1;
  }
`;

const Info = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgb(34, 197, 94);
  overflow: hidden;
  width: 100%;
  height: 100%;
  transition: 0.5s ease-in-out;
  opacity: 0;
  border-radius: 0.25rem;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Portfolio = () => {
  const { ref } = useObserver();

  return (
    <div id="portfolio" className="pt-36" ref={ref}>
      <h2 className="text-4xl text-center font-bold uppercase bg-black">My <span className="text-green-500">Portfolio</span></h2>
      <div className="bg-black grid sm:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8 items-center mt-12 p-2">
        <Container>
          <img src="/img/portfolio.png" alt="Portfolio" className="rounded" />
          <Info className="overlay">
            <Content>
              <h4 className="font-bold text-lg mb-3 text-center">My Portfolio</h4>
              <div className="flex justify-center items-center space-x-8">
                <a href="/" target="_blank" rel="noreferrer">
                  <FaRegEye className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                </a>
                <a href="https://github.com/valerojesus/my-portfolio/" target="_blank" rel="noreferrer">
                  <FaCode className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                </a>
              </div>
            </Content>
          </Info>
        </Container>
        <Container>
          <img src="/img/apv.png" alt="APV" className="rounded" />
          <Info className="overlay">
            <Content>
              <h4 className="font-bold text-lg mb-3 text-center">APV</h4>
              <div className="flex justify-center items-center space-x-8">
                <a href="https://veterinarymanager.netlify.app/" target="_blank" rel="noreferrer">
                  <FaRegEye className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                </a>
                <a href="https://github.com/valerojesus/APV-frontend/" target="_blank" rel="noreferrer">
                  <FaCode className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                </a>
              </div>
            </Content>
          </Info>
        </Container>
        <Container>
          <img src="/img/nodesend.png" alt="Node Send" className="rounded" />
          <Info className="overlay">
            <Content>
              <h4 className="font-bold text-lg mb-3 text-center">Node Send</h4>
              <div className="flex justify-center items-center space-x-8">
                <a href="http://nodesend-frontend-two.vercel.app/" target="_blank" rel="noreferrer">
                  <FaRegEye className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                </a>
                <a href="https://github.com/valerojesus/nodesend-frontend/" target="_blank" rel="noreferrer">
                  <FaCode className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                </a>
              </div>
            </Content>
          </Info>
        </Container>
      </div>
    </div>
  );
};

export default Portfolio;