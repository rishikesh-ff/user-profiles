import styled, { css } from "styled-components";

const variants = {
  submit: css`
    border: 1px solid dodgerblue;
    border-radius: 5px;
    color: white;
    background-color: dodgerblue;
    border-color: dodgerblue;
    width: 4rem;
    height: 2rem;
    &:hover {
      background-color: deepskyblue;
      border: 1px solid deepskyblue;
    }
  `,
  cancel: css`
    background-color: white;
    border-radius: 5px;
    color: #fd4c4c;
    border: 1px solid #fd4c4c;
    width: 4rem;
    height: 2rem;
    &:hover {
      color: white;
      border-color: #fd4c4c;
      background-color: #fd4c4c;
    }
  `,
};

const StyledButton = styled.button`
  ${({ variant }) => variants[variant]}
`;

export default StyledButton;
