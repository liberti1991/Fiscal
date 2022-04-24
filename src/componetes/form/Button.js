import styled from "styled-components"

export const Button = ({ text, margin, onCLick }) => {
  return (
    <BUTTON margin={margin} onClick={onCLick}>{text}</BUTTON>
  )
}

const BUTTON = styled.button`
  margin: ${p => p.margin};
  font-size: 18px;
  font-weight: 500;
  padding: 7px 15px;
  border-radius: 10px;
  color: #000;
  border-color: rgb(242, 101, 34, .3);
  background-color: rgb(242, 101, 34, .6);
  /* box-shadow: 0 0 40px 40px #F26522 inset, 0 0 0 0 #F26522; */
  /* -webkit-transition: all .3s ease-in-out; */
  /* transition: all .3s ease-in-out; */

  :hover{
    box-shadow: 0 0 10px 0 #F26522 inset, 0 0 10px 4px #F26522;
    color: #FFF;
    background-color: #F26522;
  }
`;