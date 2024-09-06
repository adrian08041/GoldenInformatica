import { Container, SubTitleCard, TitleCard } from "./styleds";
import { RiCustomerService2Line } from "react-icons/ri";

type CardProps = { Title: string, SubTitle: string };
export function Card({Title, SubTitle}: CardProps) {
  return (
    <Container>
      <RiCustomerService2Line color="00ffff" size={50} />
      <TitleCard>{Title}</TitleCard>
      <SubTitleCard>{SubTitle}</SubTitleCard>
    </Container>
  );
}
