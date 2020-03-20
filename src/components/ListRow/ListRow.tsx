import React from 'react'
// import { Container, Column, Text, Title, Name } from './elements'
import { Column } from './elements'
import ds from '../../design/designSystem'
import { FlexContainer, Text, Title } from '../../components'
import Arrow from '../../assets/icons/right-arrow.svg'
import IconButton from '../../components/IconButton'

export interface Props {
  schemeName: string
  schemeCreator?: string
  balance: number | any
  payout: number | any
  lastTransaction: number | string
  id: number
}

const ListRow = (splitInfo: Props) => {
  return (
    <FlexContainer
      padding='10px'
      border-top={`1px solid ${ds.colors.contrast}`}
      align-items='center'
      justify-content='space-between'
    >
      <Column width={'300px'}>
        <Title font-weight='bold'>{splitInfo.schemeName}</Title>
        {splitInfo.schemeCreator ? (
          <Text font-style='italic' font-size={ds.fontSize.verySmall}>
            {splitInfo.schemeCreator}
          </Text>
        ) : (
          <div />
        )}
      </Column>

      <Column>
        <Title>Balance</Title>
        {/* CHANGE TO PRIMARY */}
        <Text color='#FF9140}'>{splitInfo.balance} BTC</Text>
      </Column>

      <Column>
        <Title>Payout</Title>
        {/* CHANGE TO PRIMARY */}
        <Text color='#FF9140'>{splitInfo.payout}</Text>
      </Column>

      <Column>
        <Title>Last transaction</Title>
        {/* CHANGE TO PRIMARY */}
        <Text color='#FF9140'>{splitInfo.lastTransaction}</Text>
      </Column>

      <Column width={'50px'}>
        <IconButton
          icon={Arrow}
          onClick={() => {
            console.log('Navigate to Scheme id:', splitInfo.id)
          }}
        />
      </Column>
    </FlexContainer>
  )
}

export default ListRow
