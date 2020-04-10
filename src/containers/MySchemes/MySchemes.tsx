import React, { useState, useEffect } from 'react'
import MySchemesTable from './MySchemesTable'
import Table from '../../components/Table'

import Api from '../../Api'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'

import { setLoading } from '../../redux/ducks/loading'

const MySchemes = () => {
  const [colorBalance, setcolorBalance] = useState('')
  const [colorCurrency, setcolorCurrency] = useState('')
  const [colorTransaction, setColorTransaction] = useState('#')
  const [preference, setPreference] = useState('lastTransaction')
  const [mySchemes, setMySchemes] = useState<any[]>([])

  const { secretToken } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchMySchemes = async () => {
      try {
        dispatch(setLoading(true))
        const response = await Api.getMySchemes(secretToken)
        dispatch(setLoading(false))

        setMySchemes(response.data)
      } catch (err) {
        dispatch(setLoading(false))
        console.error(err)
      }
    }
    fetchMySchemes()
  }, [dispatch, secretToken])

  // const compareValues = (valueA: number | string, valueB: number | string) => {
  //   if (valueA < valueB) return 1
  //   if (valueA > valueB) return -1
  //   return 0
  // }

  // const Tab = (preference: string) => {
  //   if (preference === 'balance') {
  //     libInfoExample.sort((a: LibInfo, b: LibInfo) =>
  //       compareValues(a.balance, b.balance)
  //     )

  //     const balance = libInfoExample.map(
  //       (info: LibInfo, id: number, key: any) => {
  //         return <Table splitInfo={info} id={id} key={key} />
  //       }
  //     )

  //     return balance
  //   } else if (preference === 'currency') {
  //     libInfoExample.sort((a: LibInfo, b: LibInfo) =>
  //       compareValues(a.currency, b.currency)
  //     )

  //     const currency = libInfoExample.map(
  //       (info: LibInfo, id: number, key: any) => {
  //         return <Table splitInfo={info} id={id} key={key} />
  //       }
  //     )

  //     return currency
  //   } else if (preference === 'lastTransaction') {
  //     libInfoExample.sort((a: LibInfo, b: LibInfo) =>
  //       compareValues(parseInt(a.lastTransaction), parseInt(b.lastTransaction))
  //     )

  //     const lastTransaction = libInfoExample.map(
  //       (info: LibInfo, id: number, key: any) => {
  //         return <Table splitInfo={info} id={id} key={key} />
  //       }
  //     )

  //     return lastTransaction
  //   }
  // }

  const handleTab = () => {
    return mySchemes.map((info: any, i: number) => (
      <Table splitInfo={info} id={i} key={info.id} />
    ))
  }
  return (
    <MySchemesTable
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

export default MySchemes
