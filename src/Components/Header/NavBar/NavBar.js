import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function NavBar(){
    return <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="/">MapoDeveloper</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link href="/list">List</Nav.Link>
            <NavDropdown title="Categorie" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#">ToDo</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            <Nav.Link eventKey={2} href="/login">
                Log-in
            </Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
}

export default NavBar