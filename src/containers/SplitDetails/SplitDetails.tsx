import React, { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ThemeContext } from 'styled-components'

import SplitDetailsTable from './SplitDetailsTable'
import {
  ValuesField,
  TableText,
  BalanceText,
  CopyButton,
  AddressText,
} from './elements'
import { FaRegCopy } from 'react-icons/fa'

import Api from '../../Api'
import { RootState } from '../../redux/rootReducer'
import { setLoading } from '../../redux/ducks/loading'
import { FirstSplitType, HistoryType } from '../../apiTypes'

const SplitDetails = (props: any) => {
  const dispatch = useDispatch()
  const [schemeId] = useState(props.schemeId) // splitId is coming from the Library or from the MyScheme throuth routes
  const [schemeDetails, setSchemeDetails] = useState<any[]>([]) // Need to connect splitDetails to the component...
  const [firstSplit, setFirstSplit] = useState<FirstSplitType[]>([])
  const { secretToken } = useSelector((state: RootState) => state.auth)
  const [historyDetails, setHistoryDetails] = useState<HistoryType[]>([])
  const themeContext = useContext(ThemeContext)

  useEffect(() => {
    const fetchSchemeDetails = async () => {
      const detailsData = {
        secretToken,
        schemeId,
      }
      try {
        dispatch(setLoading(true))
        const response = await Api.getSchemeDetails(detailsData)

        dispatch(setLoading(false))

        setSchemeDetails(response.data)
        setFirstSplit(response.data.tree.children[0].children)
        setHistoryDetails(response.data.transactions)
      } catch (e) {
        console.error(e)
      }
    }
    fetchSchemeDetails()
  }, [dispatch, props.splitId, schemeId, secretToken])

  function createTransList() {
    const Table = ({ info, id }: { info: HistoryType; id: number }) => {
      return (
        <>
          <ValuesField pair={id % 2 === 0 ? true : false}>
            <BalanceText
              width='90px'
              color={
                info.amount_received > 0
                  ? themeContext.colors.confirm
                  : themeContext.colors.cancel
              }
            >
              {info.amount_received > 0
                ? info.amount_received
                : '-' + info.amount_sent}
            </BalanceText>
            <TableText>
              {new Date(info.created_at * 1000).toLocaleString('UTC')}
            </TableText>
            <TableText>{info.network}</TableText>
          </ValuesField>
        </>
      )
    }
    const Map = historyDetails
      // .reverse()
      .map((info: HistoryType, id: number) => {
        return <Table info={info} id={id} key={id} />
      })
    return Map
  }

  function createShareList() {
    const Table = ({ info, id }: { info: FirstSplitType; id: number }) => {
      return (
        <>
          <ValuesField pair={id % 2 === 0 ? true : false}>
            <AddressText width='110px'>
              {info.address.slice(0, 5) +
                '...' +
                info.address.slice(
                  info.address.length - 5,
                  info.address.length
                )}
              <CopyButton
                onClick={() => {
                  navigator.clipboard.writeText(info.address)
                }}
              >
                <FaRegCopy />
              </CopyButton>
            </AddressText>

            <TableText width='25px'>{info.info.percentage * 100}</TableText>
            <TableText width='100px'>{info.name}</TableText>
          </ValuesField>
        </>
      )
    }
    const Map = firstSplit.map((info: FirstSplitType, id: number) => {
      return <Table info={info} id={id} key={id} />
    })
    return Map
  }

  return (
    <SplitDetailsTable
      schemeDetails={schemeDetails}
      createShareList={createShareList}
      createTransList={createTransList}
      firstSplit={firstSplit}
      historyDetails={historyDetails}
    />
  )
}

export default SplitDetails
