import { IconBaseProps } from "react-icons";

import { ContainerCard2, IconCard, SubTitleCard, TitleCard } from "./styles";

type Card2Props = {
  Title: string;
  SubTitle: string;
  Icon?: IconBaseProps;
};

export function Card2({ Title, SubTitle, Icon }: Card2Props) {
  return (
    <ContainerCard2>
      <IconCard>
        <>{Icon}</>
      </IconCard>

      <TitleCard>{Title}</TitleCard>
      <SubTitleCard>{SubTitle}</SubTitleCard>
    </ContainerCard2>
  );
}
