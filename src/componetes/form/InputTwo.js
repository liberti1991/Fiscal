import styled from "styled-components";

export const InputTwo = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) => {
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
  margin-bottom: 0.4em;
  width: 100%;

  label {
    /* margin-bottom: 0.4em; */
    font-weight: 600;
    font-size: 14px;
  }

  input {
    padding: 0.3em 0;
    border: none;
    width: thin;
    border-bottom: 1px solid #7b7b7b;
    background-color: transparent;
    outline: 0;
       
    :hover{
      border-bottom: 1px solid black;
    }

    ::placeholder {
      color: #7b7b7b;
    }
  }
`;
