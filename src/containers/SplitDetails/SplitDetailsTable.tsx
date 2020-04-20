import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { navigate, RouteComponentProps } from '@reach/router'
import { FaProjectDiagram } from 'react-icons/fa'
import { Bar, Pie } from 'react-chartjs-2'
import ReactJson from 'react-json-view'
import QRCode from 'qrcode.react'

import { TextLink, SmallButton, Button } from '../../components'
import Modal from '../../components/Modal'
import { FirstSplitType, HistoryType } from '../../apiTypes'

import {
  Category,
  CategoryName,
  Header,
  Body,
  Bottom,
  Container,
  QRField,
  DetailsField,
  SubtitleText,
  PayloadText,
  GraphicField,
  BottomField,
  TableTitle,
  TitleField,
  Line,
  Title,
  SubTitle,
  DiagramButton,
} from './elements'

interface Props {
  createShareList: () => JSX.Element[] | undefined
  createTransList: () => JSX.Element[] | undefined
  schemeDetails: any
  firstSplit: FirstSplitType[]
  historyDetails: HistoryType[]
}

const SplitDetails = ({
  createShareList,
  createTransList,
  schemeDetails,
  firstSplit,
  historyDetails,
}: Props & RouteComponentProps) => {
  const themeContext = useContext(ThemeContext)

  let ShareData = (firstSplit: FirstSplitType[]) => {
    let labels: string[] = []
    let size: number[] = []
    firstSplit.forEach((info: FirstSplitType) => {
      labels = [info.name].concat(labels)
    })
    firstSplit.forEach((info: FirstSplitType) => {
      size = [info.info.percentage].concat(size)
    })
    return [labels, size]
  }

  const ShareChart = {
    labels: ShareData(firstSplit)[0],
    datasets: [
      {
        data: ShareData(firstSplit)[1],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9140',
          '#36f2EB',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#FF9140',
          '#36f2EB',
        ],
      },
    ],
  }

  let PayoutData = (historyDetails: HistoryType[]) => {
    let months: string[] = []
    let amounts: number[] = []
    historyDetails.forEach((info: HistoryType) => {
      months = [
        new Date(info.created_at * 1000).toLocaleDateString('UTC'),
      ].concat(months)
    })
    historyDetails.forEach((info: HistoryType) => {
      amounts = [
        info.amount_received > 0
          ? info.amount_received
          : -Math.abs(info.amount_sent),
      ].concat(amounts)
    })
    return [months.reverse(), amounts]
  }

  const PayoutsChart = {
    labels: PayoutData(historyDetails.reverse())[0],
    datasets: [
      {
        label: 'Payouts',
        backgroundColor: '#FF9140',
        borderColor: '#FF9140',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: PayoutData(historyDetails.reverse())[1],
      },
    ],
  }

  var chartOptions = {
    showScale: true,
    pointDot: true,
    showLines: false,
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  }

  const handleGoBack = () => {
    navigate('/my-schemes')
  }

  const goToScheme = () => {
    navigate(`/scheme/${schemeDetails && schemeDetails.id}`)
  }

  return (
    <Container>
      <TextLink onClick={handleGoBack}>← My Schemes</TextLink>
      <Header>
        <Title>{schemeDetails.name}</Title>
        <Category>
          <CategoryName size='verySmall'>
            {schemeDetails.visibility === 'public' ? 'Public' : 'Private'}
          </CategoryName>
        </Category>

        <Modal
          title={'New Scheme'}
          trigger={
            <SmallButton onClick={() => { }} margin='0 20px 0 0' align='center'>
              <FaProjectDiagram size={25} />
            </SmallButton>
          }
        >
          <ReactJson
            theme={themeContext.colors.primary === '#FF9140' ? 'summerfruit:inverted' : 'ashes'}
            src={schemeDetails}
            style={{ backgroundColor: themeContext.colors.secondaryBg }}
            displayObjectSize={false}
            displayDataTypes={false}
          />
        </Modal>

        <Button isSecondary onClick={goToScheme}>
          Edit Scheme
        </Button>
      </Header>
      <Body>
        <QRField>
          <QRCode
            value={schemeDetails.tree ? schemeDetails.tree.address : ''}
          />
        </QRField>
        <DetailsField>
          <SubtitleText>Wallet Address</SubtitleText>
          <PayloadText>
            {schemeDetails.tree ? schemeDetails.tree.address : ''}
          </PayloadText>
          <SubtitleText>Balance</SubtitleText>
          <PayloadText>{schemeDetails.balance || 0} BTC</PayloadText>
          <SubtitleText>Payout</SubtitleText>
          <PayloadText>{schemeDetails.payout}</PayloadText>
          <SubtitleText>Service Fee</SubtitleText>
          <PayloadText>
            {schemeDetails.serviceFee === 'True' ? 'Yes' : 'No'}
          </PayloadText>
        </DetailsField>

        <GraphicField>
          <Pie data={ShareChart} />
        </GraphicField>

        <GraphicField>
          <Bar data={PayoutsChart} options={chartOptions} />
        </GraphicField>
      </Body>

      <Line></Line>

      <Bottom>
        <BottomField>
          <SubTitle>Transactions</SubTitle>

          <TitleField>
            <TableTitle width='70px'>Balance</TableTitle>
            <TableTitle>Time UTC</TableTitle>
            <TableTitle>Info</TableTitle>
          </TitleField>
          {createTransList()}
        </BottomField>

        <BottomField>
          <Header>
            <SubTitle>Shares</SubTitle>
          </Header>
          <TitleField>
            <TableTitle width='100px'>Address</TableTitle>
            <TableTitle width='25px'>Size</TableTitle>
            <TableTitle width='100px'>Label</TableTitle>
          </TitleField>
          {createShareList()}
        </BottomField>
      </Bottom>
    </Container>
  )
}

export default SplitDetails
