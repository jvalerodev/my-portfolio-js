import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import useObserver from '@/hooks/useObserver';

const Presentation = () => {
  const { ref } = useObserver();

  return (
    <div id="home" className="md:flex justify-between items-center pt-36" ref={ref}>
      <div className="md:w-1/2">
        <p className="text-2xl text-green-500 font-bold uppercase">Hi there,</p>

        <div className="lg:flex text-5xl font-black mt-5 lg:space-x-3">
          <p className="whitespace-nowrap">I am</p>
          <Typewriter
            options={{
              strings: ['Jesús Valero. ', 'Web Developer. '],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
              wrapperClassName: 'text-green-500'
            }}
          />
        </div>

        <p className="mt-5 font-light">I am a web developer in constant growth. I like to learn new things and develop using modern technologies.</p>

        <Link href="/#contact">
          <a className="bg-green-500 hover:bg-green-600 transition ease-in-out delay-100 hover:scale-110 duration-200 py-2 px-8 rounded-full mt-5 inline-block">Hire Me</a>
        </Link>
      </div>

      <div className="flex justify-center">
        <img src="/img/person.png" alt="Jesús Valero" />
      </div>
    </div>
  );
};

export default Presentation;