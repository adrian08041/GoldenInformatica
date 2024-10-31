import { Button } from "../button";
import { Container, LinkStyle, Logo, Menu, WrapperMenu } from "./styles";
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
          <LinkStyle
            to="sobre-nos"
            smooth={true}
            duration={800}
            className="nav-item"
          >
            Sobre nós
          </LinkStyle>
          <LinkStyle
            to="nossos-servicos"
            smooth={true}
            duration={850}
            className="nav-item"
          >
            Nossos Serviços
          </LinkStyle>
          <LinkStyle
            to="duvidas"
            smooth={true}
            duration={900}
            className="nav-item"
          >
            Duvidas
          </LinkStyle>
          <LinkStyle
            to="contato"
            smooth={true}
            duration={1000}
            className="nav-item"
          >
            Contato
          </LinkStyle>
        </Menu>

       
      </WrapperMenu>

      <Button
        color="white"
        texto="Orçamento online!"
        link="https://api.whatsapp.com/send/?phone=5592995175830&text&type=phone_number&app_absent=0"
      />
    </Container>
  );
}
