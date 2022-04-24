import { useEffect, useState } from "react";
import styled from "styled-components";

export const RegistrationData = () => {
  const [empresa, setEmpresa] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/teste", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setEmpresa(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <section>
      {empresa.map((item) => (
        <Section key={item.id}>
          <h5>
            Empresa - <span>{item.name.toUpperCase()}</span>
          </h5>
          <article>
            <h6>Cnpj: </h6>
            <p>{item.cnpj}</p>
            <h6>Situação: </h6>
            <p>{item.active ? "Ativa" : "inativa"}</p>
            <h6>Responsável: </h6>
            <p>{item.responsavel}</p>
            <h6>Telefone: </h6>
            <p>{item.tel}</p>
            <h6>Celular: </h6>
            <p>{item.cel}</p>
            <h6>E-mail: </h6>
            <p>{item.email}</p>
            <h6>CEP: </h6>
            <p>{item.cep}</p>
            <h6>Rua: </h6>
            <p>{item.address}</p>
            <h6>Número: </h6>
            <p>{item.number}</p>
            <h6>Complemento: </h6>
            <p>{item.complement}</p>
            <h6>Bairro: </h6>
            <p>{item.district}</p>
            <h6>Cidade: </h6>
            <p>{item.county}</p>
            <h6>Obs: </h6>
            <p>{item.obs}</p>
          </article>
        </Section>
      ))}
    </section>
  );
};

const Section = styled.section`
  padding: 10px 0;
  h5 {
    padding-bottom: 10px;
    border-bottom: 1px solid #d4d4d4;
    text-align: center;
    margin-bottom: 10px;
  }

  article {
    padding: 0 20px;
    h6 {
      margin-bottom: 6px;
    }
    p {
      margin-bottom: 10px;
      border-bottom: 1px solid #d4d4d4;
    }
  }

  @media screen and (min-width: 648px) {
    padding: 15px 0;
    article {
      padding: 0 60px;
    }
  }
`;
