import styled from 'styled-components'

export const Box = styled.div`
  width: 40%;
  border-right: 1px solid ${(props) => props.theme.common.white};

  ul {
    max-height: 440px;
    overflow: auto;
    li {
      padding: 10px 0 10px 18px;
      border-bottom: 1px solid ${(props) => props.theme.common.white};
      margin: 0 10px;
      overflow-wrap: anywhere;
      position: relative;

      &:before {
        content: '';
        position: absolute;
        width: 10px;
        height: 10px;
        background-color: green;
        border-radius: 50%;
        top: 15px;
        left: 0;
      }
    }
  }
`
