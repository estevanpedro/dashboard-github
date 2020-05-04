import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import MySchemesTable from './MySchemesTable'
import Table from '../../components/Table'
import Api from '../../Api'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'

import { setLoading } from '../../redux/ducks/loading'

import { SchemeType } from '../../apiTypes'

const MySchemes = () => {
  const { t } = useTranslation()
  const [colorBalance, setcolorBalance] = useState('')
  const [colorTransaction, setColorTransaction] = useState('#')
  const [preference, setPreference] = useState('lastTransaction')
  const [mySchemes, setMySchemes] = useState<SchemeType[]>([])

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


  const handleTab = (preference: string) => {
    if (preference === 'balance') {
      mySchemes.sort(function compare(a: SchemeType, b: SchemeType) {
        if (a.balance < b.balance) { return 1 }
        if (a.balance > b.balance) { return -1 }
        return 0
      })
      const balance = mySchemes.map((info: SchemeType, id: number) => {
        return <Table splitInfo={info} id={id} key={id} />
      })
      return balance
    }
    else if (preference === 'lastTransaction') {
      mySchemes.sort(function compare(a: SchemeType, b: SchemeType) {
        if (a.last_transaction < b.last_transaction) { return 1 }
        if (a.last_transaction > b.last_transaction) { return -1 }
        return 0
      })
      const lastTransaction = mySchemes.map((info: SchemeType, id: number) => {
        return <Table splitInfo={info} id={id} key={id} />
      })
      return lastTransaction
    }
  }

  return (
    <MySchemesTable
      Tab={handleTab}
      colorBalance={colorBalance}
      setcolorBalance={setcolorBalance}
      colorTransaction={colorTransaction}
      setColorTransaction={setColorTransaction}
      preference={preference}
      setPreference={setPreference}
    />
  )
}

export default MySchemes
