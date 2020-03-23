import React from 'react'
import Title from '../../components/Title'
import { SubTitle } from '../../components/Title'
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
    ValuesField,
    TableText,
    BalanceText,
    InfoText
} from './elements'
import { Doughnut, Bar, Pie } from 'react-chartjs-2';
var QRCode = require('qrcode.react');

const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};
const data2 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, -80, 81, -56, 55, 40]
        }
    ]
};

const SplitDetails = () => {
    return (
        <Container>

            <Header>
                <Title>Mensalidade</Title>
                <Category>
                    <CategoryName size="verySmall" >Private</CategoryName>
                </Category>

            </Header>

            <Body>
                <QRField>
                    <QRCode value='www.google.com' />
                </QRField>

                <DetailsField>
                    <SubtitleText>Wallet Address</SubtitleText>
                    <PayloadText>SD13asASKJdkSD8as8290ia90dk922</PayloadText>

                    <SubtitleText>Balance</SubtitleText>
                    <PayloadText>0.0145 BTC</PayloadText>

                    <SubtitleText>Payout</SubtitleText>
                    <PayloadText>0.0008</PayloadText>

                    <SubtitleText>Service Fee</SubtitleText>
                    <PayloadText>Yes</PayloadText>
                </DetailsField>

                <GraphicField>
                    <Pie data={data} />
                </GraphicField>

                <GraphicField>
                    <Bar
                        data={data2}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </GraphicField>
            </Body>

            <Bottom>

                <BottomField>
                    <SubTitle>Transactions</SubTitle>

                    <TitleField>
                        <TableTitle>Balance</TableTitle>
                        <TableTitle>Time UTC</TableTitle>
                        <TableTitle>Info</TableTitle>
                    </TitleField>
                    <>
                        <ValuesField>
                            <BalanceText>+0.000123545</BalanceText>
                            <TableText>18:00:10 22/01/2020</TableText>
                            <TableText>TxID</TableText>
                        </ValuesField>
                        <ValuesField>
                            <BalanceText>+0.000123545</BalanceText>
                            <TableText>18:00:10 22/01/2020</TableText>
                            <TableText>TxID{'  '}</TableText>
                        </ValuesField>
                    </>
                </BottomField>

                <BottomField>
                    <SubTitle>Shares</SubTitle>

                    <TitleField>
                        <TableTitle>Address</TableTitle>
                        <TableTitle>Size</TableTitle>
                        <TableTitle>Label</TableTitle>
                        <TableTitle>Paid</TableTitle>
                        <TableTitle>{''}</TableTitle>
                        <TableTitle>{''}</TableTitle>
                    </TitleField>
                    <>
                        <ValuesField>
                            <BalanceText>35asx....xadf</BalanceText>
                            <TableText>100</TableText>
                            <TableText>Estevan Pedro</TableText>
                            <TableText>0.001</TableText>
                            <TableText>{''}</TableText>
                            <TableText>{''}</TableText>
                        </ValuesField>

                    </>
                </BottomField>

            </Bottom>

        </Container >
    )
}

export default SplitDetails
