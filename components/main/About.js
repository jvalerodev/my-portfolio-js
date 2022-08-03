const About = () => {
  return (
    <div id="about" className="pt-36">
      <div className="lg:flex lg:space-x-14 items-center bg-black">
        <div className="lg:w-1/2">
          <img src="/img/web-developer.jpg" alt="Web developer" className="w-full border-4 border-green-500 p-2" />
        </div>
        <div className="lg:w-1/2 leading-7 mt-10 lg:mt-0">
          <h3 className="text-3xl font-bold text-center">Hello, I am <span className="text-green-500">Web Developer</span></h3>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus assumenda, repellendus animi placeat suscipit, mollitia eveniet nesciunt
            sint totam laudantium tempora veritatis nobis libero, numquam cumque esse vel qui fuga.
          </p>
          <ul className="mt-5">
            <li>
              <span className="font-bold inline-block">Name:</span>
              <span className="ml-12 text-white">Jesús Valero</span>
            </li>
            <li>
              <span className="font-bold inline-block">Age:</span>
              <span className="ml-16 text-white">{Math.floor((new Date() - new Date('02/17/2000')) / (1000 * 60 * 60 * 24 * 365))}</span>
            </li>
            <li>
              <span className="font-bold inline-block">Address:</span>
              <span className="ml-8 text-white">Mérida, Venezuela</span>
            </li>
            <li>
              <span className="font-bold inline-block">Phone:</span>
              <span className="ml-12 text-white">+ (58) 412 765 4801</span>
            </li>
            <li>
              <span className="font-bold inline-block">E-mail:</span>
              <span className="ml-12 text-white">valerojesusg@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;