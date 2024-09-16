import { MdKeyboardArrowDown } from "react-icons/md";
import {
  BoddyAccordion,
  ButtonAccordion,
  ContainerAccordion,
  ConteudoAccordion,
  MdKeyboardArrowDownStyle,
  SpanButton,
} from "./styles";
import { useState } from "react";

export function Accordion() {
  const [open, setOpen] = useState(false);
  console.log(open);
  return (
    <ContainerAccordion $open={open}>
      <ButtonAccordion onClick={() => setOpen(!open)}>
        <SpanButton $open={open}>
          Qual prazo para consertar um computador ou notebook?
        </SpanButton>
        <MdKeyboardArrowDownStyle $open={open} />
      </ButtonAccordion>
      <BoddyAccordion $open={open}>
        <ConteudoAccordion>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis
          facere explicabo, rem, unde maiores quasi minus culpa velit repellat
          in ea! Ipsam odit doloribus voluptate, ab magni minima fugiat eveniet?
        </ConteudoAccordion>
      </BoddyAccordion>
    </ContainerAccordion>
  );
}
