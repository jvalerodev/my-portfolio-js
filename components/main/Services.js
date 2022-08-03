import { FaDesktop, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';

const Services = () => {
  return (
    <div id="services" className="text-center pt-36">
      <h2 className="bg-black text-4xl font-bold uppercase">My <span className="text-green-500">Services</span></h2>

      <div className="bg-black grid sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-y-16 gap-x-8 p-2">
        <div className="border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaDesktop className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">Web Development</p>
          </div>
          <div>
            <p className="font-light text-base mt-3 px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error iste qui ullam blanditiis, repellat quam corporis, corrupti et
              ab eum voluptas!
            </p>
          </div>
        </div>

        <div className="border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <DiJavascript1 className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">JavaScript</p>
          </div>
          <div>
            <p className="font-light text-base mt-3 px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error iste qui ullam blanditiis, repellat quam corporis, corrupti et
              ab eum voluptas!
            </p>
          </div>
        </div>

        <div className="border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaReact className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">ReactJS</p>
          </div>
          <div>
            <p className="font-light text-base mt-3 px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error iste qui ullam blanditiis, repellat quam corporis, corrupti et
              ab eum voluptas!
            </p>
          </div>
        </div>

        <div className="border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaHtml5 className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">HTML</p>
          </div>
          <div>
            <p className="font-light text-base mt-3 px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error iste qui ullam blanditiis, repellat quam corporis, corrupti et
              ab eum voluptas!
            </p>
          </div>
        </div>

        <div className="border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaCss3Alt className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">CSS</p>
          </div>
          <div>
            <p className="font-light text-base mt-3 px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error iste qui ullam blanditiis, repellat quam corporis, corrupti et
              ab eum voluptas!
            </p>
          </div>
        </div>

        <div className="border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaNodeJs className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">NodeJS</p>
          </div>
          <div>
            <p className="font-light text-base mt-3 px-5">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error iste qui ullam blanditiis, repellat quam corporis, corrupti et
              ab eum voluptas!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;