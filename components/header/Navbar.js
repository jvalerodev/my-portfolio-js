import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = ({ open, setOpen }) => {
  return (
    <nav className="flex justify-between items-center my-5">
      <div className="hidden lg:flex justify-center space-x-5 text-sm uppercase">
        <Link href="#home"><a className="py-2 px-3 transition hover:bg-green-500 hover:text-black font-bold rounded">Home</a></Link>
        <Link href="#about"><a className="py-2 px-3 transition hover:bg-green-500 hover:text-black font-bold rounded">About</a></Link>
        <Link href="#services"><a className="py-2 px-3 transition hover:bg-green-500 hover:text-black font-bold rounded">Services</a></Link>
      </div>

      <div className="text-center hover:opacity-90">
        <Link href="/">
          <a className="text-5xl font-black">J<span className="text-green-500 uppercase">Valero</span></a>
        </Link>
      </div>

      <div className="hidden lg:flex justify-center space-x-5 text-sm uppercase">
        <Link href="#portfolio"><a className="py-2 px-3 transition hover:bg-green-500 hover:text-black font-bold rounded">Portfolio</a></Link>
        <Link href="#blog"><a className="py-2 px-3 transition hover:bg-green-500 hover:text-black font-bold rounded">Blog</a></Link>
        <Link href="#"><a className="py-2 px-3 transition hover:bg-green-500 hover:text-black font-bold rounded">Contact</a></Link>
      </div>

      <div className="lg:hidden text-3xl cursor-pointer transition hover:text-green-400" onClick={() => setOpen(!open)}>
        {open ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;