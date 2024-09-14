import { MdLocationOn, MdOutlineAlternateEmail } from "react-icons/md";
import { Card } from "../Card";
import { Card2 } from "../Card2";
import { ContainerStyled } from "../container/styles";
import { EntreEmContato, SubTitle, Title, WrapperCards, WrapperSection6 } from "./styles";
import { FaWhatsapp } from "react-icons/fa";

export function Section6 () {
    return (
      <ContainerStyled>
        <WrapperSection6>
          <EntreEmContato>ENTRE EM CONTATO CONOSCO</EntreEmContato>
          <Title>
            Escolha a forma de contato <br /> que melhor se adequa a você
          </Title>
          <SubTitle>
            Estamos aqui para ajudar você com qualquer dúvida ou necessidade.
          </SubTitle>
        </WrapperSection6>
        <WrapperCards>
          <Card2
            Icon={<MdLocationOn />}
            Title="LOCAZILAÇÃO"
            SubTitle="R. dos Guaranís, 259 - loja 4 - Nossa Sra. das Gracas, Patos de Minas - MG, 38701-267"
          />

          <Card2 
            Icon={<FaWhatsapp />}
            Title="TELEFONE E WHATSAPP"
            SubTitle="(34) 98430-4587"
          />

          <Card2
            Icon={<MdOutlineAlternateEmail />}
            Title="E-MAIL"
            SubTitle="Teste@gmail.com"
          />
        </WrapperCards>
      </ContainerStyled>
    );
}
