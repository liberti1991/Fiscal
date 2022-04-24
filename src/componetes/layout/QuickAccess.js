import styled from "styled-components";
import { Link } from "react-router-dom";

import { DataBaseQuickAccess } from '../database/DataBaseQuickAccess';

import { MdKeyboardArrowRight } from "react-icons/md";

export const QuickAccess = () => {
  return (
    <Container>
      <h3>Acesso Rápido</h3>
      <nav>
        <ul>
          {DataBaseQuickAccess.map((item) => (
            <li key={item.id}><Link to={item.url}><ArrowRight /><span>{item.title}</span></Link></li>
          ))}
        </ul>
      </nav>
    </Container>
  );
};

const ArrowRight = styled(MdKeyboardArrowRight)`
  background-color: #F26522;
  color: white;
  width: 30px;
  height: 30px;
  border-radius: 5px;
`;

const Container = styled.div`
  padding: 10px 0 0 25px;

  h3 {
    margin-top: 45px;
  }

  ul{
    margin-top: 20px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
    li {
      a{
        display: flex;
        align-items: center;
        color: black;
        text-decoration: none;
        gap: 15px;

        :hover{
          text-decoration: underline;
        }
      }
      span {
        font-size: 14px;
        font-weight: 600;
      }
    }
  }
`;
