import { useState } from "react";
import styled from "styled-components";

import { QuickAccess } from "../../layout/QuickAccess";
import { Cnae } from "./monitoring/Cnae";
import { Ncm } from "./monitoring/Ncm";

export const Monitoring = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <GridContainer>
      <Container>
        <h3>Monitoramento</h3>
        <NavContainer>
          <Nav>
            <Button isOpen={isOpen} onClick={() => setIsOpen(true)}>
              NCM
            </Button>
            <Button isOpen={!isOpen} onClick={() => setIsOpen(false)}>
              CNAE
            </Button>
          </Nav>
          {isOpen ? <Ncm /> : <Cnae />}
        </NavContainer>
      </Container>
      <article>
        <QuickAccess />
      </article>
    </GridContainer>
  );
};

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  min-height: calc(100vh - 80px);

  article {
    display: none;
  }

  @media screen and (min-width: 648px) {
    grid-template-columns: 3fr 1fr;
    gap: 10px;

    article {
      display: inline;
    }
  }
`;

const Container = styled.div`
  padding: 10px;

  h3 {
    padding: 15px 0 20px;
  }

  @media screen and (min-width: 648px) {
    h3 {
      padding: 45px 0 20px 50px;
    }
  }
`;

const NavContainer = styled.nav`
  background-color: #e5e5e5;
  border-radius: 5px 5px 10px 10px;
  height: 70vh;
`;

const Nav = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  border-bottom: 1px solid black;
  padding: 0 10px;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px 0;
  border: none;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 600;
  color: ${(p) => (p.isOpen ? "#fff" : "#424242")};
  background-color: ${(p) => (p.isOpen ? "#f26522" : "#e5e5e5")};
`;
