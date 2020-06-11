import React, { useState, useEffect } from 'react'
import Title, { SubTitle } from '../../components/Title'
import { TableText, ValuesField, IdText, Colunm } from '../Users/elements'
import { Link } from '@reach/router'
import Arrow from '../../assets/icons/right-arrow.svg'
import IconButton from '../../components/IconButton'
import {
  Form,
  Container,
} from './elements'
import Api from '../../Api';
import { RootState } from '../../redux/rootReducer'
import { useSelector, useDispatch } from 'react-redux'
const example = {
  id: 157354846,
  name: "estevanpedro",
  html_url: "https://avatars0.githubusercontent.com/u/34717111?v=4",
}

const Repos = () => {
  const { username } = useSelector((state: RootState) => state.username)
  const [userRepos, setUserRepos] = useState([])
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Api.getUserRepos(username)
        setUserRepos(response)
        console.log(response)
      } catch (e) {
        console.error(e)
      }
    }
    fetchUserDetails()
  }, [username])

  // 
  function createListTitles() {
    return (
      <ValuesField>
        <IdText width='110px'>
          ID
      </IdText>
        <TableText width='100px'>Name</TableText>
        <TableText width='40px'>URL</TableText>
      </ValuesField>
    )
  }
  function createList() {
    const Row = ({ info, id }: { info: any, id: any }) => {
      return (

        <ValuesField pair={id % 2 === 0 ? true : false}>
          <IdText width='110px'>
            {info.id}
          </IdText>
          <TableText width='100px'>{info.name}</TableText>
          <Colunm width={'10px'}>
            <IconButton
              icon={Arrow}
              onClick={() => {
                window.open(info.html_url, "_blank")
              }}
            />
          </Colunm>
        </ValuesField>
      )
    }
    const Map = userRepos.map((info: any, id: number) => {
      return <Row info={info} id={id} key={id} />
    })
    return Map
  }
  // 
  return (
    <Container>
      <Title>Username: {username}</Title>
      {createListTitles()}
      {createList()}
    </Container>
  )
}

export default Repos
