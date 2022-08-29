import { FaFacebook, FaInstagram, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const networks = [
  { url: 'https://www.facebook.com/jvalerodev', label: 'Facebook', icon: FaFacebook },
  { url: 'https://www.instagram.com/_jvalero', label: 'Instagram', icon: FaInstagram },
  { url: 'https://www.linkedin.com/in/jesusvalerog', label: 'LinkedIn', icon: FaLinkedinIn },
  { url: 'https://github.com/jvalerodev', label: 'Github', icon: FaGithub }
];

const Footer = () => {
  return (
    <footer className="pt-40">
      <div className="flex justify-evenly items-center bg-black sm:text-4xl text-3xl p-2">
        {networks.map((network, i) => (
          <a key={`network-${i}`} href={network.url} target="_blank" rel="noreferrer" aria-label={network.label}>
            <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
              <network.icon />
            </div>
          </a>
        ))}
      </div>
      <div className="bg-black p-3 mt-40 text-center sm:text-base text-sm">
        <p>Copyright &copy; {new Date().getFullYear()} Jesús Valero | All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;