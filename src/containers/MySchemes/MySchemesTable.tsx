import React from 'react'
import { navigate } from '@reach/router'
import { Formik, FormikErrors } from 'formik'
import { useSelector, useDispatch } from 'react-redux'

import { Button, Title, Input } from '../../components'
import {
  TableContainner,
  Menu,
  Containner,
  NewButton,
  InfoText,
  Area,
  Select,
} from './elements'

import TableTitles from '../../components/Table/TableTitles'
import TableOptions from '../../components/Table/TableOptions'
import Modal from '../../components/Modal'

import Api from '../../Api'
import { SchemeInfo } from '../../apiTypes'
import { RootState } from '../../redux/rootReducer'

import { setLoading } from '../../redux/ducks/loading'
export interface Props {
  Tab: (p: string) => JSX.Element[] | undefined
  colorBalance: string
  setcolorBalance: React.Dispatch<React.SetStateAction<string>>
  colorTransaction: string
  setColorTransaction: React.Dispatch<React.SetStateAction<string>>
  preference: string
  setPreference: React.Dispatch<React.SetStateAction<string>>
}

const MySchemes = ({
  Tab,
  colorBalance,
  setcolorBalance,
  colorTransaction,
  setColorTransaction,
  preference,
  setPreference,
}: Props) => {
  const { secretToken } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()

  const initialNewSchemeValues = {
    name: '',
    payout: '0.00001',
    visibility: 'Public',
  }

  type NewSchemeValues = typeof initialNewSchemeValues

  const handleNewSchemeSubmit = async (values: NewSchemeValues) => {
    const { name, payout, visibility } = values

    const newSchemeInfo: SchemeInfo = {
      name,
      fee: false,
      payout,
      visibility: visibility === 'Public' ? 'public' : 'private',
      tree: {
        id: '1',
        name: 'root',
        type: 'root',
        children: [],
      },
    }

    try {
      dispatch(setLoading(true))
      const response = await Api.createScheme(secretToken, newSchemeInfo)
      dispatch(setLoading(false))

      if (response.data.id) {
        const id = response.data.id
        navigate(`/scheme/${id}`)
      }
    } catch (err) {
      dispatch(setLoading(false))
      console.error(err)
    }
  }

  const validadteNewScheme = (values: NewSchemeValues) => {
    const { name, payout } = values

    const errors: FormikErrors<NewSchemeValues> = {}

    if (name.length < 1) {
      errors.name = "Name can't be empty!"
    }

    if (Number(payout) <= 0) {
      errors.payout = 'Payout has to be more than zero!'
    }

    return errors
  }

  return (
    <Containner>
      <Title>My Schemes</Title>
      <Menu>
        <TableOptions
          props='Balance'
          color={colorBalance}
          onClick={() => {
            setPreference('balance')
            setcolorBalance(colorBalance ? '' : '#')
            setColorTransaction('')
          }}
        />
        <TableOptions
          props='Last Transaction'
          color={colorTransaction}
          onClick={() => {
            setPreference('lastTransaction')
            setcolorBalance('')
            setColorTransaction(colorTransaction ? '' : '#')
          }}
        />
      </Menu>
      <TableTitles />
      <TableContainner>{Tab(preference)}</TableContainner>

      <Modal
        title={'New Scheme'}
        trigger={<NewButton onClick={() => { }}>New Scheme</NewButton>}
      >
        <Area>
          <Title>Create new scheme</Title>
          <Formik
            initialValues={initialNewSchemeValues}
            onSubmit={handleNewSchemeSubmit}
            validate={validadteNewScheme}
          >
            {({ values, errors, touched, handleChange, handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Input
                    label='Scheme Name'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    type='text'
                    error={touched.name && errors.name ? errors.name : ''}
                  />
                  <Input
                    label='Payout'
                    name='payout'
                    value={values.payout}
                    onChange={handleChange}
                    type='number'
                    error={touched.payout && errors.payout ? errors.payout : ''}
                  />
                  <InfoText>Private or Public?</InfoText>
                  <Select
                    name='visibility'
                    onChange={handleChange}
                    value={values.visibility}
                  >
                    <option value='public'>Public</option>
                    <option value='private'>Private</option>
                  </Select>
                  {/* <Link
                    to={'/scheme/' + schemeName}
                    state={{ schemeName: schemeName, isPublic: isPublic }}
                  > */}
                  <Button type='submit' align='flex-end'>
                    Create
                  </Button>
                  {/* </Link> */}
                </form>
              )
            }}
          </Formik>
        </Area>
      </Modal>
    </Containner>
  )
}

export default MySchemes
