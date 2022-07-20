const Presentation = () => {
  return (
    <div className="md:flex justify-between items-center mt-28">
      <div className="md:w-1/2">
        <p className="text-2xl text-green-500 font-bold uppercase">Hi there,</p>

        <div className="lg:flex text-5xl font-black mt-5 lg:space-x-3">
          <p className="whitespace-nowrap">I am</p>
          <span className="line text-animation text-green-500"></span>
        </div>
        <p className="mt-3 font-light">I am a web developer in constant growth. I like to learn new things and develop using modern technologies.</p>
        <button className="bg-green-500 py-2 px-6 rounded-full mt-5">Hire Me</button>
      </div>

      <div className="md:w-1/2 mx-auto">
        <img src="/img/person.png" alt="Jesús Valero" />
      </div>
    </div>
  );
};

export default Presentation;