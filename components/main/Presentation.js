import Typewriter from 'typewriter-effect';

const Presentation = () => {
  return (
    <div className="md:flex justify-between items-center mt-36">
      <div className="md:w-1/2">
        <p className="text-2xl text-green-500 font-bold uppercase">Hi there,</p>

        <div className="lg:flex text-4xl sm:text-5xl font-black mt-5 lg:space-x-3">
          <p className="whitespace-nowrap">I am</p>
          <Typewriter
            options={{
              strings: ['Jesús Valero. ', 'Web Developer. '],
              autoStart: true,
              loop: true,
              pauseFor: 3000,
              wrapperClassName: 'type-text'
            }}
          />
        </div>

        <p className="mt-5 font-light">I am a web developer in constant growth. I like to learn new things and develop using modern technologies.</p>
        
        <button className="bg-green-500 hover:bg-green-600 transition ease-in-out delay-100 hover:scale-110 duration-200 py-2 px-8 rounded-full mt-5">Hire Me</button>
      </div>

      <div className="md:w-1/2 mx-auto">
        <img src="/img/person.png" alt="Jesús Valero" />
      </div>
    </div>
  );
};

export default Presentation;