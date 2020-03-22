import React from 'react'
import Title from '../../components/Title'
<<<<<<< HEAD
import ListRow from '../../components/ListRow'
import { ContainerList } from './elements'
const Library = () => {
  interface Props {
    schemeName: string
    schemeCreator?: string
    balance: number | any
    payout: number | any
    lastTransaction: number | string
    id: number
  }

  const [libInfoExample, setLibInfoExample] = useState<Props[]>([
    {
      schemeName: 'Mensalidade',
      schemeCreator: 'Jacinto',
      balance: 1.0,
      payout: 0.008,
      lastTransaction: '01/03/2020',
      id: 1,
    },
    {
      schemeName: 'Payback 2',
      schemeCreator: 'Abraham',
      balance: 0.1,
      payout: 0.008,
      lastTransaction: '02/03/2020',
      id: 2,
    },
    {
      schemeName: 'Signiture ',
      schemeCreator: 'Albert Einstein',
      balance: 0.001,
      payout: 0.008,
      lastTransaction: '03/03/2020',
      id: 3,
    },
  ])

  const listLibrary = libInfoExample.map((info: Props) => {
    return ListRow(info)
  })
=======
import { TableContainner, Menu, Containner } from './elements'
import TableTitles from '../../components/Table/TableTitles'
import TableOptions from '../../components/Table/TableOptions'
import { LibraryProps } from './index'
>>>>>>> e0641836de0a685228ea54741a03b60df17255db

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
}: LibraryProps) => {
  return (
    <Containner>
      <Title>Library</Title>
<<<<<<< HEAD
      <ContainerList>{listLibrary}</ContainerList>
    </div>
=======
      <Menu>
        <TableOptions
          props="Balance"
          color={colorBalance}
          onClick={() => {
            setPreference('balance')
            setcolorBalance(colorBalance ? '' : '#')
            setcolorCurrency('')
            setColorTransaction('')
          }}
        />
        <TableOptions
          props="Currency"
          color={colorCurrency}
          onClick={() => {
            setPreference('currency')
            setcolorBalance('')
            setcolorCurrency(colorCurrency ? '' : '#')
            setColorTransaction('')
          }}
        />
        <TableOptions
          props="Last Transaction"
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
      <TableContainner>
        {Tab(preference)}
      </TableContainner>
    </Containner>
>>>>>>> e0641836de0a685228ea54741a03b60df17255db
  )
}

export default Library