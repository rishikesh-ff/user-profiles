import styled from "styled-components";

const StyledInput = styled.input`
  border: 1px solid dodgerblue;
  border-radius: 5px;
  width: 200px;
  height: 30px;
  &:focus {
    outline: none;
    box-shadow: 0 0 5px deepskyblue;
    border-color: deepskyblue;
  }
`;

export default StyledInput;
