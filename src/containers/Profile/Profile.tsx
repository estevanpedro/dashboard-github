import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Link from '../../components/Link'
import Title, { SubTitle } from '../../components/Title'
import Text from '../../components/Text'

import Api from '../../Api'

import { RootState } from '../../redux/rootReducer'

import { updateUserInfo } from '../../redux/ducks/user'

import { ProfileContainer, ProfileField } from './elements'

const Profile = () => {
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const { username, email, timezone } = useSelector(
    (state: RootState) => state.user
  )

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await Api.getProfile(secretToken)

        const userData = {
          username: response.data.user.username || 'USERNAME_NOT_FOUND',
          email: response.data.user.email || 'EMAIL_NOT_FOUND',
          timezone: response.data.user.timezone || 'TIMEZONE_NOT_FOUND',
        }

        dispatch(updateUserInfo(userData))
      } catch (e) {
        console.error(e)
      }
    }

    fetchProfile()
  }, [dispatch, secretToken])

  return (
    <ProfileContainer>
      <Title>Profile</Title>
      <ProfileField>
        <SubTitle>Username</SubTitle>
        <Text>{username}</Text>
      </ProfileField>
      <ProfileField>
        <SubTitle>Email</SubTitle>
        <Text>{email}</Text>
      </ProfileField>
      <ProfileField>
        <SubTitle>Timezone</SubTitle>
        <Text>{timezone}</Text>
      </ProfileField>
      <ProfileField>
        <SubTitle>Password</SubTitle>
        <Link to='/'>Change Password</Link>
      </ProfileField>
      <ProfileField>
        <SubTitle>API Token</SubTitle>
        <Link to='/'>Create Api Token</Link>
      </ProfileField>
      <ProfileField>
        <SubTitle>Social Auth</SubTitle>
        <Link to='/'>Manage Connections</Link>
      </ProfileField>
    </ProfileContainer>
  )
}

export default Profile
