import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Navi() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Pokedex">Pokedex</Nav.Link>
            <Nav.Link href="/Pokemon">PokeListe</Nav.Link>
            <Nav.Link href="/AddPokemon">Addpoke</Nav.Link>
            <Nav.Link href="/DeletePokemon">delpoke</Nav.Link>
            <Nav.Link href="/UpdatePokemon">Uppoke</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navi;
