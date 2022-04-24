import styled from "styled-components";
import { Users } from '../database/Users'

import { BiMessageAltDetail, BiSearch } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosNotifications } from "react-icons/io";

export const Navbar = ({ toggleSideBar }) => {
  return (
    <NavbarContainer>
      <Search>
        <BiSearch />
        <input placeholder="Buscar..." />
      </Search>
      <BiMessageAltDetail />
      <IoIosNotifications />
      {Users.map((item) => {
        return (
          <User className="users" key={item.id}>
            <img src={item.img} alt={item.nome} />
            <p>{item.name}</p>
            <MdKeyboardArrowDown />
          </User>
        );
      })}
      <LateralMenu>
        <GiHamburgerMenu onClick={ toggleSideBar } />
      </LateralMenu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.div`
  background-color: #f26522;
  width: 100%;
  height: 80px;
  display: flex;
  top: 0;
  left: 0;
  z-index: 30;
  align-items: center;
  justify-content: space-around;
  color: white;
  position: fixed;
  padding: 0 15px;
  gap: 8px;

  svg {
    cursor: pointer;
    font-size: 25px;
  }

  @media screen and (min-width: 648px) {
    justify-content: flex-end;
    padding-right: 10%;
    gap: 20px;
  }
`;

const Search = styled.div`
  display: none;

  @media screen and (min-width: 648px) {
    display: flex;
    align-items: center;
    margin-right: 30px;
    position: relative;

    svg {
      border-radius: 5px;
      background-color: #145a82;
      position: absolute;
      height: 100%;
      width: 35px;
      padding: 5px;
      left: -25px;
    }

    input {
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      outline: none;
      width: 400px;
    }
  }
`;

const User = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  font-size: 18px;
  font-weight: 600;

  img {
    width: 40px;
    height: 40px;
    border-radius: 10px;
  }

  svg {
    display: none;
  }

  @media screen and (min-width: 648px) {
    margin-left: 30px;

    svg {
      display: inline;
      font-size: 30px;
    }
  }
`;

const LateralMenu = styled.div`
  @media screen and (min-width: 648px) {
    svg {
      display: none;
    }
  }
`;
