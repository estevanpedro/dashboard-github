import React, { useEffect, useState } from 'react'
import Title, { SubTitle } from '../../components/Title'
import { Container, TableText, ValuesField, IdText, Colunm } from './elements'
import IconButton from '../../components/IconButton'
import Api from '../../Api';
import { Link } from '@reach/router'
import ReactPaginate from 'react-paginate';
import Arrow from '../../assets/icons/right-arrow.svg'
import { setUsername } from '../../redux/ducks/username'
import { useDispatch } from 'react-redux'

const example = [
  {
    id: 101,
    login: "jvantuyl"
  },
  {
    id: 102,
    login: "jvantuyl2",
  },
  {
    id: 103,
    login: "jvantuyl3",
  }
]

const Users = () => {
  const dispatch = useDispatch()
  const [userList, setUserList] = useState([])
  useEffect(() => {
    const fetchUserList = async () => {
      try {
        const response = await Api.getUserList(130)
        setUserList(response.users_list)
        console.log(response.users_list)
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
        <TableText width='50px'></TableText>
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
    const Map = userList.map((info: any, id: number) => {
      return <Row info={info} id={id} key={id} />
    })
    return Map
  }
  return (
    <Container>
      <Title>Github User List</Title>
      {createListTitles()}
      {createList()}
    </Container>
  )
}

export default Users

// <ReactPaginate
//         pageCount={10}
//         pageRangeDisplayed={5}
//         marginPagesDisplayed={5}

//       >

//       </ReactPaginate>