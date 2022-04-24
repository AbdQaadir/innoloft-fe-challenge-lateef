import styled from "styled-components";

const StyledInput = styled.div`
  margin: 10px 0;
  width: 100%;
  input {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #cecece;
    outline: none;
  }
`;

const TextInput = ({ label, name, ...rest }: any) => {
  return (
    <StyledInput>
      {label ? <label htmlFor={name}>{label}</label> : <></>}
      <input name={name} id={name} {...rest} />
    </StyledInput>
  );
};
export default TextInput;
