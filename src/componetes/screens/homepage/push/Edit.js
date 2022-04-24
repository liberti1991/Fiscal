import styled from "styled-components";

import { Button } from "../../../form/Button";  

export const Edit = ({toggle}) => {
  return (
    <ModalContainer>
      <h3>Empresa</h3>

      <ButtonContainer>
        <Button text="Cancelar" onCLick={toggle} margin={"10px 0 0"} />
        <Button text="Enviar" margin={"10px 0 0"} />
      </ButtonContainer>
    </ModalContainer>
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
  max-height: 80%;
  border-radius: 10px;
  padding: 10px 0;

  h3 {
    padding: 10px 30px;
    border-bottom: 1px solid #b4b4b4;
    margin-bottom: 20px;
  }

  @media screen and (min-width: 648px) {
    width: 650px;
  }
`;

const ButtonContainer = styled.footer`
  display: flex;
  justify-content: end;
  gap: 10px;
  border-top: 1px solid #b4b4b4;
  padding: 10px 30px;
`;
