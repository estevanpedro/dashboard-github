import React from 'react'
import Title from '../../components/Title'
import { TableContainner, Menu, Containner } from './elements'
import TableTitles from '../../components/Table/TableTitles'
import TableOptions from '../../components/Table/TableOptions'

const Library = ({
  Tab,
  colorBalance,
  setcolorBalance,
  colorCurrency,
  setcolorCurrency,
  colorTransaction,
  setColorTransaction,
  preference,
  setPreference,
}: {
  Tab: any;
  colorBalance: string;
  setcolorBalance: any;
  colorCurrency: string;
  setcolorCurrency: any;
  colorTransaction: string;
  setColorTransaction: any;
  preference: string;
  setPreference: any;
}) => {
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
            setColorTransaction('')
          }}
        />
        <TableOptions
          props="Currency"
          color={colorCurrency}
          onClick={() => {
            setPreference('currency')
            setcolorBalance(null)
            setcolorCurrency(colorCurrency ? null : '#')
            setColorTransaction('')
          }}
        />
        <TableOptions
          props="Last Transaction"
          color={colorTransaction}
          onClick={() => {
            setPreference('lastTransaction')
            setcolorBalance(null)
            setcolorCurrency(null)
            setColorTransaction(colorTransaction ? '' : '#')
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