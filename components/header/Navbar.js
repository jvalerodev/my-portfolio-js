import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import useVisibility from '@/hooks/useVisibility';

const Navbar = ({ open, setOpen }) => {
  const { visibleEntry } = useVisibility();

  return (
    <nav className="flex justify-between items-center">
      <div className="w-1/3 hover:opacity-90">
        <h1>
          <Link href="/">
            <a className="text-5xl font-black">J<span className="text-green-500 uppercase">Valero</span></a>
          </Link>
        </h1>
      </div>

      <div className="w-2/3 hidden lg:flex justify-evenly space-x-5 text-sm uppercase">
        <Link href="/#home">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#home' && 'bg-green-500'}`}>Home</a>
        </Link>
        <Link href="/#about">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#about' && 'bg-green-500'}`}>About</a>
        </Link>
        <Link href="/#services">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#services' && 'bg-green-500'}`}>Services</a>
        </Link>
        <Link href="/#portfolio">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#portfolio' && 'bg-green-500'}`}>Portfolio</a>
        </Link>
        <Link href="/#contact">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#contact' && 'bg-green-500'}`}>Contact</a>
        </Link>
      </div>

      <div className="lg:hidden text-3xl cursor-pointer transition hover:text-green-400" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;