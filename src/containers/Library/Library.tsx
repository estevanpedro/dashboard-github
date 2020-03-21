import React, { useState } from 'react'
import Title from '../../components/Title'
import Table from '../../components/Table'
import { TableContainner, Menu, Containner } from './elements'
import TableTitles from '../../components/Table/TableTitles'
import TableOptions from '../../components/Table/TableOptions'

interface Props {
  schemeName: string
  schemeCreator?: string
  balance: number | any
  payout: number | any
  lastTransaction: number | string
  id: number
  currency: string
}

const Library = (object: any) => {
  const [colorBalance, setcolorBalance] = useState()
  const [colorCurrency, setcolorCurrency] = useState()
  const [colorTransaction, setTransaction] = useState('#')
  const [preference, setPreference] = useState('lastTransaction')


  function Tab(props: string) {
    if (props === 'balance') {
      object.libInfoExample.sort(function compare(a: any, b: any) {
        if (a.balance < b.balance) {
          return 1
        }
        if (a.balance > b.balance) {
          return -1
        }
        return 0
      })
      const balance = object.libInfoExample.map((info: Props, id: number) => {
        return <Table splitInfo={info} id={id} />
      })
      return balance
    }

    else if (props === 'currency') {
      object.libInfoExample.sort(function compare(a: any, b: any) {
        if (a.currency < b.currency) {
          return 1
        }
        if (a.currency > b.currency) {
          return -1
        }
        return 0
      })
      const currency = object.libInfoExample.map((info: Props, id: number) => {
        return <Table splitInfo={info} id={id} />
      })
      return currency
    }

    else if (props === 'lastTransaction') {
      object.libInfoExample.sort(function compare(a: any, b: any) {
        if (parseInt(a.lastTransaction) < parseInt(b.lastTransaction)) {
          return 1
        }
        if (parseInt(a.lastTransaction) > parseInt(b.lastTransaction)) {
          return -1
        }
        return 0
      })
      const lastTransaction = object.libInfoExample.map((info: Props, id: number) => {
        return <Table splitInfo={info} id={id} />
      })
      return lastTransaction
    }
  }

  return (
    <Containner>
      <Title>Library</Title>

      <Menu>
        <TableOptions
          props="Balance"
          color={colorBalance}
          onClick={() => {
            setPreference('balance')
            setcolorBalance(colorBalance ? null : '#')
            setcolorCurrency('')
            setTransaction('')
          }}
        />
        <TableOptions
          props="Currency"
          color={colorCurrency}
          onClick={() => {
            setPreference('currency')
            setcolorBalance(null)
            setcolorCurrency(colorCurrency ? null : '#')
            setTransaction('')
          }}
        />
        <TableOptions
          props="Last Transaction"
          color={colorTransaction}
          onClick={() => {
            setPreference('lastTransaction')
            setcolorBalance(null)
            setcolorCurrency(null)
            setTransaction(colorTransaction ? '' : '#')
          }}
        />
      </Menu>

      <TableTitles />
      <TableContainner>
        {Tab(preference)}
      </TableContainner>
    </Containner>
  )
}

export default Library