import { Link } from "react-scroll";
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
  height: 300px;
`;

export const LinkStyle = styled(Link)`
  cursor: pointer;
  margin: 20px 0 10px;
  
  font-weight: bold;
  color: white;
  text-decoration: none;
  position: relative;
  &:hover,
  &:focus {
    color: #daa520;
  }
  &:active {
    color: #daa520;
  }
  &::after {
    content: "";
    position: absolute;
    background-color: #daa520;
    height: 3px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  &:hover::after{
    width: 100%;
  }
`;
