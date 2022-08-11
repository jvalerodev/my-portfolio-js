import { IoLocationSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { FaPhoneAlt } from 'react-icons/fa';
import useObserver from '@/hooks/useObserver';

const Contact = () => {
  const { ref } = useObserver();

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <div id="contact" className="pt-36" ref={ref}>
      <h2 className="text-4xl text-center font-bold uppercase bg-black">Contact <span className="text-green-500">Me</span></h2>
      <div className="bg-black mt-12 p-2 md:grid grid-cols-2 gap-x-10">
        <form onSubmit={handleSubmit}>
          <div className="space-y-5">
            <input
              type="text"
              placeholder="Name"
              className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
            />
            <div className="lg:flex lg:space-x-3 space-y-5 lg:space-y-0">
              <div className="lg:w-1/2">
                <input
                  type="email"
                  placeholder="Email"
                  className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
                />
              </div>
              <div className="lg:w-1/2">
                <input
                  type="text"
                  placeholder="Subject"
                  className="bg-transparent px-3 py-2 w-full outline-none border border-white transition focus:border-green-500"
                />
              </div>
            </div>
            <textarea placeholder="Your message..." className="bg-transparent px-3 py-2 w-full h-36 resize-none outline-none border border-white transition focus:border-green-500"></textarea>
            <div className="text-center">
              <button type="submit" className="bg-green-500 hover:bg-green-600 rounded-full py-2 px-4">Send Message</button>
            </div>
          </div>
        </form>

        <div className="mt-10 md:mt-0">
          <div className="border border-white p-8 space-y-8">
            <h4 className="font-black uppercase">Contact Address</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <IoLocationSharp className="bg-green-500 text-4xl p-2 rounded-full" />
                <p className="font-light">Mérida, Venezuela</p>
              </div>
              <div className="flex items-center space-x-4">
                <MdEmail className="bg-green-500 text-4xl p-2 rounded-full" />
                <p className="font-light">valerojesusg@gmail.com</p>
              </div>
              <div className="flex items-center space-x-4">
                <FaPhoneAlt className="bg-green-500 text-4xl p-2 rounded-full" />
                <p className="font-light">+ (58) 412 765 4801</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;