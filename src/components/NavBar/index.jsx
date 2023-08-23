import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { AllgenresMap } from "../../redux/actions/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { FilterMoviesGenre, GetAllMovies } from "../../redux/actions/index";
import { useEffect } from "react";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { allGenres, filterMovies, allMovies } = useSelector((state) => state);

  useEffect(() => {
    !allGenres.length && dispatch(AllgenresMap());
  }, []);

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">MOVIES</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            {/* <Nav.Link href="#home">Home</Nav.Link> */}
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="All genres" id="basic-nav-dropdown">
              {allGenres?.map((el) => {
                return (
                  <NavDropdown.Item
                    href="#action/3.1"
                    onClick={(e) =>
                      dispatch(FilterMoviesGenre(el, filterMovies, allMovies))
                    }
                  >
                    {el}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
