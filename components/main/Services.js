import { FaDesktop, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

const Services = () => {
  return (
    <div id="services" className="bg-black mt-20 text-center p-5">
      <h2 className="text-4xl font-bold uppercase">My <span className="text-green-500">Services</span></h2>

      <div className="grid grid-cols-3 mt-16 gap-y-16 uppercase font-bold">
        <div className="transition ease-in-out hover:text-green-500 hover:scale-110 duration-200 cursor-pointer">
          <FaDesktop className="mx-auto mb-3 text-6xl" />
          <p>Web Development</p>
        </div>
        <div className="transition ease-in-out hover:text-green-500 hover:scale-110 duration-200 cursor-pointer">
          <DiJavascript1 className="mx-auto mb-3 text-6xl" />
          <p>JavaScript</p>
        </div>
        <div className="transition ease-in-out hover:text-green-500 hover:scale-110 duration-200 cursor-pointer">
          <FaReact className="mx-auto mb-3 text-6xl" />
          <p>ReactJS</p>
        </div>
        <div className="transition ease-in-out hover:text-green-500 hover:scale-110 duration-200 cursor-pointer">
          <FaHtml5 className="mx-auto mb-3 text-6xl" />
          <p>HTML</p>
        </div>
        <div className="transition ease-in-out hover:text-green-500 hover:scale-110 duration-200 cursor-pointer">
          <FaCss3Alt className="mx-auto mb-3 text-6xl" />
          <p>CSS</p>
        </div>
        <div className="transition ease-in-out hover:text-green-500 hover:scale-110 duration-200 cursor-pointer">
          <FaNodeJs className="mx-auto mb-3 text-6xl" />
          <p>NodeJS</p>
        </div>
      </div>
    </div>
  );
};

export default Services;