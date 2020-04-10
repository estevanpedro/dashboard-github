import styled from 'styled-components'
import InputRange from 'react-input-range'
import './input-range.css'

export default styled(InputRange)<SliderProps>`
  width: ${props => props.width || '100%'};
`

interface SliderProps {
  width?: string
}
