import React from 'react'
import Title from '../../components/Title'
import { SubTitle } from '../../components/Title'
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
    ValuesField,
    TableText,
    BalanceText,
    EditButton,
    Line,
    GraphicText,
    EditIcon,
} from './elements'
import { Bar, Pie } from 'react-chartjs-2';
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

const SplitDetails = ({
    SplitExample,
    historyExample,
    createShareList,
    createTransList,
}: {
    SplitExample: any;
    historyExample: any;
    createShareList: any;
    createTransList: any;
}) => {
    console.log('SplitExample: ', SplitExample)

    {/**
replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.')
replace("^[A-Za-z]{2}[0-9]{2}\z")
*/}
    const name = 'estevan pedro wisoczynski'
    console.log(
        name.charAt(0).toUpperCase() +
        name.slice(1).split(" ")[0] +
        " " +
        name.slice(1).split(" ")[1].charAt(0).toUpperCase() +
        name.split(" ")[1].slice(1)
    )
    return (
        <Container>

            <Header>
                <Title>{SplitExample.splitName}</Title>
                <Category>
                    <CategoryName size="verySmall">
                        {SplitExample.public ? 'Public' : 'Private'}
                    </CategoryName>
                </Category>
                <EditButton onClick={() => { }}>Edit Scheme</EditButton>
            </Header>

            <Body>

                <QRField>
                    <QRCode value={SplitExample.address} />
                </QRField>

                <DetailsField>
                    <SubtitleText>Wallet Address</SubtitleText>
                    <PayloadText>{SplitExample.address}</PayloadText>
                    <SubtitleText>Balance</SubtitleText>
                    <PayloadText>{SplitExample.balance} BTC</PayloadText>
                    <SubtitleText>Payout</SubtitleText>
                    <PayloadText>{SplitExample.payout}</PayloadText>
                    <SubtitleText>Service Fee</SubtitleText>
                    <PayloadText>{SplitExample.serviceFee ? 'Yes' : 'No'}</PayloadText>
                </DetailsField>

                <GraphicField>
                    <Pie data={data} />
                </GraphicField>


                <GraphicField>
                    <Bar data={data2} options={{ maintainAspectRatio: true }} />
                    <GraphicText size={'verySmall'}>
                        Last Month: + 1.33%
                    </GraphicText>
                    <GraphicText size={'verySmall'}>
                        Year to Date: + 33.33%
                    </GraphicText>
                </GraphicField>
            </Body>

            <Line></Line>

            <Bottom>

                <BottomField>
                    <SubTitle>Transactions</SubTitle>

                    <TitleField>
                        <TableTitle width="70px">Balance</TableTitle>
                        <TableTitle>Time UTC</TableTitle>
                        <TableTitle>Info</TableTitle>
                    </TitleField>
                    {createTransList()}
                </BottomField>

                <BottomField>
                    <Header>
                        <SubTitle>Shares</SubTitle>
                        <IconButton
                            icon={Edit}
                            onClick={() => {
                                console.log('Open modal to edit scheme with ID equal to:')
                            }}
                        />
                    </Header>
                    <TitleField>
                        <TableTitle width="60px">Address</TableTitle>
                        <TableTitle width="25px">Size</TableTitle>
                        <TableTitle width="100px">Label</TableTitle>
                        <TableTitle width="40px">Paid</TableTitle>
                    </TitleField>
                    {createShareList()}
                </BottomField>

            </Bottom>

        </Container >
    )
}

export default SplitDetails
