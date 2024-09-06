import { Container } from "../container";
import { Header } from "../header";
import { Slogan } from "../slogan";
import { Card } from "../Card";
import { CardContainer, ContainerImage, ContainerImage2 } from "./styles";

export function Section1() {
  return (
    <ContainerImage>
      
        <Container>
          <Header />
          <Slogan />
          <CardContainer>
            <Card
              Title="Atendimento Rápido"
              SubTitle="Experiência e agilidade para consertar e reparar seu computador ou notebook no menor tempo possível."
            />
            <Card
              Title="Garantia de Qualidade"
              SubTitle="Oferecemos garantia em todos os nossos serviços, assegurando a qualidade e a durabilidade dos reparos."
            />
            <Card
              Title="Conveniência e Comodidade"
              SubTitle="Para sua conveniência, buscamos e entregamos seus equipamento o seu endereço, sem custo adicional."
            />
          </CardContainer>
        </Container>
      
    </ContainerImage>
  );
}
