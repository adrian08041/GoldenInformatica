import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  border-radius: 10px;
  align-items: center;
 
  
  padding: 15px;
  gap: 5px;
  min-height: 266px;
`;

export const TitleCard = styled.h1`
  font-family: "roboto", sans-serif;
  font-weight: 700;
  font-style: italic;
`;
export const SubTitleCard = styled.p`
  color: #2c2c2c;
`;

export const IconCard = styled.div`
  
`;

export const WrapperFooterCard = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;

  gap: 10px;
`;
