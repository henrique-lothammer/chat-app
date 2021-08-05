import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;

  input {
    width: 100%;
    height: 40px;
    border: 1px solid #fff;
    padding: 0 10px;
  }

  button {
    flex: 1;
    width: 150px;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 0 10px;
    text-transform: uppercase;
    background: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`
