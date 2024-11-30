import styled from "styled-components";

export const NavbarContainer = styled.div`
  position: fixed;
  z-index: 50;
  width: 100%;
  top: 0;
  left: 0;
  padding: 8px;
  background-color: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (min-width: 768px) {
    justify-content: flex-start;
    padding: 0 20px;
  }
`;

export const NavbarLinkContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    margin-left: 20px;
  }
`;

export const NavbarLink = styled.li`
  margin: 10px;
`;

export const NavbarLinkItem = styled.a`
  color: white;
  font-size: 16px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media (min-width: 768px) {
    margin: 0 10px;
  }
`;

export const ResumeLink = styled.a`
  background-color: #008080;
  border: 4px solid #008080;
  color: white;
  font-size: 14px;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  padding: 8px 16px;
  border-radius: 30px;
  cursor: pointer;

  &:hover {
    background-color: #006666;
    border-color: #006666;
  }
`;
export const RightContainer = styled.div`
  flex: 30%;
  display: flex;
  justify-content: flex-end;
  padding-right: 10px;
  margin-top:0px;
`;
