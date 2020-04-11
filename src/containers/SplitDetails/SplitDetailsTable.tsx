import React from 'react'
import { Link, navigate, RouteComponentProps } from '@reach/router'

import QRCode from 'qrcode.react'

import { TextLink, Button } from '../../components'

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
  EditButton,
  Line,
  Title,
  SubTitle,
} from './elements'
import { Bar, Pie } from 'react-chartjs-2'

interface Props {
  createShareList: any
  createTransList: any
  schemeDetails: any
  firstSplit: any
  historyDetails: any
}

const SplitDetails = ({
  createShareList,
  createTransList,
  schemeDetails,
  firstSplit,
  historyDetails,
}: Props & RouteComponentProps) => {
  let ShareData = (firstSplit: any) => {
    let labels: any[] = []
    let size: any[] = []
    firstSplit.forEach((info: any) => {
      labels = [info.name].concat(labels)
    })
    firstSplit.forEach((info: any) => {
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

  let PayoutData = (historyDetails: any) => {
    let months: any[] = []
    let amounts: any[] = []
    historyDetails.forEach((info: any) => {
      months = [info.created_at].concat(months)
    })
    historyDetails.forEach((info: any) => {
      amounts = [
        info.amount_received > 0
          ? info.amount_received
          : '-' + info.amount_sent,
      ].concat(amounts)
    })
    return [months, amounts]
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
          <Bar data={PayoutsChart} options={{ maintainAspectRatio: true }} />
          {/**
                   <GraphicText size={'verySmall'}>
                        Last Month: + 1.33%
                    </GraphicText>
                    <GraphicText size={'verySmall'}>
                        Year to Date: + 33.33%
                    </GraphicText>
                    */}
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
            <TableTitle width='60px'>Address</TableTitle>
            <TableTitle width='25px'>Size</TableTitle>
            <TableTitle width='100px'>Label</TableTitle>
            <TableTitle width='40px'>Paid</TableTitle>
          </TitleField>
          {createShareList()}
        </BottomField>
      </Bottom>
    </Container>
  )
}

export default SplitDetails
