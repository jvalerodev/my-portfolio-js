import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import useVisibility from '@/hooks/useVisibility';

const Navbar = ({ open, setOpen }) => {
  const { visibleEntry } = useVisibility();

  return (
    <nav className="flex justify-between items-center">
      <div className="hidden lg:flex justify-center space-x-5 text-sm uppercase">
        <Link href="/#home">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#home' && 'bg-green-500'}`}>Home</a>
        </Link>
        <Link href="/#about">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#about' && 'bg-green-500'}`}>About</a>
        </Link>
        <Link href="/#services">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#services' && 'bg-green-500'}`}>Services</a>
        </Link>
      </div>

      <div className="text-center hover:opacity-90">
        <Link href="/">
          <a className="text-5xl font-black">J<span className="text-green-500 uppercase">Valero</span></a>
        </Link>
      </div>

      <div className="hidden lg:flex justify-center space-x-5 text-sm uppercase">
        <Link href="/#portfolio">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#portfolio' && 'bg-green-500'}`}>Portfolio</a>
        </Link>
        <Link href="/#blog">
          <a className={`py-2 px-3 transition hover:bg-green-500 font-bold rounded ${visibleEntry === '#blog' && 'bg-green-500'}`}>Blog</a>
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