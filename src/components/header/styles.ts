import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

export const WrapperMenu = styled.div`
  display: flex;

  gap: 20px;
  font-weight: 500;
  margin-top: 5px;
`;
export const Menu = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  gap: 30px;
  font-size: 20px;
`;
export const Logo = styled.img`
  width: 100;
  height: 220px;
`;
