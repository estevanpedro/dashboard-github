import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../redux/rootReducer'

import { LoadingContainer, Loader } from './elements'

const Loading = () => {
  const { isLoading } = useSelector((state: RootState) => state.loading)
  return (
    <LoadingContainer isLoading={isLoading}>
      <Loader />
    </LoadingContainer>
  )
}

export default Loading
