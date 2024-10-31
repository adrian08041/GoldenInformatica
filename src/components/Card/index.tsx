import { IconBaseProps } from "react-icons";
import { Container, IconCard, SubTitleCard, TitleCard, WrapperFooterCard } from "./styles";

type CardProps = {
  Title: string;
  SubTitle: string;
  Icon?: React.ReactNode;
};
export function Card({ Title, SubTitle, Icon }: CardProps) {
  return (
    <Container>
      {/* <IconCard> */}
        {Icon}
      {/* </IconCard> */}
      <WrapperFooterCard>
        <TitleCard>{Title}</TitleCard>
        <SubTitleCard>{SubTitle}</SubTitleCard>
      </WrapperFooterCard>
    </Container>
  );
}
