import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

import { Button } from "../../../form/Button";

export const View = ({ toggle }) => {
  return (
    <section>
      <ModalContainer>
        <nav>
          <Ul>
            <li>
              <NavLink to="dados-cadastrais">Dados Cadastrais</NavLink>
            </li>
            <li>
              <NavLink to="certificado-digital">Certificado Digital</NavLink>
            </li>
            <li>
              <NavLink to="monitor">Monitor</NavLink>
            </li>
          </Ul>
        </nav>
        <Outlet />
        <ButtonContainer>
          <Button text="Fechar" onCLick={toggle} />
        </ButtonContainer>
      </ModalContainer>
    </section>
  );
};

const ModalContainer = styled.section`
  z-index: 50;
  position: absolute;
  background-color: #f5f5f5;
  overflow-y: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  max-height: 80vh;
  border-radius: 10px;

  @media screen and (min-width: 648px) {
    width: 650px;
  }
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: space-between;
  background-color: #f26522;
  padding: 15px 10px;
  gap: 5px;

  .active {
    text-decoration: underline;
  }

  li,
  a {
    color: #fff;
    font-weight: 600;
    font-size: 11px;
    text-decoration: none;
  }

  @media screen and (min-width: 648px) {
    padding: 15px 60px;
    li,
    a {
      font-size: 14px;
    }
  }
`;

const ButtonContainer = styled.footer`
  display: flex;
  justify-content: end;
  gap: 10px;
  border-top: 1px solid #b4b4b4;
  padding: 10px 30px;
`;