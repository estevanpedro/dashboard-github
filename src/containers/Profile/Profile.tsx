import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useTranslation } from 'react-i18next';

import Link from '../../components/Link'
import Title, { SubTitle } from '../../components/Title'
import Text from '../../components/Text'

import Api from '../../Api'

import { RootState } from '../../redux/rootReducer'

import { updateUserInfo } from '../../redux/ducks/user'
import { setLoading } from '../../redux/ducks/loading'

import { ProfileContainer, ProfileField, TextColored, TextColoredSmall, ButtonSimple, LanguageField, ButtonLanguage } from './elements'

const Profile = () => {
  const { t, i18n } = useTranslation()
  const [showToken, setShowToken] = useState(false)
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const { user_id, username, email, user_type } = useSelector(
    (state: RootState) => state.user
  )

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        dispatch(setLoading(true))
        const response = await Api.getProfile(secretToken)
        dispatch(setLoading(false))

        const userData = {
          user_id: response.data.user.id || 'USER_ID_NOT_FOUND',
          username: response.data.user.username || 'USERNAME_NOT_FOUND',
          email: response.data.user.email || 'EMAIL_NOT_FOUND',
          timezone: response.data.user.timezone || 'TIMEZONE_NOT_FOUND',
          user_type: response.data.user.user_type || 'USER_TYPE_NOT_FOUND',
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
        <SubTitle>Password</SubTitle>
        <Link to='/forgot'>Change Password</Link>
      </ProfileField>

      <ProfileField>
        <SubTitle>User type</SubTitle>
        <Text>{user_type}</Text>
      </ProfileField>

      <ProfileField>
        <SubTitle>User ID</SubTitle>
        <Text>{user_id}</Text>
      </ProfileField>

      <ProfileField>
        <SubTitle>API TOKEN</SubTitle>

        <ButtonSimple onClick={() => { setShowToken(OldState => !OldState) }}>
          {showToken ? <TextColoredSmall>{secretToken}</TextColoredSmall> : <TextColored>Find token</TextColored>}
        </ButtonSimple>
      </ProfileField>

      <ProfileField>
        <SubTitle>Language</SubTitle>
        <LanguageField >
          <ButtonLanguage type='button' onClick={() => { i18n.changeLanguage('en'); }}>
            <img src={require('../../assets/icons/en.svg')} width="40" ></img>
          </ButtonLanguage>

          <ButtonLanguage type='button' onClick={() => { i18n.changeLanguage('pt'); }}>
            <img src={require('../../assets/icons/pt.svg')} width="40" ></img>
          </ButtonLanguage>
        </LanguageField>
      </ProfileField>


    </ProfileContainer>


  )
}

export default Profile
