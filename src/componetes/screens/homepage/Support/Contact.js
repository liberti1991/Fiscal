import styled from "styled-components";

import { BsWhatsapp } from "react-icons/bs";

export const Contact = () => {
  return (
    <Container>
      <h5>Endereço:</h5>
      <p>
        Rua. Expedicionário Eurides Fernandes do Nascimento, 348, Alto
        Boqueirão.
      </p>
      <div>
        <h5>CEP:</h5>
        <p>81.850-310</p>
      </div>
      <p>Curitiba - Paraná - Brasil</p>
      <h5>E-mail:</h5>
      <p>fiscalc@fiscalc.com.br</p>
      <Whatsapp>
        <a
          href="https://api.whatsapp.com/send?phone=554197000028&text=Olá.%20Gostaria%20de%20saber%20mais%20sobre%20os%20Serviços!%20"
          target="_blank"
          title="Whatsapp"
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <BsWhatsapp />
          whatsapp
        </a>
      </Whatsapp>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 25px 20px;
  margin-top: 20px;
  background-color: #e5e5e5;
  border-radius: 10px;
  
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  @media screen and (min-width: 648px) {
    padding: 30px 40px;
    gap: 20px;
  }
`;

const Whatsapp = styled.div`
  display: flex;
  justify-content: end;

  a {
    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #000;
    border-radius: 5px;
    background-color: rgb(242, 101, 34, .6);
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 2px;

    svg {
      margin-right: 15px;
    }

    :hover {
      background: #F26522;
      color: #FFF;
      border-radius: 5px;
      box-shadow: 0 0 5px #F26522, 0 0 25px #F26522;
    }

    span {
      position: absolute;
      display: block;

      :nth-child(1) {
        top: 0;
        left: -100%;
        width: 100%;
        height: 3px;
        background: linear-gradient(90deg, transparent, #F26522);
        animation: btn-anim1 2s linear infinite;

        @keyframes btn-anim1 {
          0% {
            left: -100%;
          }
          50%,
          100% {
            left: 100%;
          }
        }
      }

      :nth-child(2) {
        top: -100%;
        right: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(180deg, transparent, #F26522);
        animation: btn-anim2 2s linear infinite;
        animation-delay: 0.5s;

        @keyframes btn-anim2 {
          0% {
            top: -100%;
          }
          50%,
          100% {
            top: 100%;
          }
        }
      }

      :nth-child(3) {
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 3px;
        background: linear-gradient(270deg, transparent, #F26522);
        animation: btn-anim3 2s linear infinite;
        animation-delay: 1s;

        @keyframes btn-anim3 {
          0% {
            right: -100%;
          }
          50%,
          100% {
            right: 100%;
          }
        }
      }

      :nth-child(4) {
        bottom: -100%;
        left: 0;
        width: 3px;
        height: 100%;
        background: linear-gradient(360deg, transparent, #F26522);
        animation: btn-anim4 2s linear infinite;
        animation-delay: 1.5s;

        @keyframes btn-anim4 {
          0% {
            bottom: -100%;
          }
          50%,
          100% {
            bottom: 100%;
          }
        }
      }
    }
  }
`;
