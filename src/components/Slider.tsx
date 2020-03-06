import React from 'react'
import styled from 'styled-components'
import InputRange from 'react-input-range'
import './input-range.css'

import ds from '../design/designSystem'

export default styled(InputRange)<SliderProps>`
  width: ${props => props.width || '100%'};
`

interface SliderProps {
  width?: string
}
