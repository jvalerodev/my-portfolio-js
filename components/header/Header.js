import { useState } from 'react';
import Navbar from '@/components/header/Navbar';
import Dropdown from '@/components/header/Dropdown';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header>
      <Navbar open={open} setOpen={setOpen} />
      <Dropdown open={open} />
    </header>
  );
};

export default Header;