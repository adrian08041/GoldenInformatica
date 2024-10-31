import styled from "styled-components";

export const ButtonStyled = styled.a<{ $color: string }>`
  background-color: #009700;
  color: ${(props) => props.$color};
  font-weight: bold;
  font-size: 20px;
  height: 100%;
  padding: 10px;
  text-align: center;
  border-radius: 50px;
  border: none;
  cursor: pointer;
  text-decoration: none;
  
  

`
;
