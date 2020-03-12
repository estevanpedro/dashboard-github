import React from 'react'
import { useSelector } from 'react-redux'

import Title from '../../components/Title'

import { RootState } from '../../redux/rootReducer'

import SchemeNode from './SchemeNode'
import { SchemeContainer } from './elements'

const mockData = {
  name: 'Split 01',
}

const SchemeMap = () => {
  const { rootNode } = useSelector((state: RootState) => state.schemeMap)
  return (
    <>
      <Title>SchemeMap</Title>
      <SchemeContainer>
        <SchemeNode nodeData={rootNode} />
      </SchemeContainer>
    </>
  )
}

export default SchemeMap
