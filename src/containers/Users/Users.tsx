import React, { useEffect, useState } from 'react'
import Title, { SubTitle } from '../../components/Title'
import { ProfileContainer } from './elements'
import Api from '../../Api';
import ReactPaginate from 'react-paginate';

const Users = () => {
  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await Api.getUserList(130)
        console.log(response)
      } catch (e) {
        console.error(e)
      }
    }

    fetchUserDetails()
  }, [])



  return (
    <ProfileContainer>
      <Title>Github User List</Title>
      <ReactPaginate
        pageCount={10}
        pageRangeDisplayed={5}
        marginPagesDisplayed={5}

      ></ReactPaginate>
    </ProfileContainer>
  )
}

export default Users
