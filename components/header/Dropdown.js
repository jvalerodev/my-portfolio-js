import styled from 'styled-components';
import Link from 'next/link';

const NavMenu = styled.nav`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 100%;
  position: absolute;
  top: 90px;
  left: -200%;
  opacity: 1;
  transition: all 0.5s ease-in-out;
  font-size: 0.875rem;
  line-height: 1.25rem;
  text-transform: uppercase;
  padding: 1rem 0;
  row-gap: 10px;
  

  ${({ active }) => active && `
    @media (max-width: 1023px) {
      background: rgb(34, 197, 94);
      left: 0;
      opacity: 1;
      transition: all 0.5s ease-in-out;
      z-index: 1;
    }
  `}
`;

const NavItem = styled.a`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  padding: 5px;
  font-weight: bold;
`;

const Dropdown = ({ open }) => {
  return (
    <NavMenu active={open}>
      <Link href="#home">
        <NavItem className="nav-item hover:text-black px-3 transition cursor-pointer">Home</NavItem>
      </Link>
      <Link href="#about">
        <NavItem className="nav-item hover:text-black px-3 transition cursor-pointer">About</NavItem>
      </Link>
      <Link href="#services">
        <NavItem className="nav-item hover:text-black px-3 transition cursor-pointer">Services</NavItem>
      </Link>
      <Link href="#portfolio">
        <NavItem className="nav-item hover:text-black px-3 transition cursor-pointer">Portfolio</NavItem>
      </Link>
      <Link href="#blog">
        <NavItem className="nav-item hover:text-black px-3 transition cursor-pointer">Blog</NavItem>
      </Link>
      <Link href="#">
        <NavItem className="nav-item hover:text-black px-3 transition cursor-pointer">Contact</NavItem>
      </Link>
    </NavMenu>
  );
};

export default Dropdown;