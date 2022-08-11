import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-72">
      <div className="flex justify-evenly items-center bg-black sm:text-3xl text-2xl p-2">
        <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
          <FaFacebook />
        </div>
        <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
          <FaInstagram />
        </div>
        <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
          <FaLinkedinIn />
        </div>
        <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
          <FaGithub />
        </div>
      </div>
      <div className="bg-black p-3 mt-5 text-center sm:text-base text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} Jesús Valero | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;