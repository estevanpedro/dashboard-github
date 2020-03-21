import Library from './Library'
import React, { useState } from 'react'
import Table from '../../components/Table'

interface Props {
    schemeName: string
    schemeCreator?: string
    balance: number | any
    payout: number | any
    lastTransaction: number | string
    id: number
    currency: string
}

const LibraryContainner = () => {
    const [colorBalance, setcolorBalance] = useState()
    const [colorCurrency, setcolorCurrency] = useState()
    const [colorTransaction, setColorTransaction] = useState('#')
    const [preference, setPreference] = useState('lastTransaction')
    const [libInfoExample, setLibInfoExample] = useState<Props[]>(
        [
            {
                schemeName: 'Mensalidade',
                schemeCreator: 'Jacinto',
                balance: 1.0000000,
                payout: 0.008,
                lastTransaction: '1584010432',
                id: 1,
                currency: 'bitcoin',
            },
            {
                schemeName: 'Money',
                schemeCreator: 'Abraham',
                balance: 0.10000000,
                payout: 0.008,
                lastTransaction: '1584010434',
                id: 2,
                currency: 'bitcoin',
            },
            {
                schemeName: 'Payback',
                schemeCreator: 'Abraham',
                balance: 0.10000000,
                payout: 0.008,
                lastTransaction: '1584010437',
                id: 2,
                currency: 'bitcoin',
            },
            {
                schemeName: 'Salary',
                schemeCreator: 'Abraham',
                balance: 0.10000000,
                payout: 0.008,
                lastTransaction: '1584010438',
                id: 2,
                currency: 'bitcoin',
            },
            {
                schemeName: 'Gamification',
                schemeCreator: 'Abraham',
                balance: 0.10000000,
                payout: 0.008,
                lastTransaction: '1584010439',
                id: 2,
                currency: 'bitcoin',
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
