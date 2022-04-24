import styled from "styled-components";

import { InputTwo } from "../../../form/InputTwo";
import { TextArea } from "../../../form/TextArea";
import { Button } from "../../../form/Button";
export const Form = () => {
  return (
    <FormContainer>
      <InputTwo
        type="text"
        name="name"
        text="Seu Nome"
        placeholder="Informe seu nome completo"
      />
      <InputTwo
        type="text"
        name="email"
        text="Seu E-mail"
        placeholder="Informe seu e-mail"
      />
      <InputTwo
        type="tel"
        name="phone"
        text="Seu Telefone"
        placeholder="Informe seu telefone"
      />
      <InputTwo
        type="text"
        name="subject"
        text="Assunto"
        placeholder="Gostaria de saber mais sobre os serviços"
      />
      <TextArea
        name="message"
        text="Mensagem"
        placeholder="Informe sua mensagem"
      />
      <ButtonContainer>
        <Button text="Enviar" margin={"20px 0 0"} />
      </ButtonContainer>
    </FormContainer>
  );
};

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #e5e5e5;
  padding: 25px 20px;
  margin-top: 20px;
  border-radius: 10px;
  gap: 15px;
  @media screen and (min-width: 648px) {
    padding: 30px 40px;
    width: 80%;
    margin: 20px auto 0;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
