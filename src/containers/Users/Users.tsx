import React, { useEffect, useState } from 'react'
import Title from '../../components/Title'
import { Container, TableText, ValuesField, IdText, Colunm, Row } from './elements'
import IconButton from '../../components/IconButton'
import Api from '../../Api';
import { Link } from '@reach/router'
import Arrow from '../../assets/icons/right-arrow.svg'
import { setUsername } from '../../redux/ducks/username'
import { useDispatch } from 'react-redux'

const Users = () => {
  const dispatch = useDispatch()
  const [userList, setUserList] = useState([])
  const [userListToUpdate, setUserListToUpdate] = useState(userList)
  const [page, setPage] = useState(1)
  console.log(page)
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await Api.getUserList(130)
        setUserList(response.users_list)
        setUserListToUpdate(response.users_list.slice(0, 15))
      } catch (e) {
        console.error(e)
      }
    }

    fetchUserList()
  }, [])



  function createListTitles() {
    return (
      <ValuesField>
        <IdText width='110px'>
          ID
      </IdText>
        <TableText width='100px'>Login</TableText>
        <TableText width='50px'>Details</TableText>
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
          <TableText width='100px'>{info.login}</TableText>
          <Colunm width={'10px'}>
            <Link to={'/details'}>
              <IconButton
                icon={Arrow}
                onClick={() => {
                  dispatch(setUsername(info.login))
                  console.log('username', info.login)
                }}
              />
            </Link>
          </Colunm>
        </ValuesField>
      )
    }
    const Map = userListToUpdate.map((info: any, id: number) => {
      return <Row info={info} id={id} key={id} />
    })
    return Map
  }

  function buttonsPage() {
    return (
      <Row>
        <button onClick={() => {
          setPage(1)
          setUserListToUpdate(userList.slice(0, 15))
        }}>
          <IdText width='50px'>
            Page 1
      </IdText>
        </button>
        <button onClick={() => {
          setPage(2)
          setUserListToUpdate(userList.slice(15, userList.length))
        }}>
          <IdText width='50px'>
            Page 2
      </IdText>
        </button>
      </Row>
    )
  }
  return (
    <Container>
      <Title>Github User List</Title>
      {buttonsPage()}
      {createListTitles()}
      {createList()}

    </Container>
  )
}

export default Users