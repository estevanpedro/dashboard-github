import React, { useState, useEffect } from 'react'
import MySchemesTable from './MySchemesTable'
import Table from '../../components/Table'

import Api from '../../Api'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'

// TODO // import { updateMySchemes } from '../../redux/ducks/mySchemes'

import { LibInfo } from '../Library/types'

const MySchemes = () => {
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
  const [mySchemes, setMySchemes] = useState<any[]>([])
  const { secretToken } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const fetchMySchemes = async () => {
      try {
        const response = await Api.getMySchemes(secretToken)

        setMySchemes(response.data.schemes)

        // dispatch(updateMySchemes(response.data.schemes))
      } catch (e) {
        console.error(e)
      }
    }
    fetchMySchemes()
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

      const balance = libInfoExample.map((info: LibInfo, id: number) => {
        return <Table splitInfo={info} id={id} />
      })

      return balance
    } else if (preference === 'currency') {
      libInfoExample.sort((a: LibInfo, b: LibInfo) =>
        compareValues(a.currency, b.currency)
      )

      const currency = libInfoExample.map((info: LibInfo, id: number) => {
        return <Table splitInfo={info} id={id} />
      })

      return currency
    } else if (preference === 'lastTransaction') {
      libInfoExample.sort((a: LibInfo, b: LibInfo) =>
        compareValues(parseInt(a.lastTransaction), parseInt(b.lastTransaction))
      )

      const lastTransaction = libInfoExample.map(
        (info: LibInfo, id: number) => {
          return <Table splitInfo={info} id={id} />
        }
      )

      return lastTransaction
    }
  }
  return (
    <MySchemesTable
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

export default MySchemes
