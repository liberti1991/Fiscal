import styled from "styled-components";

export const Input = ({ type, text, name, placeholder, handleOnChange, value }) => {
  return (
    <Div>
      <label htmlFor={name}>{text}</label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        required
      />
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: .5em;
  width: 100%;

  label {
    margin-bottom: 0.4em;
    margin-left: 2em;
    font-weight: 600;
    font-size: 14px
  }

  input {
    padding: 0.5em 1.4em;
    border-radius: 0;
    border: none;
    border-radius: 20px;
    background-color: #FFF8E1;
  }

  input::placeholder {
    color: #7b7b7b;
  }
`;
