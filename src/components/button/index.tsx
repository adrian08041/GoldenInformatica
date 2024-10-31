import { ButtonStyled } from "./styles";

type ButtonProps = {
  texto: string;
  color: string;
  link: string;
};

export function Button({ texto, color, link }: ButtonProps) {
  return <ButtonStyled $color={color} href={link} target="_blank" >{texto} </ButtonStyled>;
}
