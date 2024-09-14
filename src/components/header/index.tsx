import { Button } from "../button";
import { Container, Logo, Menu, WrapperHeader, WrapperMenu } from "./styles";

export function Header() {
  return (
    <Container>
      <Logo src="/assets/logo.png" alt="Logo da empresa" />
      <WrapperMenu>
        <Menu>Sobre nós</Menu>
        <Menu>Nossos Serviços</Menu>
        <Menu>Duvidas</Menu>
        <Menu>Contato</Menu>
      </WrapperMenu>

      <Button color="white" texto="Orçamento online!" />
    </Container>
  );
}
