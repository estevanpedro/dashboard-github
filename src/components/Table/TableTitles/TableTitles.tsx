import React from 'react'
import { ContainerTitles, Colunm, Title } from './elements'

const TableTitles = () => {

    return (
        <ContainerTitles>

            <Colunm width={'300px'}>
                <Title>Name</Title>
            </Colunm>

            <Colunm>
                <Title>Balance</Title>
            </Colunm>

            <Colunm>
                <Title>Payout</Title>
            </Colunm>

            <Colunm>
                <Title>Last Transaction</Title>
            </Colunm>

            <Colunm width={'80px'}>
            </Colunm>

        </ContainerTitles>
    )
}

export default TableTitles
