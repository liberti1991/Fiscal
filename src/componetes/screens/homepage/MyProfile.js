import styled from "styled-components";
import img from "../../../img/id01.jfif";
import { Users } from "../../database/Users";
import { Button } from "../../form/Button";
import { Input } from "../../form/Input";
import { QuickAccess } from "../../layout/QuickAccess";

export const MyProfile = () => {
  return (
    <GridContainer>
      <Container>
        <h3>Meu Perfil</h3>
        <h4>Escritório</h4>
        {Users.map((item) => <p key={item.id}>{item.razao.toUpperCase()}</p>)}
        <Section>
          <Perfil>
            <p>Foto de Perfil</p>
            <div>
              <img src={img} alt="Perfil" />
            </div>
          </Perfil>
          <Form>
            <Input
              type="text"
              text="Nome"
              name="name"
              placeholder="Digite seu nome"
            />
            <Input
              type="text"
              text="E-mail"
              name="email"
              placeholder="Cliente@fiscalc.com.br"
            />
            <InputContainer>
              <Input
                type="tel"
                text="Telefone"
                name="tel"
                placeholder="41 3333-3333"
              />
              <Input
                type="tel"
                text="Celular"
                name="cel"
                placeholder="41 98769-2549"
              />
            </InputContainer>
            <InputContainer>
              <Input
                type="password"
                text="Senha"
                name="senha"
                placeholder="********"
              />
              <Input
                type="password"
                text="Confirmar Senha"
                name="confirmaSenha"
                placeholder="********"
              />
            </InputContainer>
          </Form>
        </Section>
        <ButtonContainer>
          <Button text="Atualizar" margin={"20px 0 0"} />
        </ButtonContainer>
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

  h4 {
    margin-bottom: 0.1em;
  }

  @media screen and (min-width: 648px) {
    h3 {
      padding: 45px 0 20px 50px;
    }
  }
`;

const Section = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  margin-top: 20px;

  @media screen and (min-width: 648px) {
    grid-template-columns: 1fr 4fr;
    gap: 10px;
  }
`;

const Perfil = styled.div`
  margin: 0 auto;
  p {
    display: none;
  }
  div,
  img {
    background-color: #d4d4d4;
    width: 80px;
    height: 80px;
    border-radius: 50px;
    object-fit: cover;
  }
  @media screen and (min-width: 648px) {
    p {
      display: inline;
      font-size: 14px;
      font-weight: 700;
      margin-left: 8px;
    }
    div,
    img {
      width: 170px;
      height: 220px;
      border-radius: 15px;
    }
  }
`;

const Form = styled.form`
  margin-top: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 648px) {
    flex-direction: row;
    gap: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: end;
`;
