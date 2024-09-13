import { IconBaseProps } from "react-icons";
import { Container, IconCard, SubTitleCard, TitleCard } from "./styleds";


type CardProps = {
  Title: string;
  SubTitle: string;
  Icon?: IconBaseProps;
  
};
export function Card({ Title, SubTitle, Icon }: CardProps) {
  return (
    <Container>
      <IconCard>
        <>{Icon}</>
      </IconCard>

      <TitleCard>{Title}</TitleCard>
      <SubTitleCard>{SubTitle}</SubTitleCard>
    </Container>
  );
}

//<RiCustomerService2Line color="00ffff" size={50} />
