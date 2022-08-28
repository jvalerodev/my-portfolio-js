import services from './services';
import useObserver from '@/hooks/useObserver';

const Services = () => {
  const { ref } = useObserver();

  return (
    <div id="services" className="text-center pt-36" ref={ref}>
      <h2 className="bg-black text-4xl font-bold uppercase">My <span className="text-green-500">Services</span></h2>

      <div className="bg-black grid sm:grid-cols-2 lg:grid-cols-3 mt-12 gap-y-9 gap-x-9 p-2">
        {services.map((service, i) => (
          <div key={`service-${i}`} className="flex flex-col justify-center items-center border border-white rounded-md py-5 transition ease-in-out hover:scale-105 duration-200">
            <div className="hover:text-green-500 cursor-pointer">
              <service.icon className="mx-auto text-6xl" />
              <p className="uppercase text-lg font-bold mt-5">{service.name}</p>
            </div>
            <div className="mt-3 px-5">
              <p className="font-light text-base">
                {service.text}
              </p>
              <p className="font-bold m-3">{service.years}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;