import React from 'react'
import { Container, Colunm, PayloadText, Name } from './elements'
import Arrow from '../../assets/icons/right-arrow.svg'
import IconButton from '../IconButton'
import Text from '../Text'
import { Link } from '@reach/router'

export interface Props {
  // schemeName: string
  // schemeCreator?: string
  // balance: number
  // payout: number
  // lastTransaction: string
  // id: number
  splitInfo: any
  id: number
}
const Table = ({ splitInfo, id }: Props) => {
  console.log(splitInfo)
  return (
    <div>
      <Container pair={id % 2 === 0 ? true : false}>
        <Colunm width={'300px'}>
          <Text weight='bold'>{splitInfo.name}</Text>
          {splitInfo.schemeCreator ? (
            <Name>{splitInfo.schemeCreator}</Name>
          ) : (
            <div />
          )}
        </Colunm>

        <Colunm>
          <PayloadText>{splitInfo.balance || '1'} BTC</PayloadText>
        </Colunm>

        <Colunm>
          <PayloadText>{splitInfo.payout}</PayloadText>
        </Colunm>

        <Colunm width={'200px'}>
          <PayloadText>
            {new Date(
              parseFloat(splitInfo.lastTransactio || '0.0')
            ).toLocaleString('en-GB')}
          </PayloadText>
        </Colunm>

        <Colunm width={'50px'}>
          <Link to={'/split-details/' + splitInfo._id.$oid}>
            <IconButton
              icon={Arrow}
              onClick={() => {
                console.log('schemeId', splitInfo._id.$oid)
              }}
            />
          </Link>
        </Colunm>
      </Container>
    </div>
  )
}

export default Table
