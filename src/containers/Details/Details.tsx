import React, { useState, useEffect } from 'react'
import Title, { SubTitle } from '../../components/Title'
import { useSelector, useDispatch } from 'react-redux'
import { Container } from './elements'
import Api from '../../Api';
import { RootState } from '../../redux/rootReducer'
import { setLoading } from '../../redux/ducks/loading'

const example = {
  id: 34717111,
  login: "estevanpedro",
  avatar_url: "https://avatars0.githubusercontent.com/u/34717111?v=4",
  created_at: "2017-12-20T15:40:27Z",
}

const Details = () => {
  const dispatch = useDispatch()
  const { username } = useSelector((state: RootState) => state.username)
  const [userDetails, setUserDetails] = useState(example)

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        dispatch(setLoading(true))
        const response = await Api.getUserDetails(username)
        dispatch(setLoading(false))
        setUserDetails(response)
        console.log(response)
      } catch (e) {
        dispatch(setLoading(false))
        console.error(e)
      }
    }

    fetchUserDetails()
  }, [username])


  return (
    <Container>
      <Title>
        Username: {username}
      </Title>
      {/** TODO MAP */}
      <SubTitle>Id: {userDetails.id}</SubTitle>
      <SubTitle>Login: {userDetails.login}</SubTitle>
      <SubTitle>Avatar URL: {userDetails.avatar_url}</SubTitle>
      <SubTitle>Created at: {userDetails.created_at}</SubTitle>
    </Container>
  )
}

export default Details
