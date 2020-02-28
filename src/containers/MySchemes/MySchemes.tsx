import React from 'react'
import Modal from '../../components/Modal'
import Text from '../../components/Text'


const MySchemes = () => {

  function ToolFunctions() {
    return <Text>(TODO) Functions to show components</Text>
  }

  return (
    <Modal tool={'Tool'} description={'Description'} Functions={ToolFunctions}/>
  )
}

export default MySchemes