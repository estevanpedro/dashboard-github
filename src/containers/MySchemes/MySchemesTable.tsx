import React from 'react'
import { navigate } from '@reach/router'
import { Formik } from 'formik'
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
  colorCurrency: string
  setcolorCurrency: React.Dispatch<React.SetStateAction<string>>
  colorTransaction: string
  setColorTransaction: React.Dispatch<React.SetStateAction<string>>
  preference: string
  setPreference: React.Dispatch<React.SetStateAction<string>>
}

const MySchemes = ({
  Tab,
  colorBalance,
  setcolorBalance,
  colorCurrency,
  setcolorCurrency,
  colorTransaction,
  setColorTransaction,
  preference,
  setPreference,
}: Props) => {
  const { secretToken } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()

  const initialNewSchemeValues = {
    name: '',
    payout: '0.1',
    visibility: 'Public',
  }

  const handleNewSchemeSubmit = async (
    values: typeof initialNewSchemeValues
  ) => {
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
            setcolorCurrency('')
            setColorTransaction('')
          }}
        />
        <TableOptions
          props='Currency'
          color={colorCurrency}
          onClick={() => {
            setPreference('currency')
            setcolorBalance('')
            setcolorCurrency(colorCurrency ? '' : '#')
            setColorTransaction('')
          }}
        />
        <TableOptions
          props='Last Transaction'
          color={colorTransaction}
          onClick={() => {
            setPreference('lastTransaction')
            setcolorBalance('')
            setcolorCurrency('')
            setColorTransaction(colorTransaction ? '' : '#')
          }}
        />
      </Menu>
      <TableTitles />
      <TableContainner>{Tab(preference)}</TableContainner>

      <Modal
        title={'New Scheme'}
        trigger={<NewButton onClick={() => {}}>New Scheme</NewButton>}
      >
        <Area data-testid='newSchemeModal'>
          <Title>Create new scheme</Title>
          <Formik
            initialValues={initialNewSchemeValues}
            onSubmit={handleNewSchemeSubmit}
          >
            {({ values, handleChange, handleSubmit }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <Input
                    label='Scheme Name'
                    name='name'
                    value={values.name}
                    onChange={handleChange}
                    type='text'
                  />
                  <Input
                    label='Payout'
                    name='payout'
                    value={values.payout}
                    onChange={handleChange}
                    type='number'
                  />
                  <InfoText htmlFor='privateSelector'>
                    Private or Public?
                  </InfoText>
                  <Select
                    name='visibility'
                    onChange={handleChange}
                    value={values.visibility}
                    id='privateSelector'
                  >
                    <option value='public'>Public</option>
                    <option value='private'>Private</option>
                  </Select>
                  <Button type='submit' align='flex-end'>
                    Create
                  </Button>
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
