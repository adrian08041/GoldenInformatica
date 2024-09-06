import { Button } from "../button";
import { ContainerStyled } from "../container/styles";
import {
  
  DescricaoSlogan,
  NameEmpresa,
  Photo,
  TitleSlogan,
  WrapperButton,
  WrapperContainer,
  WrapperSection2,
} from "./styles";

export function Section2() {
  return (
    <ContainerStyled>
      <WrapperSection2>
        <WrapperContainer>
          <NameEmpresa>Golden Informática</NameEmpresa>
          <TitleSlogan>
            Nos dedicamos a oferecer serviços de conserto e reparo de
            computadores e notebbooks com a mais alta qualidade.
          </TitleSlogan>
          <DescricaoSlogan>
            Na <strong>Golden Iformática</strong>, nos dedicamos a
            oferecer serviços de conserto e reparo de computadores e notebooks
            com a mais alta qualidade. Nossa equipe de profissionais
            qualificados está preparada para lidar com qualquer problema,
            garantindo que seu dispositivo volte coo novo.
          </DescricaoSlogan>
          <DescricaoSlogan>
            Com atendimento rápido e eficiente, coleta e entrega no seu
            endereço, e garantia em todos os os nossos serviços, proporcionamos
            uma experiência de conviniência e confiabilidade. Confie na Golden
            Informática para cuidar do seu equipaento e aproveite a
            tranquilidade de ter especialistas ao seu lado.
          </DescricaoSlogan>
          <WrapperButton>
            <Button color="white" texto="Orçamento online!" />
          </WrapperButton>
        </WrapperContainer>

        <Photo></Photo>
      </WrapperSection2>
    </ContainerStyled>
  );
}
