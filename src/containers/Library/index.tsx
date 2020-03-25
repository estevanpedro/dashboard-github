import Library from './Library'
import React, { useState } from 'react'
import Table from '../../components/Table'

export interface LibraryProps {
    Tab: any //"JSX.Element[] | undefined" -not working
    colorBalance: string
    setcolorBalance: React.Dispatch<React.SetStateAction<string>>
    colorCurrency: string
    setcolorCurrency: React.Dispatch<React.SetStateAction<string>>
    colorTransaction: string
    setColorTransaction: React.Dispatch<React.SetStateAction<string>>
    preference: string
    setPreference: React.Dispatch<React.SetStateAction<string>>
}
interface Props {
    schemeName: string
    schemeCreator?: string
    userId: number
    balance: number
    payout: number
    lastTransaction: string
    id: number
    currency: string
    public: boolean
    address: string
    serviceFee: boolean
    owners: any
}
{/**
owners: {
        address: string
        size: number
        label: string
        paid: string
        }
*/}
const LibraryContainner = () => {
    const [colorBalance, setcolorBalance] = useState('')
    const [colorCurrency, setcolorCurrency] = useState('')
    const [colorTransaction, setColorTransaction] = useState('#')
    const [preference, setPreference] = useState('lastTransaction')
    const [libInfoExample, setLibInfoExample] = useState<Props[]>(
        [
            {
                schemeName: 'Mensalidade',
                schemeCreator: 'Jacinto',
                lastTransaction: '1583321650000',
                currency: 'bitcoin',
                id: 1,
                userId: 441,
                public: false,
                address: "ASDio2daijA2da21sadasdZxza",
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
            },

        ]
    )

    function Tab(preference: string) {
        if (preference === 'balance') {
            libInfoExample.sort(function compare(a: any, b: any) {
                if (a.balance < b.balance) {
                    return 1
                }
                if (a.balance > b.balance) {
                    return -1
                }
                return 0
            })
            const balance = libInfoExample.map((info: Props, id: number) => {
                return <Table splitInfo={info} id={id} />
            })
            return balance
        }

        else if (preference === 'currency') {
            libInfoExample.sort(function compare(a: any, b: any) {
                if (a.currency < b.currency) {
                    return 1
                }
                if (a.currency > b.currency) {
                    return -1
                }
                return 0
            })
            const currency = libInfoExample.map((info: Props, id: number) => {
                return <Table splitInfo={info} id={id} />
            })
            return currency
        }

        else if (preference === 'lastTransaction') {
            libInfoExample.sort(function compare(a: any, b: any) {
                if (parseInt(a.lastTransaction) < parseInt(b.lastTransaction)) {
                    return 1
                }
                if (parseInt(a.lastTransaction) > parseInt(b.lastTransaction)) {
                    return -1
                }
                return 0
            })
            const lastTransaction = libInfoExample.map((info: Props, id: number) => {
                return <Table splitInfo={info} id={id} />
            })
            return lastTransaction
        }
    }

    return <Library
        Tab={Tab}
        colorBalance={colorBalance}
        setcolorBalance={setcolorBalance}
        colorCurrency={colorCurrency}
        setcolorCurrency={setcolorCurrency}
        colorTransaction={colorTransaction}
        setColorTransaction={setColorTransaction}
        preference={preference}
        setPreference={setPreference}
    />
}

export default LibraryContainner
