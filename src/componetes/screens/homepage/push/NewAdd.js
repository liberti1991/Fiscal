import styled from "styled-components";

import { Button } from "../../../form/Button";
import { InputTwo } from "../../../form/InputTwo";
import { InputRange } from "../../../form/InputRange";
import { TextArea } from "../../../form/TextArea";

export const NewAdd = ({toggle}) => {
  return (
    <ModalContainer>
      <h3>Empresa</h3>
      <form>
        <GridInputContainerCnpj>
          <InputTwo text="Cnpj" type="text" name="cnpj" placeholder="cnpj..." />
          <InputRange text="ativo" name="ativo" type="range" min="0" max="1" />
        </GridInputContainerCnpj>
        <InputTwo text="Nome" type="text" name="name" placeholder="" />
        <InputContainer>
          <InputTwo text="Telefone" type="tel" name="tel" placeholder="" />
          <InputTwo text="Celular" type="tel" name="cel" placeholder="" />
        </InputContainer>
        <InputTwo text="E-mail" type="email" name="email" placeholder="" />
        <InputTwo
          text="Responsavel"
          type="text"
          name="responsavel"
          placeholder=""
        />
        <GridInputContainer>
          <InputTwo text="Cep" type="number" name="cep" placeholder="" />
          <InputTwo text="Endereço" type="text" name="address" placeholder="" />
        </GridInputContainer>
        <GridInputContainer>
          <InputTwo text="Número" type="number" name="number" placeholder="" />
          <InputTwo
            text="Complemento"
            type="text"
            name="complement"
            placeholder=""
          />
        </GridInputContainer>
        <InputContainer>
          <InputTwo text="Bairro" type="text" name="district" placeholder="" />
          <InputTwo text="Município" type="text" name="county" placeholder="" />
        </InputContainer>
        <TextArea
          name="obs"
          text="Observação:"
          placeholder="Informe sua mensagem"
        />
      </form>
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
  height: 80%;
  border-radius: 10px;
  padding: 10px 0;

  h3 {
    padding: 10px 30px;
    border-bottom: 1px solid #b4b4b4;
    margin-bottom: 20px;
  }

  form {
    padding: 10px 30px;
  }

  @media screen and (min-width: 648px) {
    width: 650px;
    form {
      padding: 30px 60px;
    }
  }
`;

const InputContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 648px) {
    flex-direction: row;
    gap: 20px;
  }
`;

const GridInputContainerCnpj = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 648px) {
    display: grid;
    grid-template-columns: 6fr 1fr;
    align-items: center;
    gap: 20px;
  }
`;

const GridInputContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 648px) {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
  }
`;

const ButtonContainer = styled.footer`
  display: flex;
  justify-content: end;
  gap: 10px;
  border-top: 1px solid #b4b4b4;
  padding: 10px 30px;
`;
