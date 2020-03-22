import styled from 'styled-components'

import ds from '../design/designSystem'

export default styled.h1`
  font-size: ${ds.fontSize.title};
  color: ${ds.colors.contrast};
  margin-bottom: 40px;
`

export const SubTitle = styled.h1`
  font-size: ${ds.fontSize.big};
  color: ${ds.colors.contrast};
  margin: 20px 0;
`
