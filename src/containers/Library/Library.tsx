import LibraryTable from './LibraryTable'
import React, { useState, useEffect } from 'react'
import Table from '../../components/Table'
import Api from '../../Api'
import { useDispatch } from 'react-redux'
import { setLoading } from '../../redux/ducks/loading'
import { SchemeType } from '../../apiTypes'

const Library = () => {
  const [colorBalance, setcolorBalance] = useState('')
  const [colorTransaction, setColorTransaction] = useState('#')
  const [preference, setPreference] = useState('lastTransaction')
  const [library, setLibrary] = useState<SchemeType[]>([])

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchLibrary = async () => {
      try {
        dispatch(setLoading(true))
        const response = await Api.getLibrary()
        dispatch(setLoading(false))

        setLibrary(response.data.schemes)
      } catch (e) {
        dispatch(setLoading(false))
        console.error(e)
      }
    }
    fetchLibrary()
  }, [dispatch])


  const handleTab = (preference: string) => {
    if (preference === 'balance') {
      library.sort(function compare(a: SchemeType, b: SchemeType) {
        if (a.balance < b.balance) { return 1 }
        if (a.balance > b.balance) { return -1 }
        return 0
      })
      const balance = library.map((info: SchemeType, id: number) => {
        return <Table splitInfo={info} id={id} key={id} />
      })
      return balance
    }
    else if (preference === 'lastTransaction') {
      library.sort(function compare(a: SchemeType, b: SchemeType) {
        if (a.last_transaction < b.last_transaction) { return 1 }
        if (a.last_transaction > b.last_transaction) { return -1 }
        return 0
      })
      const lastTransaction = library.map((info: SchemeType, id: number) => {
        return <Table splitInfo={info} id={id} key={id} />
      })
      return lastTransaction
    }
  }

  return (
    <LibraryTable
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

export default Library
