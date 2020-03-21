import React, { useState, useEffect } from 'react'
import { Container, Colunm, PayloadText, Title, Name } from './elements'
import Arrow from "../../assets/icons/right-arrow.svg"
import IconButton from '../IconButton'

export interface Props {
    schemeName: string
    schemeCreator?: string
    balance: number | any
    payout: number | any
    lastTransaction: number | string
    id: number
}

const Table = ({ splitInfo, id }: { splitInfo: Props; id: number }) => {
    return (
        <div>
            <Container pair={id % 2 === 0 ? true : false}>
                <Colunm width={'300px'}>
                    <Title>{splitInfo.schemeName}</Title>
                    {splitInfo.schemeCreator ? <Name>{splitInfo.schemeCreator}</Name> : <div />}
                </Colunm>

                <Colunm>
                    <PayloadText>{splitInfo.balance} BTC</PayloadText>
                </Colunm>

                <Colunm>
                    <PayloadText>{splitInfo.payout}</PayloadText>
                </Colunm>

                <Colunm>
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

        </div>
    )
}

export default Table
