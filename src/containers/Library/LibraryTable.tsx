import React from 'react'
import Title from '../../components/Title'
import { TableContainner, Menu, Containner } from './elements'
import TableTitles from '../../components/Table/TableTitles'
import TableOptions from '../../components/Table/TableOptions'
import { useTranslation } from 'react-i18next'

export interface Props {
  Tab: (p: string) => JSX.Element[] | undefined
  colorBalance: string
  setcolorBalance: React.Dispatch<React.SetStateAction<string>>
  colorTransaction: string
  setColorTransaction: React.Dispatch<React.SetStateAction<string>>
  preference: string
  setPreference: React.Dispatch<React.SetStateAction<string>>
}

const LibraryTable = ({
  Tab,
  colorBalance,
  setcolorBalance,
  colorTransaction,
  setColorTransaction,
  preference,
  setPreference,
}: Props) => {
  const { t } = useTranslation()
  return (
    <Containner>
      <Title>Library</Title>
      <Menu>
        <TableOptions
          props={t('library.balance')}
          color={colorBalance}
          onClick={() => {
            setPreference('balance')
            setcolorBalance(colorBalance ? '' : '#')
            setColorTransaction('')
          }}
        />
        <TableOptions
          props={t('library.lastTransaction')}
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
    </Containner>
  )
}

export default LibraryTable
