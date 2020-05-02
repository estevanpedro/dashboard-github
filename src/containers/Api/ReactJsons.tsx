import React, {useContext} from 'react'
import { ThemeContext } from 'styled-components'
import ReactJson from 'react-json-view'

const ReactJsons = (props: any) => {
    const themeContext = useContext(ThemeContext)
    return (
        <ReactJson
      theme={
        themeContext.colors.primary === '#FF9140'
          ? 'summerfruit:inverted'
          : 'ashes'
      }
        src={props}
        // style={{ backgroundColor: themeContext.colors.secondaryBg }}
        displayObjectSize={false}
        displayDataTypes={false}
        name={false}
        style={{width: 700, backgroundColor: themeContext.colors.secondaryBg}}
      />
    )
}
export default ReactJsons