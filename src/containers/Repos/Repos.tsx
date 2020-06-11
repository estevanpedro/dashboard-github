import React, { useState, useEffect } from 'react'
import Title, { SubTitle } from '../../components/Title'
import { Formik, FormikErrors } from 'formik'
import Button from '../../components/Button'
import Input from '../../components/Input';
import {
  Form,
  Container,
} from './elements'
import Api from '../../Api';
import { RootState } from '../../redux/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
const Repos = () => {
  const { username } = useSelector((state: RootState) => state.username)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Api.getUserRepos(username)
        console.log(response)
      } catch (e) {
        console.error(e)
      }
    }

    fetchUserDetails()
  }, [])

  return (
    <Container>
      <SubTitle>Username: {username}</SubTitle>
    </Container>
  )
}

export default Repos
