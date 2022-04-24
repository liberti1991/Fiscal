import styled from "styled-components";

export const InputRange = ({
  type,
  text,
  name,
  placeholder,
  handleOnChange,
  value,
  min,
  max,
}) => {
  return (
    <Div>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={handleOnChange}
        value={value}
        min={min}
        max={max}
        required
      />
      <label htmlFor={name}>{text}</label>
    </Div>
  );
};

const Div = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 0.8em;
  gap: 10px;
  width: 100%;

  label {
    font-weight: 600;
    font-size: 14px;
  }

  input {
    -webkit-appearance: none;
    width: 50px;
    height: 15px;
    border-radius:10px;
    background: #e5e5e5;

    ::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 100%;
      background: #f26522;
      cursor: pointer;
    }
  }
`;
