import { Navbar, Nav, Container } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <Navbar bg="danger" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">
          Cafe Branch
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className="nav-item nav-link">
              Inicio
            </NavLink>
            <NavLink to="/administrador" className="nav-item nav-link">
              Administrar
            </NavLink>
            <NavLink to="/login" className="nav-item nav-link">
              Login
            </NavLink>
            <NavLink to="/registro" className="nav-item nav-link">
              Registro
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
