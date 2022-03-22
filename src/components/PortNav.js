import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const PortNav = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav>
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">About Me</Nav.Link>
                    <Nav.Link href="#pricing">Projects</Nav.Link>
                    <Nav.Link href="#pricing">GitHub</Nav.Link>
                    <Nav.Link href="#pricing">LinkedIn</Nav.Link>
                </Nav>
            </Navbar>
            <DiGithubBadge />
        </>
    )
}

export default PortNav;