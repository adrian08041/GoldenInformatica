import { Accordion } from "../accordion";
import { ContainerStyled } from "../container/styles";

import {
  ContainerFaq,
  ListContainer1,
  ListContainer2,
  Lists,
  Titulo5,
  WrapperAccordion,
} from "./styles";



export function Section5() {
  

  return (
    <ContainerStyled>
      <ContainerFaq>
        <Titulo5>Perguntas Frequentes (FAQ) </Titulo5>
        <WrapperAccordion>
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
        </WrapperAccordion>
      </ContainerFaq>
    </ContainerStyled>
  );
}
