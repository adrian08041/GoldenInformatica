import { Button } from "../button";
import { ContainerStyled } from "../container/styles";


import {
  Agende,
  ContainerImagem2,
  SubTitle4,
  TitleSection4,
  WrapperButton,
} from "./styles";

export function Section4() {
  return (
    <ContainerImagem2>
      <ContainerStyled>
        <TitleSection4>
          Uma gama completa de serviços para garantir que seu equipamento
          funcione com a máxima eficiência.
        </TitleSection4>
        <SubTitle4>
          Conheça nossos serviços e descubra como podemos ajudar você a obter o
          melhor desempenho do seu equipamento.
        </SubTitle4>
        <Agende>Agende sua consulta gratuita agora mesmo!</Agende>
        <WrapperButton>
          <Button color="white" texto="(34) 98430-4587" />
          <Button color="white" texto="(34) 98430-4587" />
        </WrapperButton>
      </ContainerStyled>
    </ContainerImagem2>
  );
}
