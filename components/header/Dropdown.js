import Link from 'next/link';

const Dropdown = ({ open }) => {
  console.log(open);
  return (
    <ul className={open ? "nav-menu active" : "nav-menu"}>
      <li className="nav-item">
        <Link href="#">
          <a className="px-3 transition hover:text-slate-900">Home</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#">
          <a className="px-3 transition hover:text-slate-900">About</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#">
          <a className="px-3 transition hover:text-slate-900">Services</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#">
          <a className="px-3 transition hover:text-slate-900">Portfolio</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#">
          <a className="px-3 transition hover:text-slate-900">Blog</a>
        </Link>
      </li>
      <li className="nav-item">
        <Link href="#">
          <a className="px-3 transition hover:text-slate-900">Contact</a>
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;