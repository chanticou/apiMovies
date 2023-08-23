import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AllgenresMap } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FilterMoviesGenre } from "../../redux/actions/index";
import { useEffect } from "react";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { allGenres, filterMovies } = useSelector((state) => state);

  useEffect(() => {
    !allGenres.length && dispatch(AllgenresMap());
  }, []);

  return (
    <Navbar bg="dark" expand="md" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="All genres" id="basic-nav-dropdown">
              {allGenres?.map((el) => (
                <NavDropdown.Item
                  href="#action/3.1"
                  key={el} // Agrega una clave única
                  onClick={() => dispatch(FilterMoviesGenre(el, filterMovies))}
                >
                  {el}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
