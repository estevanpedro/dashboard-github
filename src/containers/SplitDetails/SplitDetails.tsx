import SplitDetailsTable from './SplitDetailsTable'
import React, { useEffect, useState } from 'react'
import { ValuesField, TableText, BalanceText } from './elements'
import { RouteComponentProps, NavigateOptions } from '@reach/router'

import Api from '../../Api'
import { useSelector, useDispatch } from 'react-redux'
import { RootState } from '../../redux/rootReducer'

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

// interface Props {
//   splitId?: any
// }

const SplitDetails = (props: any) => {
  const dispatch = useDispatch()
  const [schemeId, setSchemeId] = useState(props.schemeId) // splitId is coming from the Library or from the MyScheme throuth routes
  const [schemeDetails, setSchemeDetails] = useState<any[]>([]) // Need to connect splitDetails to the component...
  const { secretToken } = useSelector((state: RootState) => state.auth)

  useEffect(() => {
    const fetchSplitDetails = async () => {
      const detailsData = {
        secretToken,
        schemeId,
      }
      try {
        const response = await Api.splitDetails(detailsData)
        setSchemeDetails(response.data)
        // dispatch(updateSplitDetails(response.data.schemes))
      } catch (e) {
        console.error(e)
      }
    }
    fetchSplitDetails()
  }, [dispatch, props.splitId])

  function createTransList() {
    const Table = ({ info, id }: { info: any; id: number }) => {
      return (
        <>
          <ValuesField pair={id % 2 === 0 ? true : false}>
            <BalanceText>{info.amount}</BalanceText>
            <TableText>{info.created_at}</TableText>
            <TableText>{info.type}</TableText>
          </ValuesField>
        </>
      )
    }
    const Map = historyExample.reverse().map((info: any, id: number) => {
      return <Table info={info} id={id} />
    })
    return Map
  }

  function createShareList() {
    const Table = ({ splitInfo, id }: { splitInfo: any; id: number }) => {
      return (
        <>
          <ValuesField pair={id % 2 === 0 ? true : false}>
            <BalanceText width='60px'>
              {splitInfo.address.slice(0, 3) +
                '...' +
                splitInfo.address.slice(
                  splitInfo.address.length - 3,
                  splitInfo.address.length
                )}
            </BalanceText>
            <TableText width='25px'>{splitInfo.size}</TableText>
            <TableText width='100px'>
              {splitInfo.label.charAt(0).toUpperCase() +
                splitInfo.label.slice(1).split(' ')[0] +
                ' ' +
                splitInfo.label
                  .slice(1)
                  .split(' ')[1]
                  .charAt(0)
                  .toUpperCase() +
                splitInfo.label.split(' ')[1].slice(1)}
            </TableText>
            <TableText width='40px'>{splitInfo.paid}</TableText>
          </ValuesField>
        </>
      )
    }
    const Map = SplitExample.owners.map((info: any, id: number) => {
      return <Table splitInfo={info} id={id} />
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
    />
  )
}

export default SplitDetails
