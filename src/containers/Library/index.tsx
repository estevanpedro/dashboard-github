import Library from './Library'
import React, { useState } from 'react'

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
                schemeName: 'Payback 2',
                schemeCreator: 'Abraham',
                balance: 0.10000000,
                payout: 0.008,
                lastTransaction: '1584010434',
                id: 2,
                currency: 'bitcoin',
            },
            {
                schemeName: 'Payback 3',
                schemeCreator: 'Abraham',
                balance: 0.10000000,
                payout: 0.008,
                lastTransaction: '1584010437',
                id: 2,
                currency: 'bitcoin',
            },
            {
                schemeName: 'Payback 4',
                schemeCreator: 'Abraham',
                balance: 0.10000000,
                payout: 0.008,
                lastTransaction: '1584010438',
                id: 2,
                currency: 'bitcoin',
            },
            {
                schemeName: 'Payback 4',
                schemeCreator: 'Abraham',
                balance: 0.10000000,
                payout: 0.008,
                lastTransaction: '1584010439',
                id: 2,
                currency: 'bitcoin',
            },
        ]
    )






    return <Library libInfoExample={libInfoExample} />
}

export default LibraryContainner
