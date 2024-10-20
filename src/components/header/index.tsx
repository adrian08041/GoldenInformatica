import { Button } from "../button";
import { Container, Logo, Menu, WrapperMenu } from "./styles";
import {
  Link,
  DirectLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";

export function Header() {
  return (
    <Container>
      <Logo src="/assets/logo.png" alt="Logo da empresa" />
      <WrapperMenu>
        <Menu>
          <li className="nav-item">
            <Link to="Sobre nós" smooth={true} duration={500} />
            Sobre nós
          </li>
          <li className="nav-item">Nossos Serviços</li>
          <li className="nav-item">Duvidas</li>
          <li className="nav-item">Contato</li>
        </Menu>

        {/* <Menu>Sobre nós</Menu>
        <Menu>Nossos Serviços</Menu>
        <Menu>Duvidas</Menu>
        <Menu>Contato</Menu> */}
      </WrapperMenu>

      <Button color="white" texto="Orçamento online!" />
    </Container>
  );
}
