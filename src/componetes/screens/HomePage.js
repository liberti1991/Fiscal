import styled from "styled-components";
import { ROUTES } from "../../routes/ROUTES";

import { SideBar } from "../layout/SideBar";

export const HomePage = ({ isOpen, toggleSideBar }) => {
  return (
    <GridContainer>
      <Overlay onClick={toggleSideBar} isOpen={isOpen}>
        <SidebarContainer isOpen={isOpen}>
          <SideBar />
        </SidebarContainer>
      </Overlay>
      <ContentContainer>
        <ROUTES />
      </ContentContainer>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr;
  min-height: calc(80px - 100vh);

  @media screen and (min-width: 648px) {
    grid-template-columns: 1fr 4fr;
    gap: 15px;
  }
`;

const Overlay = styled.div`
  width: 100%;
  min-height: calc(100vh - 80px); 
  position: absolute;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
  transition: 0.8s;

  left: ${(p) => (p.isOpen ? "0" : "-100vw")};

  @media screen and (min-width: 648px) {
    z-index: 0;
    position: static;
    grid-template-columns: 1;
    width: 100%;
    background: white;
  }
`;

const SidebarContainer = styled.div`
  grid-row: 1;
  z-index: 20;
  width: 80vw;
  min-height: calc(100vh - 80px);
  background: white;

  position: absolute;
  transition: 0.8s;

  // condição prop.menuLateral ? true : false
  left: ${(p) => (p.isOpen ? "0" : "-100vw")};

  @media screen and (min-width: 648px) {
    z-index: 0;
    position: static;
    width: 100%;
    grid-template-columns: 1;
  }
`;

const ContentContainer = styled.div`
  grid-row: 1;

  @media screen and (min-width: 648px) {
    grid-row: 1;
    grid-column: 2;
    padding-right: 10px;
  }
`;
