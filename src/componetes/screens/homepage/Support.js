import styled from "styled-components";
import { Contact } from "./Support/Contact";
import { Form } from "./Support/Form";

export const Support = () => {
  return (
    <GridContainer>
      <Container>
        <h3>Formúlario</h3>
        <Form />
      </Container>
      <Container>
        <h3>Contato</h3>
        <Contact />
      </Container>
    </GridContainer>
  );
};
const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  @media screen and (min-width: 648px) {
    grid-template-columns: 4fr 2fr;
    gap: 15px;
  }
`;
const Container = styled.div`
  padding: 25px 15px;

  @media screen and (min-width: 648px) {
    h3 {
      padding: 25px 50px 20px 50px;
    }
  }
`;
