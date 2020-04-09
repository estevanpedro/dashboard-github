import LibraryTable from './LibraryTable'
import React, { useState, useEffect } from 'react'
import Table from '../../components/Table'
import Api from '../../Api'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'
import { setLoading } from '../../redux/ducks/loading'
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
        dispatch(setLoading(true))
        const response = await Api.getLibrary()
        dispatch(setLoading(false))
        console.log(response.data)
        setLibrary(response.data.schemes)

        // dispatch(updateLibrary(response.data.schemes))
      } catch (e) {
        console.error(e)
        dispatch(setLoading(false))
      }
    }
    fetchLibrary()
  }, [dispatch])


  // const compareValues = (valueA: number | string, valueB: number | string) => {
  //   if (valueA < valueB) return 1
  //   if (valueA > valueB) return -1
  //   return 0
  // }

  // const Tab = (preference: string) => {
  //   if (preference === 'balance') {
  //     library.sort((a: any, b: any) =>
  //       compareValues(a.balance, b.balance)
  //     )

  //     const balance = library.map((info: any, id: number, key: any) => {
  //       return <Table splitInfo={info} id={id} key={key} />
  //     })

  //     return balance
  //   } else if (preference === 'currency') {
  //     library.sort((a: any, b: any) =>
  //       compareValues(a.currency, b.currency)
  //     )

  //     const currency = library.map((info: any, id: number, key: any) => {
  //       return <Table splitInfo={info} id={id} key={key} />
  //     })

  //     return currency
  //   } else if (preference === 'lastTransaction') {
  //     library.sort((a: any, b: any) =>
  //       compareValues(parseInt(a.lastTransaction), parseInt(b.lastTransaction))
  //     )

  //     const lastTransaction = library.map(
  //       (info: any, id: number) => {
  //         return <Table splitInfo={info} id={id} key={info._id.$oid} />
  //       }
  //     )

  //     return lastTransaction
  //   }
  // }
  const compareValues = (valueA: number | string, valueB: number | string) => {
    if (valueA < valueB) return 1
    if (valueA > valueB) return -1
    return 0
  }

  const handleTab = () => {
    return library.map((info: any, i: number) => (
      <Table splitInfo={info} id={i} key={info._id.$oid} />
    ))
  }

  return (
    <LibraryTable
      Tab={handleTab}
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
