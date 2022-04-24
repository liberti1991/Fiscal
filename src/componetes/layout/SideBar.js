import styled from "styled-components";
import { NavLink } from "react-router-dom";

import { BsPersonBadge, BsCalendarCheck } from "react-icons/bs";
import { BiMessageAltEdit, BiSupport } from "react-icons/bi";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { MdLogout } from 'react-icons/md'

export const SideBar = () => {
  return(
    <List>
      <li><NavLink activeclassname="active" to='perfil'><BsPersonBadge />Meu Perfil</NavLink></li>
      <li><NavLink activeclassname="active" to='ferramentas'><BiMessageAltEdit />Ferrramentas</NavLink></li>
      <li><NavLink activeclassname="active" to='monitoramento'><HiOutlineAcademicCap />Monitoramento</NavLink></li>
      <li><NavLink activeclassname="active" to='push'><BsCalendarCheck />Push</NavLink></li>
      <li><NavLink activeclassname="active" to='suporte'><BiSupport />Suporte</NavLink></li>
      <li><MdLogout />Logout</li>
    </List>
  )
};

const List = styled.ul`
  padding-top: 30px;
  list-style-type: none;
  background: #e5e5e5;
  min-height: calc(100vh - 80px);
  font-size: 18px;
  font-weight: 600;

  .active {
    background: #F26522;
    color: #fff;
    width: 100%;
  }
  
  li {
    display: flex;
    align-items: center;
    margin: 15px 0;
    cursor: pointer;
    color: black;

    a {
      padding: 10px 0 10px 50px;
      color: black;
      text-decoration: none;
      transition: 0.5s;
      :hover{
        text-decoration: underline;
      }
    }
    
    svg {
      margin-right: 20px;
    }
  }
  
  li:last-child{
    position: absolute;
    bottom: 20px;
    margin-left: 40px;
  }
`;
