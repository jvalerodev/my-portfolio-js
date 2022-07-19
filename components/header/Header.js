import { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';
import Dropdown from '@/components/header/Dropdown';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <nav className="flex justify-between items-center py-5">
        <div className="hidden lg:flex justify-center space-x-5 text-sm uppercase">
          <Link href="#"><a className="px-3 transition hover:text-green-400">Home</a></Link>
          <Link href="#"><a className="px-3 transition hover:text-green-400">About</a></Link>
          <Link href="#"><a className="px-3 transition hover:text-green-400">Services</a></Link>
        </div>

        <div className="text-center">
          <Link href="/">
            <a className="text-5xl font-black">J<span className="text-green-500 uppercase">Valero</span></a>
          </Link>
        </div>

        <div className="hidden lg:flex justify-center space-x-5 text-sm uppercase">
          <Link href="#"><a className="px-3 transition hover:text-green-400">Portfolio</a></Link>
          <Link href="#"><a className="px-3 transition hover:text-green-400">Blog</a></Link>
          <Link href="#"><a className="px-3 transition hover:text-green-400">Contact</a></Link>
        </div>

        <div className="lg:hidden text-3xl cursor-pointer text-center transition hover:text-green-400" onClick={() => setOpen(!open)}>
          {open ? <FaTimes /> : <FaBars />}
        </div>
      </nav>

      <Dropdown open={open} />
    </header>
  );
};

export default Header;