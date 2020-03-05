import styled from 'styled-components'

import ds from '../../../design/designSystem'

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const Node = styled.button<NodeProps>`
  width: 130px;
  height: 82px;
  border-radius: 4px;
  background-color: ${props =>
    props.primary ? ds.colors.primary : ds.colors.secondary};
  color: ${ds.colors.background};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  font-size: ${ds.fontSize.medium};
  font-family: 'Roboto Condensed', sans-serif;
  font-weight: bold;
  outline: none;
  box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.25);
  &:active {
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  }
`

export interface NodeProps {
  primary?: boolean
}

export const InputContainer = styled.div`
  width: 400px;
  height: 400px;
  overflow: scroll;
`
