import {
  BoddyAccordion,
  ButtonAccordion,
  ContainerAccordion,
  ConteudoAccordion,
  MdKeyboardArrowDownStyle,
  SpanButton,

} from "./styles";
import { useState } from "react";

type Props = {
  titulo: string;
  conteudo: string;
};

export function Accordion(props: Props) {
  const [open, setOpen] = useState(false);
  console.log(open);

  return (
    <ContainerAccordion $open={open}>
      <ButtonAccordion onClick={() => setOpen(!open)}>
        <SpanButton $open={open}>{props.titulo}</SpanButton>
        <MdKeyboardArrowDownStyle $open={open} />
      </ButtonAccordion>
      <BoddyAccordion $open={open}>
        <ConteudoAccordion>{props.conteudo}</ConteudoAccordion>
      </BoddyAccordion>
    </ContainerAccordion>
  );
}
