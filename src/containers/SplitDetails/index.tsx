import SplitDetails from './SplitDetails'
import React from 'react'
import {
    ValuesField,
    TableText,
    BalanceText,
} from './elements'
import { RouteComponentProps } from '@reach/router'
const SplitExample = {
    schemeName: 'Mensalidade',
    schemeCreator: 'Jacinto',
    lastTransaction: '1583321650000',
    currency: 'bitcoin',
    id: 1,
    userId: 441,
    public: true,
    address: "zZASDio2daijA2testtestass1sadasdZxza",
    balance: 0.0145,
    payout: 0.0008,
    serviceFee: true,
    owners: [
        {
            address: "as454axAsaDFAsdedasdaASDasdASD",
            size: 50,
            label: 'Estevan Pedro Wisoczynski Reboledo',
            paid: 0.001
        },
        {
            address: "as454axAsaDFAsdedasdaASDasdASD",
            size: 50,
            label: 'Alberte Einstein',
            paid: 0.001
        },
    ]
}

const historyExample = [
    {
        id: 1,
        amount: '0.50000000',
        type: 'split',
        sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
        created_at: '10:08:10 01/01/2020',
    },
    {
        id: 2,
        amount: '1.00000000',
        type: 'split',
        sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
        created_at: '15:55:10 05/02/2020',
    },
    {
        id: 3,
        amount: '-0.50050000',
        type: 'split',
        sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
        created_at: '11:34:10 03/03/2020',
    },
    {
        id: 4,
        amount: '-1.50050000',
        type: 'split',
        sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
        created_at: '08:34:10 04/03/2020',
    },
]

interface Props {
    splitId?: number
}

const SplitDetailsContainer = ({ splitId }: Props & RouteComponentProps) => {

    console.log('splitId: ', splitId)
    {/**
    TODO API FUNCTION TO GET THE SPLIT HISTORY AND THE SPLIT DETAILS --
    GET ALL TRANSACTION FROM USER ID
    RESPONSE EQUAL TO SplitExample and historyExample
    */}

    function createTransList() {
        const Table = ({ info, id }: { info: any; id: any }) => {
            return (
                <>
                    <ValuesField pair={id % 2 === 0 ? true : false}>
                        <BalanceText>{info.amount}</BalanceText>
                        <TableText>{info.created_at}</TableText>
                        <TableText>{info.type}</TableText>
                    </ValuesField>
                </>
            )
        }
        const Map = historyExample.reverse().map((info: any, id: number) => {
            return <Table info={info} id={id} />
        })
        return Map
    }

    function createShareList() {
        const Table = ({ splitInfo, id }: { splitInfo: any; id: any }) => {
            return (
                <>
                    <ValuesField pair={id % 2 === 0 ? true : false}>
                        <BalanceText width="60px">
                            {splitInfo.address.slice(0, 3)
                                + '...' +
                                splitInfo.address.slice(splitInfo.address.length - 3, splitInfo.address.length)}
                        </BalanceText>
                        <TableText width="25px">{splitInfo.size}</TableText>
                        <TableText width="100px">
                            {
                                splitInfo.label.charAt(0).toUpperCase() +
                                splitInfo.label.slice(1).split(" ")[0] +
                                " " +
                                splitInfo.label.slice(1).split(" ")[1].charAt(0).toUpperCase() +
                                splitInfo.label.split(" ")[1].slice(1)
                            }
                        </TableText>
                        <TableText width="40px">{splitInfo.paid}</TableText>
                    </ValuesField>

                </>
            )
        }
        const Map = SplitExample.owners.map((info: any, id: number) => {
            return <Table splitInfo={info} id={id} />
        })
        return Map
    }


    return <SplitDetails
        SplitExample={SplitExample}
        historyExample={historyExample}
        createShareList={createShareList}
        createTransList={createTransList}
    />
}

export default SplitDetailsContainer
