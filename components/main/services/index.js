import { FaDesktop, FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from 'react-icons/fa';
import { DiJavascript1 } from 'react-icons/di';
import useObserver from '@/hooks/useObserver';

const Services = () => {
  const { ref } = useObserver();

  return (
    <div id="services" className="text-center pt-36" ref={ref}>
      <h2 className="bg-black text-4xl font-bold uppercase">My <span className="text-green-500">Services</span></h2>

      <div className="bg-black grid sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-y-16 gap-x-8 p-2">
        <div className="flex flex-col justify-center items-center border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaDesktop className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">Web Development</p>
          </div>
          <div className="mt-3 px-5">
            <p className="font-light text-base">
              Responsive designs with excellent performance and interactivity.
            </p>
            <p className="font-bold m-3">{new Date().getFullYear() - 2019} years</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <DiJavascript1 className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">JavaScript</p>
          </div>
          <div className="mt-3 px-5">
            <p className="font-light text-base">
              DOM management, data structures, asynchronous processes, integrations with API&apos;s, frameworks and more.
            </p>
            <p className="font-bold m-3">{new Date().getFullYear() - 2019} years</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaReact className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">ReactJS</p>
          </div>
          <div className="mt-3 px-5">
            <p className="font-light text-base">
              Reusable components, React Router DOM, Context API, Redux, Hooks, Props, Styled Components, etc.
            </p>
            <p className="font-bold m-3">{new Date().getFullYear() - 2019} years</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaHtml5 className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">HTML</p>
          </div>
          <div className="mt-3 px-5">
            <p className="font-light text-base">
              Tags, elements, attributes, properties, styles, SEO, scripts, among others.
            </p>
            <p className="font-bold m-3">{new Date().getFullYear() - 2019} years</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaCss3Alt className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">CSS</p>
          </div>
          <div className="mt-3 px-5">
            <p className="font-light text-base">
              Classes, selectors, properties, pseudo elements, specificity, Frameworks: Bootstrap, Tailwind CSS.
            </p>
            <p className="font-bold m-3">{new Date().getFullYear() - 2019} years</p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
          <div className="hover:text-green-500 cursor-pointer">
            <FaNodeJs className="mx-auto text-6xl" />
            <p className="uppercase text-lg font-bold mt-5">NodeJS</p>
          </div>
          <div className="mt-3 px-5">
            <p className="font-light text-base">
              Express, Rest API&apos;s, Protected routes, integration with databases: My SQL, PostgreSQL, MongoDB.
            </p>
            <p className="font-bold m-3">{new Date().getFullYear() - 2020} years</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;