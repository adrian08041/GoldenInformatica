import { Button } from "../button";
import { ContainerStyled } from "../container/styles";
import {
  ContainerImage,
  DescricaoSlogan,
  NameEmpresa,
  Photo,
  TitleSlogan,
  WrapperContainer,
} from "./styles";

export function Section2() {
  return (
   

      <ContainerStyled>
        <WrapperContainer>
          <NameEmpresa>Gold Informática</NameEmpresa>
          <TitleSlogan>
            Nos dedicamos a oferecer serviços de conserto e reparo de
            computadores e notebooks com a mais alta qualidade.
          </TitleSlogan>
          <DescricaoSlogan>
            Na Gold Informática, nos dedicamos a oferecer serviços de
            conserto e reparo de computadores e notebooks com a mais alta
            qualidade. Nossa equipe de profissionais qualificados está preparada
            para lidar com qualquer problema, garantindo que seu dispositivo
            volte coo novo.
          </DescricaoSlogan>
          <DescricaoSlogan>
            Com atendimento rápido e eficiente, coleta e entrega no seu
            endereço, e garantia em todos os os nossos serviços, proporcionamos
            uma experiência de conviniência e confiabilidade. Confie na Golden
            Informática para cuidar do seu equipaento e aproveite a
            tranquilidade de ter especialistas ao seu lado.
          </DescricaoSlogan>
        </WrapperContainer>

        <Button color="white" texto="Orçamento online!" />
        <Photo></Photo>
      </ContainerStyled>
    
  );
}
