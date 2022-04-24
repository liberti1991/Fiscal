import styled from "styled-components";

import { cnae } from "../../../database/cnae";
import { InputTwo } from "../../../form/InputTwo";

import { BsTrash } from "react-icons/bs";

export const Ncm = () => {
  return (
    <Container>
      <Div>
        <InputTwo type="text" name="name" text="Vincular Tipi" />
        {cnae.map((item) => (
          <Card key={item.id}>
            <CardItens>
              <p>
                {item.cnae} {item.title}
              </p>
              <BsTrash />
            </CardItens>
          </Card>
        ))}
      </Div>
    </Container>
  );
};

const Container = styled.div`
  padding: 10px;
  height: 90%;
  @media screen and (min-width: 648px) {
    padding: 20px;
  }
`;

const Div = styled.div`
  background-color: #c4c4c4;
  border-radius: 10px;
  height: 100%;
  padding: 20px 10px 10px;
  overflow-y: auto;
  @media screen and (min-width: 648px) {
    padding: 20px;
  }
`;

const Card = styled.div`
  background-color: #d4d7d7;
  padding: 10px 10px;
  margin-bottom: 5px;
  border-radius: 5px;
  @media screen and (min-width: 648px) {
    padding: 10px 20px;
  }
`;

const CardItens = styled.div`
  display: grid;
  grid-template-columns: 5fr 1fr;
  gap: 10px;
  align-items: center;

  p {
    width: 100%;
  }

  svg {
    width: 25px;
    height: 25px;
    color: red;
    margin: auto;
  }
  
  @media screen and (min-width: 648px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
