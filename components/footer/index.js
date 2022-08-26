import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="pt-40">
      <div className="flex justify-evenly items-center bg-black sm:text-4xl text-3xl p-2">
        <a href="https://www.facebook.com/jvalerodev" target="_blank" rel="noreferrer">
          <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
            <FaFacebook />
          </div>
        </a>
        <a href="https://www.instagram.com/_jvalero" target="_blank" rel="noreferrer">
          <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
            <FaInstagram />
          </div>
        </a>
        <a href="https://www.linkedin.com/in/jesusvalerog" target="_blank" rel="noreferrer">
          <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
            <FaLinkedinIn />
          </div>
        </a>
        <a href="https://github.com/jvalerodev" target="_blank" rel="noreferrer">
          <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
            <FaGithub />
          </div>
        </a>
      </div>
      <div className="bg-black p-3 mt-40 text-center sm:text-base text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} Jesús Valero | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;