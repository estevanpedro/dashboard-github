import React, { useEffect, useState } from 'react'
import { RouteComponentProps } from '@reach/router'
import { useSelector, useDispatch } from 'react-redux'

import SplitDetailsTable from './SplitDetailsTable'
import { ValuesField, TableText, BalanceText } from './elements'

import Api from '../../Api'
import { RootState } from '../../redux/rootReducer'
import { setLoading } from '../../redux/ducks/loading'

// TODO // import { updateSplitDetails } from '../../redux/ducks/splitDetails'

const SplitExample = {
  schemeName: 'Mensalidade',
  schemeCreator: 'Jacinto',
  lastTransaction: '1583321650000',
  currency: 'bitcoin',
  id: 1,
  userId: 441,
  public: true,
  address: 'zZASDio2daijA2testtestass1sadasdZxza',
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
}

const historyExample = [
  {
    id: 1,
    amount: '0.50000000',
    type: 'split',
    sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
    created_at: '10:08:10 01/01/2020',
  },
  {
    id: 2,
    amount: '1.00000000',
    type: 'split',
    sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
    created_at: '15:55:10 05/02/2020',
  },
  {
    id: 3,
    amount: '-0.50050000',
    type: 'split',
    sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
    created_at: '11:34:10 03/03/2020',
  },
  {
    id: 4,
    amount: '-1.50050000',
    type: 'split',
    sentTo: 'ASDa2d2adaD1251AScsca23154a2cdascxazzz1910sa', //address
    created_at: '08:34:10 04/03/2020',
  },
]

interface Props {
  schemeId?: string
}

const SplitDetails = ({ schemeId }: Props & RouteComponentProps) => {
  const [schemeDetails, setSchemeDetails] = useState<any[]>([]) // Need to connect splitDetails to the component...
  const [firstSplit, setFirstSplit] = useState<any[]>([])
  const [historyDetails, setHistoryDetails] = useState<any[]>([])

  const { secretToken } = useSelector((state: RootState) => state.auth)

  const dispatch = useDispatch()
  useEffect(() => {
    const fetchSchemeDetails = async () => {
      if (schemeId) {
        const detailsData = {
          secretToken,
          schemeId,
        }

        try {
          dispatch(setLoading(true))
          const response = await Api.getSchemeDetails(detailsData)
          dispatch(setLoading(false))

          setSchemeDetails(response.data)

          if (
            response.data.tree &&
            response.data.tree.children[0] &&
            response.data.tree.children[0].children
          ) {
            setFirstSplit(response.data.tree.children[0].children)
            try {
              dispatch(setLoading(true))
              const history = await Api.getHistory({
                secretToken,
                address: response.data.tree.address,
              })
              dispatch(setLoading(false))
              setHistoryDetails(history.data)
            } catch (err) {
              dispatch(setLoading(false))
              console.error(err)
            }
          }
        } catch (err) {
          dispatch(setLoading(false))
          console.error(err)
        }
      }
    }
    fetchSchemeDetails()
  }, [])

  function createTransList() {
    const Table = ({ info, id }: { info: any; id: number }) => {
      return (
        <>
          <ValuesField pair={id % 2 === 0 ? true : false}>
            <BalanceText>
              {info.amount_received > 0
                ? info.amount_received
                : '-' + info.amount_sent}
            </BalanceText>
            <TableText>{info.created_at}</TableText>
            <TableText>{info.network}</TableText>
          </ValuesField>
        </>
      )
    }
    const Map = historyDetails.reverse().map((info: any, id: number) => {
      return <Table info={info} id={id} key={id} />
    })
    return Map
  }

  function createShareList() {
    const Table = ({ info, id }: { info: any; id: number }) => {
      return (
        <>
          <ValuesField pair={id % 2 === 0 ? true : false}>
            <BalanceText width='60px'>
              {info.address.slice(0, 3) +
                '...' +
                info.address.slice(
                  info.address.length - 3,
                  info.address.length
                )}
            </BalanceText>
            <TableText width='25px'>{info.info.percentage * 100}</TableText>
            <TableText width='100px'>{info.name}</TableText>
            <TableText width='40px'></TableText>
          </ValuesField>
        </>
      )
    }
    console.log('firstSplit: ', firstSplit)
    const Map = firstSplit.map((info: any, id: number) => {
      return <Table info={info} id={id} key={id} />
    })
    return Map
  }

  return (
    <SplitDetailsTable
      schemeDetails={schemeDetails}
      SplitExample={SplitExample}
      historyExample={historyExample}
      createShareList={createShareList}
      createTransList={createTransList}
      firstSplit={firstSplit}
      historyDetails={historyDetails}
    />
  )
}

export default SplitDetails
