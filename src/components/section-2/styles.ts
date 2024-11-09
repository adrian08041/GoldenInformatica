import styled from "styled-components";

export const WrapperContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50vw;
`;

export const NameEmpresa = styled.p`
  width: fit-content;
  font-size: 27px;
`;

export const TitleSlogan = styled.h1`
  //width: 50%;
`;
export const DescricaoSlogan = styled.p`
  //width: 50%;
`;

export const ContainerImage = styled.div``;

export const Photo = styled.div`
  background-image: url("./assets/imagem1.jpg");
  background-size: cover;

  width: 50vw;
  height: 50vh;
  background-repeat: no-repeat;
  border-radius: 20px;
`;

export const WrapperSection2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 100px;
  gap: 30px;
`;
export const WrapperButton = styled.div`
  width: fit-content;
  margin-top: 20px;
`;
