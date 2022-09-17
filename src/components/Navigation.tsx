import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import LocaleContext from "../LocaleContext"
import {useContext} from "react"
import i18n from '../i18n';

function Navigation () {
  const { locale } = useContext(LocaleContext);

  const { t } = useTranslation();

  function changeLocale (l: string) {
    if (locale !== l) {
      i18n.changeLanguage(l);
    }
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Language preferences</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title={t('language')} id="basic-nav-dropdown">
              <NavDropdown.Item href="#" onClick={() => changeLocale('en')}>English</NavDropdown.Item>
              <NavDropdown.Item href="#" onClick={() => changeLocale('ar')}>العربية</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
