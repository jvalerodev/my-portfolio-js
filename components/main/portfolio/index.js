import Image from 'next/image';
import styled from 'styled-components';
import { FaRegEye, FaCode } from 'react-icons/fa';
import useObserver from '@/hooks/useObserver';
import projects from './projects';

const Container = styled.div`
  position: relative;
  display: block;
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
  border-radius: 0.375rem;

  &:hover {
    opacity: 1;
  }
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

      <div className="bg-black grid sm:grid-cols-2 lg:grid-cols-3 gap-y-9 gap-x-9 items-center mt-12 p-2">

        {projects.map((project, i) => (
          <Container key={`project-${i}`}>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width="1920px"
              height="1000px"
              layout="responsive"
              placeholder="blur"
              blurDataURL={project.image.src}
              className="rounded-md"
            />

            <Info>
              <Content>
                <h3 className="font-bold text-lg mb-3 text-center">{project.name}</h3>
                <div className="flex justify-center items-center space-x-8">
                  <a href={project.viewUrl} target="_blank" rel="noreferrer" aria-label={project.viewLabel}>
                    <FaRegEye className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                  </a>
                  <a href={project.codeUrl} target="_blank" rel="noreferrer" aria-label={project.codeLabel}>
                    <FaCode className="text-4xl p-2 bg-white text-green-500 rounded-full cursor-pointer" />
                  </a>
                </div>
              </Content>
            </Info>
          </Container>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;