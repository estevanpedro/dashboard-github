import React, { useState } from 'react'
import Title from '../../components/Title'
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

  const [libInfoExample, setLibInfoExample] = useState<Props[]>(
    [
      {
        schemeName: 'Mensalidade',
        schemeCreator: 'Jacinto',
        balance: 1.0000000,
        payout: 0.008,
        lastTransaction: '01/03/2020',
        id: 1,
      },
      {
        schemeName: 'Payback 2',
        schemeCreator: 'Abraham',
        balance: 0.10000000,
        payout: 0.008,
        lastTransaction: '02/03/2020',
        id: 2,
      },
      {
        schemeName: 'Signiture ',
        schemeCreator: 'Albert Einstein',
        balance: 0.00100000,
        payout: 0.008,
        lastTransaction: '03/03/2020',
        id: 3,
      },
    ]
  )

  const listLibrary = libInfoExample.map((info: Props) => {
    return ListRow(info)
  })

  return (
    <div>
      <Title>Library</Title>
      <ContainerList>
        {listLibrary}
      </ContainerList>

    </div>
  )
}

export default Library
