import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function MyNav() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container >
          <Navbar.Brand href="#home">EpiBooks</Navbar.Brand>
          <Navbar.Collapse id="responsive-navbar-nav" className=' me-auto justify-content-center'>

          <Nav>
            <Nav.Link href="#home" className='mx-5'>Home</Nav.Link>
            <Nav.Link href="#features" className='mx-5'>About</Nav.Link>
            <Nav.Link href="#pricing" className='mx-5'>Browse</Nav.Link>
          </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
     
    </>
  );
}

export default MyNav;

