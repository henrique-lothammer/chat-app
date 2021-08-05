import styled from 'styled-components'

export const Box = styled.ul`
  width: 100%;
  min-height: 400px;
  list-style-type: none;
  display: flex;
  flex-direction: column;
  height: 400px;
  padding-bottom: 20px;
`

interface IMessage {
  isUser: boolean
}

export const Message = styled.li<IMessage>`
  padding: 0 15px 7px 15px;
  max-width: 70%;
  width: fit-content;
  ${(props) =>
    props.isUser &&
    `
        align-self: flex-end;
        text-align:right;`}

  &:first-child {
    padding-top: 15px;
  }
  &:last-child {
    padding-bottom: 15px;
  }
  div {
    display: block;
    border-radius: 10px;
    padding: 10px;
    width: 100%;
    overflow-wrap: break-word;
    ${(props) =>
      props.isUser
        ? `background: ${props.theme.palette.primary.main};
        align-self: flex-end;
        text-align:right;`
        : `background: ${props.theme.palette.secondary.main};`}

    strong {
      display: block;
      font-size: 1.5rem;
      padding-bottom: 5px;
    }
  }
`
