import styled from 'styled-components'

export const ChatContainer = styled.article`
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
`

export const Content = styled.div`
  width: 100%;
`
