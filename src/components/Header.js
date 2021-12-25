import { Navbar } from 'react-bootstrap';

function Header() {
  return (
    <Navbar
      fixed='top'
      className='p-3 shadow p-3 mb-5 bg-white rounded'
      style={{ height: '15vh' }}
    >
      <h4>Weather forecast UI Design</h4>
    </Navbar>
  );
}

export default Header;
