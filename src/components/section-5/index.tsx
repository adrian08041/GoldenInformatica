import { Accordion } from "../accordion";
import { ContainerStyled } from "../container/styles";

import {
  ContainerFaq,
  
 
  
  ContainerList,
  
 
  
  Titulo5,
  WrapperAccordion,
  WrapperTitulo,
} from "./styles";



export function Section5() {
  

  return (
    <ContainerStyled>
      <WrapperTitulo>
        <Titulo5>Perguntas Frequentes (FAQ) </Titulo5>
      </WrapperTitulo>
      <ContainerFaq>
        <WrapperAccordion>
          <ContainerList>
            <Accordion
              titulo="Quais tipos de produtos vocês vendem?"
              conteudo="Vendemos computadores, laptops, componentes de hardware, periféricos, software, e acessórios de informática."
            />
            <Accordion
              titulo="Vocês oferecem garantia nos produtos?"
              conteudo="Sim, todos os nossos produtos novos vêm com garantia do fabricante. Para produtos usados, oferecemos uma garantia limitada."
            />
            <Accordion
              titulo="Vocês oferecem assistência técnica?"
              conteudo="Sim, temos assistência técnica disponível para resolução de problemas e suporte a produtos adquiridos."
            />
          </ContainerList>
          <ContainerList>
            <Accordion
              titulo="Posso devolver um produto se não ficar satisfeito?"
              conteudo="Sim, aceitamos devoluções em até 7 dias após a compra, desde que o produto esteja em sua embalagem original e sem sinais de uso."
            />
            <Accordion
              titulo="Vocês fazem instalação de software?"
              conteudo="Sim, oferecemos serviços de instalação de software e configuração de equipamentos na loja ou no local."
            />
            <Accordion
              titulo="Posso testar um produto na loja antes de comprar?"
              conteudo="Sim, incentivamos que os clientes testem os produtos na loja, especialmente periféricos como teclados, mouses e monitores."
            />
          </ContainerList>
        </WrapperAccordion>
      </ContainerFaq>
    </ContainerStyled>
  );
}
