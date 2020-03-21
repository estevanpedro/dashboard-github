import React from 'react'
import { Container, Colunm, PayloadText, Title, Name } from './elements'
import Arrow from "../../assets/icons/right-arrow.svg"
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
        <Container>
            <Colunm width={'300px'}>
                <Title>{splitInfo.schemeName}</Title>
                {splitInfo.schemeCreator ? <Name>{splitInfo.schemeCreator}</Name> : <div />}
            </Colunm>

            <Colunm>
                <Title>Balance</Title>
                <PayloadText>{splitInfo.balance} BTC</PayloadText>
            </Colunm>

            <Colunm>
                <Title>Payout</Title>
                <PayloadText>{splitInfo.payout}</PayloadText>
            </Colunm>

            <Colunm>
                <Title>Last transaction</Title>
                <PayloadText>{splitInfo.lastTransaction}</PayloadText>
            </Colunm>

            <Colunm width={'50px'}>
                <IconButton
                    icon={Arrow}
                    onClick={() => {
                        console.log('Navigate to Scheme id:', splitInfo.id)
                    }}
                />
            </Colunm>
        </Container>
    )
}

export default ListRow
