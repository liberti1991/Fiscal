import styled from "styled-components";
import { useState } from "react";

import { usePagination } from "../../hooks/usePagination";
import { FooterPagination } from "../../hooks/Footer";
import { empresa } from "../../database/empresa"
import { Modal } from "../../layout/Modal";
import { NewAdd } from "../homepage/push/NewAdd";
import { Edit } from "./push/Edit";
import { View } from "./push/View";

import { BiSearchAlt, BiEdit } from "react-icons/bi";
import { FaWhatsapp, FaRegEye } from "react-icons/fa";
import { FiPhone, FiMail, FiFileText, FiDownload } from "react-icons/fi";
import { MdPersonAdd } from "react-icons/md";


export const Push = () => {

  // const [empresa, setEmpresa] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:5000/empresa", {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       setEmpresa(data);
  //     })
  //     .catch((err) => console.log(err));
  // }, []);

  //Modal
  const [newAddIsOpen, setNeWAddIsOpen] = useState(false);
  const toggleNewAdd = () => setNeWAddIsOpen((atualValor) => !atualValor);

  const [editIsOpen, setEditIsOpen] = useState(false);
  const toggleEdit = () => setEditIsOpen((atualValor) => !atualValor);

  const [viewIsOpen, setViewIsOpen] = useState(false);
  const toggleView = (id) => {
    console.log(id) 
    setViewIsOpen((atualValor) => !atualValor);
  }
  
  // filter
  const [busca, setBusca] = useState("");
  const lowerBusca = busca.toLowerCase();
  const empresaFiltrada = empresa.filter((empresa) =>
    empresa.name.toLowerCase().includes(lowerBusca)
  );

  // Pagination
  const { pagesVisited, pageCount, itemsPerPage, changePage } =
    usePagination(empresa);
  return (
    <section>
      <Header>
        <h3>Empresas</h3>
        <div>
          <BiSearchAlt />
          <input
            placeholder="Pesquisar..."
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
          />
        </div>
      </Header>
      <NewaddButton onClick={toggleNewAdd}>
        <MdPersonAdd />
        Adicionar Novo
      </NewaddButton>
      {newAddIsOpen ? (
        <Modal toggle={toggleNewAdd}>
          <NewAdd toggle={toggleNewAdd}/>
        </Modal>
      ) : null}
      {empresaFiltrada
        .slice(pagesVisited, pagesVisited + itemsPerPage)
        .map((item) => (
          <CardContainer key={item.id}>
            <div>
              <Subtitle>
                <article>{item.active ? "Ativo" : "Inativo"}</article>
                <article>
                  {item.active
                    ? "Certificado digital Ativo"
                    : "Certificado digital vencido"}
                </article>
                <article>
                  {item.active ? "Token Monitor" : "Token Monitor 2"}
                </article>
              </Subtitle>
              <h4>
                {item.cnpj} - {item.name.toUpperCase()}
              </h4>
              <p>
                Responsável: <span>{item.responsavel.toUpperCase()}</span>
              </p>
              <Info>
                <div>
                  <FiPhone />
                  <h5>{item.tel}</h5>
                </div>
                <div>
                  <FaWhatsapp />
                  <h5>{item.cel}</h5>
                </div>
                <div>
                  <FiMail />
                  <h5>{item.email.toUpperCase()}</h5>
                </div>
              </Info>
            </div>
            <ButtonContainer>
              <FaRegEye onClick={toggleView.bind(null,item.id)} />
              {viewIsOpen ? (
                <Modal toggle={toggleView}>
                  <View toggle={toggleView} />
                </Modal>
              ) : null}
              <BiEdit onClick={toggleEdit} />
              {editIsOpen ? (
                <Modal toggle={toggleEdit}>
                  <Edit toggle={toggleEdit}/>
                </Modal>
              ) : null}
              <FiFileText />
              <FiDownload />
            </ButtonContainer>
          </CardContainer>
        ))}
      <FooterPagination changePage={changePage} pageCount={pageCount} />
    </section>
  );
};

const Header = styled.div`
  padding: 25px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    svg {
      position: absolute;
      width: 25px;
      height: 25px;
      padding: 0 0 5px 5px;
    }

    input {
      border: none;
      border-bottom: 1px solid black;
      background-color: transparent;
      position: relative;
      padding: 0 2em 0.2em;
      width: 150px;

      :focus {
        outline: 0;
      }

      ::placeholder {
        font-weight: 600;
      }
    }
  }

  @media screen and (min-width: 648px) {
    h3,
    div {
      padding: 25px 50px 20px 50px;
    }
    div {
      input {
        width: 300px;
      }
    }
  }
`;

const NewaddButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 7px 15px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  margin-bottom: 10px;
  color: #424242;
  font-weight: 600;

  svg {
    width: 30px;
    height: 30px;
  }
`;

const CardContainer = styled.section`
  display: grid;
  max-width: 1200px;
  grid-template-columns: 1fr;
  /* gap: 20px; */
  padding: 10px 10px;
  background: #e5e5e5;
  margin-bottom: 10px;

  h4 {
    margin: 0.6em 0 0.4em;
  }

  p {
    margin-bottom: 0.6em;
    font-size: 12px;
  }

  @media screen and (min-width: 648px) {
    border-radius: 10px;
    grid-template-columns: 7fr 1fr;
  }
`;

const Subtitle = styled.article`
  display: flex;
  justify-content: space-between;
  gap: 5px;
  article {
    display: flex;
    align-items: center;
    text-align: center;
    padding: 3px 6px;
    border-radius: 5px;
    color: #fff;
    font-size: 13px;
    font-weight: 600;

    :nth-child(1) {
      background-color: green;
    }

    :nth-child(2) {
      background-color: #ff8c00;
    }

    :nth-child(3) {
      background-color: #d2691e;
    }
  }
  @media screen and (min-width: 648px) {
    justify-content: flex-start;
    gap: 15px;
  }
`;

const Info = styled.article`
  div {
    margin-bottom: 0.4em;
    display: flex;
    align-items: center;
    gap: 10px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  @media screen and (min-width: 648px) {
    display: grid;
    grid-template-columns: 2fr 2fr 4fr;
  }
`;

const ButtonContainer = styled.article`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 0 10px;
  cursor: pointer;
  svg {
    width: 30px;
    height: 30px;
  }
`;
