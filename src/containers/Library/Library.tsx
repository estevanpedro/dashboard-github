import LibraryTable from './LibraryTable'
import React, { useState, useEffect } from 'react'
import Table from '../../components/Table'
import Api from '../../Api'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'

// TODO // import { updateLibrary } from '../../redux/ducks/library'

import { LibInfo } from './types'

const Library = () => {
  const [colorBalance, setcolorBalance] = useState('')
  const [colorCurrency, setcolorCurrency] = useState('')
  const [colorTransaction, setColorTransaction] = useState('#')
  const [preference, setPreference] = useState('lastTransaction')

  const [libInfoExample, setLibInfoExample] = useState<LibInfo[]>([
    {
      schemeName: 'Mensalidade',
      schemeCreator: 'Jacinto',
      lastTransaction: '1583321650000',
      currency: 'bitcoin',
      id: 1,
      userId: 441,
      public: true,
      address: 'ASDio2daijA2da21sadasdZxza',
      balance: 0.0145,
      payout: 0.0008,
      serviceFee: true,
      owners: [
        {
          address: 'as454axAsaDFAsdedasdaASDasdASD',
          size: 50,
          label: 'Estevan Pedro Wisoczynski Reboledo',
          paid: 0.001,
        },
        {
          address: 'as454axAsaDFAsdedasdaASDasdASD',
          size: 50,
          label: 'Alberte Einstein',
          paid: 0.001,
        },
      ],
    },
  ])


  // TODO connect with the component and with redux...
  const dispatch = useDispatch()
  const [library, setLibrary] = useState<any[]>([])

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        const response = await Api.getLibrary()

        setLibrary(response.data)

        // dispatch(updateLibrary(response.data.schemes))
      } catch (e) {
        console.error(e)
      }
    }
    fetchLibrary()
  }, [dispatch])


  const compareValues = (valueA: number | string, valueB: number | string) => {
    if (valueA < valueB) return 1
    if (valueA > valueB) return -1
    return 0
  }

  const Tab = (preference: string) => {
    if (preference === 'balance') {
      libInfoExample.sort((a: LibInfo, b: LibInfo) =>
        compareValues(a.balance, b.balance)
      )

      const balance = libInfoExample.map((info: LibInfo, id: number, key: any) => {
        return <Table splitInfo={info} id={id} key={key} />
      })

      return balance
    } else if (preference === 'currency') {
      libInfoExample.sort((a: LibInfo, b: LibInfo) =>
        compareValues(a.currency, b.currency)
      )

      const currency = libInfoExample.map((info: LibInfo, id: number, key: any) => {
        return <Table splitInfo={info} id={id} key={key} />
      })

      return currency
    } else if (preference === 'lastTransaction') {
      libInfoExample.sort((a: LibInfo, b: LibInfo) =>
        compareValues(parseInt(a.lastTransaction), parseInt(b.lastTransaction))
      )

      const lastTransaction = libInfoExample.map(
        (info: LibInfo, id: number, key: any) => {
          return <Table splitInfo={info} id={id} key={key} />
        }
      )

      return lastTransaction
    }
  }

  return (
    <LibraryTable
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
  )
}

export default Library
