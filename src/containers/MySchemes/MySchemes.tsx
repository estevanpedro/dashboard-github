import React from 'react'
import Title from '../../components/Title'
import { TableContainner, Menu, Containner, NewButton } from './elements'
import TableTitles from '../../components/Table/TableTitles'
import TableOptions from '../../components/Table/TableOptions'
import { MySchemesProps } from './index'
import ModalSmall from '../../components/ModalSmall'
import Modal from '../../components/Modal'

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
  return (
    <Containner>
      <Title>Library</Title>
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
      <NewButton onClick={() => { }}>New Scheme</NewButton>

      <Modal title={'aa'} trigger={<button>aaaa</button>} children={<div><p>aa</p></div>} />
      <ModalSmall title={'Tool'} description={'Description'} Functions={ToolFunctions} />
    </Containner>
  )
}

export default MySchemes
