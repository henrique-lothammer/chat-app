import styled from 'styled-components'

export const JoinContainer = styled.article`
  background: ${(props) => props.theme.palette.common.gray};
  width: 100%;
  min-height: 200px;
  border-radius: 10px;
  overflow: hidden;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;

  h1 {
    width: 100%;
    height: 40px;
    font-size: 3rem;
    text-align: center;
    line-height: 4rem;
    background: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }

  input {
    width: calc(100% - 20px);
    height: 40px;
    border: 1px solid #fff;
    padding: 0 10px;
  }

  a {
    width: calc(100% - 20px);
    margin-bottom: 10px;
  }

  button {
    width: 100%;
    height: 40px;
    border: 1px solid rgba(0, 0, 0, 0);
    padding: 0 10px;
    text-transform: uppercase;
    background: ${(props) => props.theme.palette.primary.main};
    color: ${(props) => props.theme.palette.primary.contrastText};
  }
`
