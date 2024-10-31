

import { Button } from "../button";
import { Container, Title1, Title2, WrapperButton, WrapperText } from "./styles";

export function Slogan() {
  return (
    <Container>
      <WrapperText>
        <Title1>Conserto e reparo de computadores e notebooks</Title1>
        <Title2>
          Desempenho superior e confiabilidade garantida para seus dispositivos
        </Title2>
        <Title1>
          Devolva a vida ao seu computador ou notebook com nossos serviços de
          conserto e reparo de alta qualidade
        </Title1>
      </WrapperText>
      <WrapperButton>
        <Button
          color="white"
          texto="Orçamento online!"
          link="https://api.whatsapp.com/send/?phone=5592995175830&text&type=phone_number&app_absent=0"
        />
      </WrapperButton>
    </Container>
  );
}
