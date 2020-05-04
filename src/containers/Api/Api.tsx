import React from 'react'
import Title, { SubTitle } from '../../components/Title'
import ReactJsons from './ReactJsons'
import { useTranslation } from 'react-i18next'

import {
  Text,
  ApiTitles,
  ItalicText,
  Paragraph,
  CodeText,
  Container,
} from './elements'
import split_example from './jsons/split_example.json'
import address_example from './jsons/address_example.json'
import event_example from './jsons/event_example.json'
import fields_by_type from './jsons/fields_by_type.json'
import notify_example from './jsons/notify_example.json'
import root_example from './jsons/root_example.json'
import swap_example from './jsons/swap_example.json'
import timer_example from './jsons/timer_example.json'
import tree_example from './jsons/tree_example.json'
import valid_children_type from './jsons/valid_children_type.json'


const Api = () => {
  const { t } = useTranslation()
  return (
    <Container>
      <Title>Api</Title>

      <ApiTitles>
        {t('api.readTheDoc')} {' '}
        https://documenter.getpostman.com/view/10015561/Szmb5JkF?version=latest
      </ApiTitles>

      <ApiTitles>{t('api.What is Split Master')}?</ApiTitles>
      <ItalicText>{t('api.As the name says, split them all')}!</ItalicText>
      <Paragraph />
      <Text>
        {t('api.splitMasterDescription')}
      </Text>

      <ApiTitles>{t('api.How to create a new scheme using the API')}</ApiTitles>
      <Text>
        {t('api.To create an scheme, use post in /scheme endpoint passing')},{' '}
        <CodeText>name</CodeText>, <CodeText>payout</CodeText>,{' '}
        <CodeText>visibility</CodeText> {t('api.and')} <CodeText>tree</CodeText> {t('api.in the')}{' '}
        <CodeText>root</CodeText> {t('api.object, and the Splitmaster Token in the')}{' '}
        <CodeText>headers</CodeText> {t('api.using')} <CodeText>Autorization</CodeText> {t('api.as shown in the Postman Documentation')}
      </Text>

      <Paragraph />
      <ApiTitles>Root</ApiTitles>
      {ReactJsons(root_example)}
      <Paragraph />

      <SubTitle>{t('api.tools')}</SubTitle>
      <Text>
        {t('api.Tools are functions that will operate automatically after the')}{' '}
        <CodeText>root</CodeText> {t('api.receive an amount higher than the minimum payout')}
      </Text>
      <Paragraph />

      <ApiTitles>Split</ApiTitles>
      <Text>
        {t('api.After the node type split been added, after his father node (always a')}{' '}
        <CodeText>root</CodeText> {t('api.node or an')} <CodeText>address</CodeText> {t('api.node)')},{' '}
        {t('api.it will divide with all his')}
      </Text>
      <Paragraph />
      {ReactJsons(split_example)}
      <Paragraph />
      <Text>
        {t('api.The process of split, will try to find the ')}<CodeText>address</CodeText>{' '}
        {t('api.and the')} <CodeText>percentage</CodeText> {t('api.of his childrens with type')}{' '}
        <CodeText>address</CodeText>.{' '}{t('api.It is recommend that the')}{' '}
        <CodeText>percentage</CodeText> {t('api.is set to 100% in the sum of all childrens type')} <CodeText>address</CodeText>. {t('api.therefore')}
      </Text>

      <Paragraph />
      <ApiTitles>{t('api.Timer')}</ApiTitles>
      <Text>
        {t('api.The Tool Timer is used to')} <CodeText>name</CodeText> and <CodeText>time</CodeText> {t('api.object with')}{' '}
        <CodeText>hours</CodeText>, <CodeText>minutes</CodeText> {t('and')}{' '}
        <CodeText>seconds</CodeText> {t('api.fields in the')} <CodeText>info</CodeText>{' '}
        {t('api.object Theses values')}{' '}
        <CodeText>time</CodeText> {t('api.is equal to')}{' '}
        <CodeText>"hour": 1, "minutes": 0, "seconds": 0</CodeText>, {t('api.then the next node will execute')}.
      </Text>
      <Paragraph />
      <ItalicText>{t('api.The only children node available is the split')}</ItalicText>
      <Paragraph />
      {ReactJsons(timer_example)}

      <Paragraph />
      <ApiTitles>Swap</ApiTitles>
      <Text>
        {t('api.The Tool Swap is experimental, needs CDA')}
        <CodeText>user_id</CodeText> {t('api.to create the scheme with it')}
      </Text>
      <Paragraph />
      <ItalicText>{t('api.The only children available is notify')}</ItalicText>
      <Paragraph />
      {ReactJsons(swap_example)}

      <Paragraph />
      <ApiTitles>{t('api.Event')}</ApiTitles>
      <Text>
        {t('api.The Tool Event is used to execute the next')}{' '}
        <CodeText>event_price</CodeText> {t('api.andthe')} <CodeText>direction</CodeText>{' '}
        {t('api.in the')} <CodeText>info</CodeText> {t('api.object of event node A simple example')} <CodeText>event_price</CodeText> {t('api.equal to US$ 8,00000, and the')} <CodeText>direction</CodeText> {t('api.equal to')}{' '}
        <CodeText>above</CodeText>. {t('api.When the node is processed, it will create')}
      </Text>
      <Paragraph />
      <ItalicText>
        {t('api.The only available childrens are')} <CodeText>split</CodeText>,{' '}
        <CodeText>swap</CodeText> {t('api.and')} <CodeText>notify</CodeText>.
      </ItalicText>
      <Paragraph />
      {ReactJsons(event_example)}

      <Paragraph />
      <ApiTitles>{t('api.Notify')}</ApiTitles>
      <Text>
        {t('api.The Tool Notify is used to send an email after the node is executed Whether')} <CodeText>swap</CodeText>, <CodeText>event</CodeText>,{' '}
        <CodeText>address</CodeText> {t('api.or')} <CodeText>root</CodeText>. {t('api.It requires the')} <CodeText>emails</CodeText> {t('api.fields in the')} <CodeText>info</CodeText>{' '}
        {t('api.node')}.
      </Text>
      <Paragraph />
      <ItalicText>{t('api.No available childrens')}</ItalicText>
      <Paragraph />
      {ReactJsons(notify_example)}

      <Paragraph />
      <ApiTitles>Tree</ApiTitles>
      <Text>
        {t('api.The')} <CodeText>tree</CodeText> {t('api.is where everything happens, the')} <CodeText>address</CodeText> {t('api.of the node, so it can receive BTC any moment, has')} <CodeText>type</CodeText> {t('api.equal to')}{' '}
        <CodeText>root</CodeText> {t('api.and the')} <CodeText>children</CodeText>, {t('api.where the next node will be located')}.
      </Text>
      <Paragraph />
      {ReactJsons(tree_example)}

      <Paragraph />
      <ApiTitles>Address</ApiTitles>
      <Text>
        {t('api.The')} <CodeText>address</CodeText> {t('api.can use')} <CodeText>split</CodeText>,{' '}
        <CodeText>notify</CodeText>, <CodeText>timer</CodeText>,{' '}
        <CodeText>swap</CodeText> {t('api.and')} <CodeText>event</CodeText>. {t('api.It has the')}{' '}
        <CodeText>percentage</CodeText> {t('api.in the')} <CodeText>info</CodeText> {t('api.object')} .
      </Text>
      <Paragraph />
      <Text>
        {t('api.If the user let the')} <CodeText>address</CodeText> {t('api.field equal to')}{' '}
        <CodeText>[ ]</CodeText> {t('api.(None), the Splitmaster API will generate a new')}
      </Text>
      <Paragraph />
      {ReactJsons(address_example)}
      <Paragraph />
      <Paragraph />

      <Text>
        {t('api.Clearing all said, the valid children type')}
      </Text>
      <Paragraph />
      {ReactJsons(valid_children_type)}
      <Paragraph />

      <Text>
        {t('api.All fields required in the')} <CodeText>info</CodeText> {t('api.object, is shown below')}
      </Text>
      <Paragraph />
      {ReactJsons(fields_by_type)}
      <Paragraph />
      <Paragraph />

      <Text>
        {t('api.Any other question about the API')} {' '}
        https://documenter.getpostman.com/view/10015561/Szmb5JkF?version=latest
      </Text>
      <Paragraph />
      <Paragraph />
    </Container>
  )
}

export default Api
