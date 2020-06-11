import React, { useState, useEffect } from 'react'
import Title, { SubTitle } from '../../components/Title'
import { useSelector, useDispatch } from 'react-redux'
import {
  Form,
  Container,
} from './elements'
import Api from '../../Api';
import { RootState } from '../../redux/rootReducer'

const Details = () => {
  const { username } = useSelector((state: RootState) => state.username)
  // const [username, setUsername] = useState('')

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Api.getUserDetails(username)
        console.log(response)
      } catch (e) {
        console.error(e)
      }
    }

    fetchUserDetails()
  }, [])


  return (
    <Container>
      <SubTitle>
        Username: {username}
      </SubTitle>
      {/** TODO MAP */}
    </Container>
  )
}

export default Details
