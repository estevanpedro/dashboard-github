import React, { useState } from 'react'
import Title from '../../components/Title'
import Text from '../../components/Text'
import Input from '../../components/Input'
import {
  TableContainner,
  Menu,
  Containner,
  NewButton,
  InfoText,
  Area,
  Select,
  ButtonConfirm,
} from './elements'
import TableTitles from '../../components/Table/TableTitles'
import TableOptions from '../../components/Table/TableOptions'
import { MySchemesProps } from './index'
import Modal from '../../components/Modal'
import { Link } from '@reach/router'

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
}: MySchemesProps) => {
  function ToolFunctions() {
    return <Title>(TODO) Functions to show components</Title>
  }
  const [schemeName, setSchemeName] = useState('')
  const [isPublic, setIsPublic] = useState()
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
        children={
          <Area>
            <Title>Create new Scheme</Title>

            <Input
              label='Scheme name'
              value={schemeName}
              onChange={(e: any) => {
                setSchemeName(e.target.value)
              }}
              type='text'
            />
            <InfoText>Private or Public?</InfoText>
            <Select
              onChange={(e: any) => {
                if (e.target.value === 'public') {
                  setIsPublic(true)
                } else {
                  setIsPublic(false)
                }
              }}
            >
              <option value='public'>Public</option>
              <option value='private'>Private</option>
            </Select>
            <br />
            <Link
              to={'/scheme/' + schemeName}
              state={{ schemeName: schemeName, isPublic: isPublic }}
            >
              <ButtonConfirm onClick={() => {}}>Create</ButtonConfirm>
            </Link>
          </Area>
        }
      />
    </Containner>
  )
}

export default MySchemes
