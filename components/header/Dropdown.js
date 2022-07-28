import Link from 'next/link';

const Dropdown = ({ open }) => {
  return (
    <nav className={open ? "nav-menu active" : "nav-menu"}>
      <Link href="#">
        <a className="nav-item hover:text-black px-3 transition">Home</a>
      </Link>
      <Link href="#">
        <a className="nav-item hover:text-black px-3 transition">About</a>
      </Link>
      <Link href="#">
        <a className="nav-item hover:text-black px-3 transition">Services</a>
      </Link>
      <Link href="#">
        <a className="nav-item hover:text-black px-3 transition">Portfolio</a>
      </Link>
      <Link href="#">
        <a className="nav-item hover:text-black px-3 transition">Blog</a>
      </Link>
      <Link href="#">
        <a className="nav-item hover:text-black px-3 transition">Contact</a>
      </Link>
    </nav>
  );
};

export default Dropdown;