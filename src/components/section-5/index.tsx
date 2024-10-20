import { Accordion } from "../accordion";
import { ContainerStyled } from "../container/styles";

import {
  ContainerFaq,
  
  ContainerList,
  
  ContainerList2,
  
  Titulo5,
  WrapperAccordion,
} from "./styles";



export function Section5() {
  

  return (
    <ContainerStyled>
      <ContainerFaq>
        <Titulo5>Perguntas Frequentes (FAQ) </Titulo5>
        <WrapperAccordion>
          <ContainerList2>
            <Accordion />
            <Accordion />
            <Accordion />
          </ContainerList2>
          <ContainerList>
            <Accordion />
            <Accordion />
            <Accordion />
          </ContainerList>
        </WrapperAccordion>
      </ContainerFaq>
    </ContainerStyled>
  );
}
