import React from 'react'
import { Container, Colunm, PayloadText, Name } from './elements'
import Arrow from "../../assets/icons/right-arrow.svg"
import IconButton from '../IconButton'
import Text from '../Text'
import { Link } from '@reach/router'
export interface Props {
    schemeName: string
    schemeCreator?: string
    balance: number
    payout: number
    lastTransaction: string
    id: number
}
const Table = ({
    splitInfo,
    id
}: {
    splitInfo: Props;
    id: number
}) => {
    return (
        <div>
            <Container pair={id % 2 === 0 ? true : false}>
                <Colunm width={'300px'}>
                    <Text weight='bold'>{splitInfo.schemeName}</Text>
                    {splitInfo.schemeCreator ? <Name>{splitInfo.schemeCreator}</Name> : <div />}
                </Colunm>

                <Colunm>
                    <PayloadText>{splitInfo.balance} BTC</PayloadText>
                </Colunm>

                <Colunm>
                    <PayloadText>{splitInfo.payout}</PayloadText>
                </Colunm>

                <Colunm width={'200px'}>
                    <PayloadText>
                        {new Date(parseFloat(splitInfo.lastTransaction)).toLocaleString('en-GB')}
                    </PayloadText>
                </Colunm>

                <Colunm width={'50px'}>
                    <Link to={'/split-details/' + splitInfo.id} >
                        <IconButton
                            icon={Arrow}
                            onClick={() => {
                                console.log('/split-details/', splitInfo.id)
                            }}
                        />
                    </Link>
                </Colunm>
            </Container>

        </div>
    )
}

export default Table
