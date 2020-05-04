import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { navigate } from '@reach/router'
import { useSelector } from 'react-redux'
import { Formik, FormikErrors } from 'formik'
import { RiBankLine } from 'react-icons/ri'
import { TiTick } from 'react-icons/ti'
import { useTranslation } from 'react-i18next'

import Button from '../../components/Button'
import Input from '../../components/Input'
import Link from '../../components/Link'
import LinkToInputs from '../../components/LinkToInputs'
import Error from '../../components/Error'
import { SubTitle } from '../../components/Title'

import Api from '../../Api'

import { changeSecretToken, setUserId } from '../../redux/ducks/auth'
import { setLoading } from '../../redux/ducks/loading'

import { RootState } from '../../redux/rootReducer'

import {
  LoginContainer,
  LoginForm,
  LoginCDA,
  SmallText,
  CDAText,
  LanguageField,
  ButtonLanguage,
} from './elements'

const Login = () => {
  const [apiError, setApiError] = useState('')
  const [CDA, setCDA] = useState<boolean>(false)
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()
  const { t, i18n } = useTranslation()

  useEffect(() => {
    if (secretToken) {
      navigate('/my-schemes')
    }
  }, [secretToken])

  const formInitialValues = {
    username: '',
    password: '',
    user_type: 'splitmaster',
  }

  type LoginValues = typeof formInitialValues

  const handleSubmit = async (values: LoginValues) => {
    let userType = 'splitmaster'
    if (CDA === true) {
      userType = 'cda'
    }

    const userData = {
      username: values.username,
      password: values.password,
      user_type: userType,
    }

    try {
      dispatch(setLoading(true))
      const response = await Api.login(userData)
      dispatch(setLoading(false))

      if (response.data.error) {
        setApiError(response.data.error)
        return
      }

      if (response.data.access_token) {
        dispatch(changeSecretToken(response.data.access_token))
        dispatch(setUserId(response.data.user.id))
        navigate('/my-schemes')
      }
    } catch (err) {
      dispatch(setLoading(false))
      setApiError('Invalid username or password!')
      console.error(err)
    }
  }

  const loginValidation = (values: LoginValues) => {
    const { username, password } = values
    // TODO: improve validation
    const errors: FormikErrors<LoginValues> = {}

    if (username.length < 3) {
      errors.username = 'Your username needs to have at least 3 characters'
    }

    if (password.length < 6) {
      errors.password = 'Your password needs to have at least 6 characters'
    }

    return errors
  }

  return (
    <Formik
      initialValues={formInitialValues}
      onSubmit={handleSubmit}
      validate={loginValidation}
    >
      {({ values, errors, touched, handleChange, handleSubmit }) => (
        <LoginForm onSubmit={handleSubmit}>
          <LanguageField>
            <ButtonLanguage
              type='button'
              onClick={() => {
                i18n.changeLanguage('en')
              }}
            >
              <img src={require('../../assets/icons/en.svg')} width='40'></img>
            </ButtonLanguage>

            <ButtonLanguage
              type='button'
              onClick={() => {
                i18n.changeLanguage('pt')
              }}
            >
              <img src={require('../../assets/icons/pt.svg')} width='40'></img>
            </ButtonLanguage>
          </LanguageField>

          {CDA ? (
            <SubTitle>{t('Login with your Splitcoin account')}</SubTitle>
          ) : (
              <SubTitle>{t('Login with your CDA account')}</SubTitle>
            )}

          <LoginContainer>
            <Input
              label={t('login.username')}
              name='username'
              value={values.username}
              onChange={handleChange}
              type='text'
              error={touched.username && errors.username ? errors.username : ''}
            />
            <Input
              label={t('login.password')}
              name='password'
              value={values.password}
              onChange={handleChange}
              type='password'
              error={touched.password && errors.password ? errors.password : ''}
            />
            <LinkToInputs to='/forgot'>{t('login.forgotPassword')}</LinkToInputs>
            <Error>{apiError}</Error>
            <Button type='submit' margin='0 0 20px 0'>
              {t('login.Title')}
            </Button>
            <Link to='/sign-up'>{t('login.createanaccount')}</Link>

            <SmallText> {t('login.orLoginWithCda')} </SmallText>
            <LoginCDA
              type='button'
              hover={CDA}
              onClick={() => {
                setCDA(last => !last)
              }}
            >
              {CDA ? (
                <>
                  <CDAText>{t('login.readytoLoginCda')}</CDAText>
                  <TiTick size={25} />
                </>
              ) : (
                  <>
                    <CDAText>Capital Digital Aberto</CDAText>
                    <RiBankLine size={25} />
                  </>
                )}
            </LoginCDA>
          </LoginContainer>
        </LoginForm>
      )}
    </Formik>
  )
}

export default Login
