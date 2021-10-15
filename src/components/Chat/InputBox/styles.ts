import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid ${(props) => props.theme.common.white};
    padding: 0 10px;
    background: ${(props) => props.theme.common.white};
    color: ${(props) => props.theme.primary.contrastText};
  }

  button {
    flex: 1;
    width: 150px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 0 10px;
    text-transform: uppercase;
    background: ${(props) => props.theme.primary.main};
    color: ${(props) => props.theme.primary.contrastText};
  }
`
