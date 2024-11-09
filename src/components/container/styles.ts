import styled from "styled-components";

export const ContainerStyled = styled.div`
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export const Photo = styled.div`
  background-image: url("./public/assets/imagem1.jpg");
  background-size: cover;
`;
