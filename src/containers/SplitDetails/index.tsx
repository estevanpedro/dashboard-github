import SplitDetails from './SplitDetails'
import React from 'react'
import {
    Category,
    CategoryName,
    Header,
    Body,
    Bottom,
    Container,
    QRField,
    DetailsField,
    SubtitleText,
    PayloadText,
    GraphicField,
    BottomField,
    TableTitle,
    TitleField,
    ValuesField,
    TableText,
    BalanceText,
    EditButton,
    Line,
    GraphicText
} from './elements'
const SplitExample = {
    id: 1,
    ownerId: 441,
    public: false,
    splitName: 'Mensalidade',
    address: "ASDio2daijA2da21sadasdZxza",
    balance: 0.0145,
    payout: 0.0008,
    serviceFee: true,
    owners: [
        {
            address: "11s...xza",
            size: 50,
            label: 'Estevan Pedro...',
            paid: 0.001
        },
        {
            address: "az1...xza",
            size: 50,
            label: 'Albertaaaaaaaaaaaa...',
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
        created_at: '18:00:10 22/01/2020',
    },
    {
        id: 1,
        amount: '1.00000000',
        type: 'split',
        sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
        created_at: '18:00:10 22/01/2020',
    }
]
const SplitDetailsContainer = () => {

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
        const Map = historyExample.map((info: any, id: number) => {
            return <Table info={info} id={id} />
        })
        return Map
    }

    function createShareList() {
        const Table = ({ splitInfo, id }: { splitInfo: any; id: any }) => {
            return (
                <>
                    <ValuesField pair={id % 2 === 0 ? true : false}>
                        <BalanceText>{splitInfo.address}</BalanceText>
                        <TableText width="25px">{splitInfo.size}</TableText>
                        <TableText width="100px">{splitInfo.label}</TableText>
                        <TableText>{splitInfo.paid}</TableText>
                        <TableText>{''}</TableText>
                        <TableText>{''}</TableText>
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
