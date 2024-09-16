import { MdKeyboardArrowDown } from "react-icons/md";
import styled, { css } from "styled-components";

export const ContainerAccordion = styled.div<{ $open: boolean }>`
  ${({ $open }) => css`
  max-width: 70%;
  
  `}
`;

export const ButtonAccordion = styled.button`
  all: unset;
  cursor: pointer;
`;

export const SpanButton = styled.span<{ $open: boolean }>`
  ${({ $open }) => css`
    color: ${$open ? "blue" : "#1f1f1f"};
    transition: color 0.3s;
  `}
`;

export const BoddyAccordion = styled.div<{ $open: boolean }>`
  ${({ $open }) => css`
    max-height: ${$open ? "500px" : "0"};
    opacity: ${$open ? 1 : 0};
    transition: opacity 0.5s ease, max-height 0.5s ease;
    overflow: hidden;
  `}
`;

export const ConteudoAccordion = styled.p``;

export const MdKeyboardArrowDownStyle = styled(MdKeyboardArrowDown)<{
  $open: boolean;
}>`
  ${({ $open }) => css`
    transform: ${$open ? "rotate(180deg)" : "rotate(0deg)"};
    transition: transform 0.3s ease;
  `}
`;
