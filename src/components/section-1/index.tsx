import { Container } from "../container";
import { Header } from "../header";
import { Slogan } from "../slogan";
import { Card } from "../card";
import { CardContainer, ContainerImage } from "./styles";
import {
  MdHeadsetMic,
  MdLocalShipping,
  MdMobileFriendly,
} from "react-icons/md";
import { ContainerStyled } from "../container/styles";

export function Section1() {
  return (
    <ContainerImage>
      <ContainerStyled>
        <Header />
        <Container>
          <Slogan />
          <CardContainer>
            <Card
              Icon={<MdHeadsetMic />}
              Title="Atendimento Rápido"
              SubTitle="Experiência e agilidade para consertar e reparar seu computador ou notebook no menor tempo possível."
            />
            <Card
              Icon={<MdMobileFriendly />}
              Title="Garantia de Qualidade"
              SubTitle="Oferecemos garantia em todos os nossos serviços, assegurando a qualidade e a durabilidade dos reparos."
            />
            <Card
              Icon={<MdLocalShipping />}
              Title="Conveniência"
              SubTitle="Para sua conveniência, buscamos e entregamos seus equipamento o seu endereço, sem custo adicional."
            />
          </CardContainer>
        </Container>
      </ContainerStyled>
    </ContainerImage>
  );
}
