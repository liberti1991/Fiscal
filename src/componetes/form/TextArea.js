import styled from "styled-components";

export const TextArea = ({
  text,
  name,
  placeholder,
  handleOnChange,
  value,
}) => {
  return (
    <Div>
      <label htmlFor={name}>{text}</label>
      <textarea
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
  margin-bottom: 0.8em;
  width: 100%;

  label {
    /* margin-bottom: 0.4em; */
    font-weight: 600;
    font-size: 14px;
  }

  textarea {
    padding: 0.3em 1.4em;
    border: none;
    width: 85%;
    min-height: 100px;
    border-bottom: 2px solid #7b7b7b;
    background-color: transparent;
    outline: 0;

    :hover {
      border-bottom: 2px solid black;
    }

    ::placeholder {
      color: #7b7b7b;
    }
    @media screen and (min-width: 648px) {
      max-width: 400px;
    }
  }
`;
