import { FC } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from '../hooks/useTheme';

const Header: FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Navbar fixed='top'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav' className='justify-content-between'>
        <Nav className='ml-auto'>
          <Nav.Link href='#home'>Home</Nav.Link>
          <Nav.Link href='#about'>About</Nav.Link>
          <Nav.Link href='#projects'>Projects</Nav.Link>
        </Nav>
        <Button variant='icon' onClick={toggleTheme}>
          {theme === 'dark' ? <FaMoon size={22} /> : <FaSun size={22} />}
        </Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
