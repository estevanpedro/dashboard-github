import React from 'react'
import { Link } from '@reach/router'

import QRCode from 'qrcode.react'
import Edit from '../../assets/icons/edit.svg'
import IconButton from '../../components/IconButton'
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
  SplitExample: any
  historyExample: any
  createShareList: any
  createTransList: any
  schemeDetails: any
}

const SplitDetails = ({
  SplitExample,
  historyExample,
  createShareList,
  createTransList,
  schemeDetails,
}: Props) => {
  let ShareData = (apiDATA: any) => {
    let labels: any[] = []
    let size: any[] = []
    apiDATA.owners.map((info: any) => {
      labels = [info.label].concat(labels)
    })
    apiDATA.owners.map((info: any) => {
      size = [info.size].concat(size)
    })
    return [labels, size]
  }
  const ShareChart = {
    labels: ShareData(SplitExample)[0],
    datasets: [
      {
        data: ShareData(SplitExample)[1],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  let PayoutData = (apiDATA: any) => {
    let months: any[] = []
    let amounts: any[] = []
    apiDATA.map((info: any) => {
      months = [info.created_at].concat(months)
    })
    apiDATA.map((info: any) => {
      amounts = [info.amount].concat(amounts)
    })
    return [months, amounts]
  }

  const PayoutsChart = {
    labels: PayoutData(historyExample.reverse())[0],
    datasets: [
      {
        label: 'Payouts',
        backgroundColor: '#FF9140',
        borderColor: '#FF9140',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
        hoverBorderColor: 'rgba(255,99,132,1)',
        data: PayoutData(historyExample.reverse())[1],
      },
    ],
  }

  return (
    <Container>
      <Header>
        <Title>{schemeDetails.name}</Title>
        <Category>
          <CategoryName size='verySmall'>
            {schemeDetails.visibility === 'public' ? 'Public' : 'Private'}
          </CategoryName>
        </Category>
        {schemeDetails.visibility === 'public' ? (
          <></>
        ) : (
          <Link
            to={`/scheme/${schemeDetails &&
              schemeDetails._id &&
              schemeDetails._id.$oid}`}
            state={{ schemeName: SplitExample.schemeName, isPublic: true }}
          >
            <EditButton>Edit Scheme</EditButton>
          </Link>
        )}
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
          <PayloadText>{SplitExample.balance} BTC</PayloadText>
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