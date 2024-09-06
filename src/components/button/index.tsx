import { ButtonStyled } from "./styles";

type ButtonProps = {
  texto: string;
  color: string;
};

export function Button({ texto, color }: ButtonProps) {
  return <ButtonStyled $color={color}>{texto}</ButtonStyled>;
}
