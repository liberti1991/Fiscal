import styled from "styled-components";

export const Modal = ({ toggle, children }) => {
  return (
    <section>
      <Background onClick={toggle}></Background>
      {children}
    </section>
  );
};

const Background = styled.section`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.3);
`;
