import React, { useContext } from 'react'
import Title, { SubTitle } from '../../components/Title'
import { Text, ApiTitles, ItalicText, Paragraph, CodeText, Container } from './elements'
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
import { ThemeContext } from 'styled-components'
import ReactJsons from './ReactJsons'

const Api = () => {
  return (
    <Container>
      <Title>Api</Title>

      <ApiTitles>Read the documentation in Postman: https://www.getpostman.com/collections/95da206e74f9db895034</ApiTitles>

      <ApiTitles>What is Split Master?</ApiTitles>
      <ItalicText>As the name says, split them all!</ItalicText>
      <Paragraph />
      <Text>
        The Split Master Platform, has the main function, the division of bitcoin, but also, there are several others tools beyond the split, like Timer, Event, Swap and Notify. You can choice whatever you want, and create amazing applications using the dashboard to create visually or the API Rest.
      </Text>

      <ApiTitles>How to create a new scheme using the API</ApiTitles>
      <Text>
        To create an scheme, use post in /scheme endpoint passing, <CodeText>name</CodeText>, <CodeText>payout</CodeText>, <CodeText>visibility</CodeText> and <CodeText>tree</CodeText> in the <CodeText>root</CodeText> object, and the Splitmaster Token in the <CodeText>headers</CodeText> using <CodeText>Autorization</CodeText> as showed in the Postman Documentation.
      </Text>

      <Paragraph />
      <ApiTitles>Root</ApiTitles>
      {ReactJsons(root_example)}
      <Paragraph />

      <SubTitle>Tools</SubTitle>
      <Text>
        Tools are functions that will operate automatically after the <CodeText>root</CodeText> receive an amount higher than the minimum payout.
      </Text>
      <Paragraph />

      <ApiTitles>Split</ApiTitles>
      <Text>
        After the node type split been added, after his father node (always a <CodeText>root</CodeText> node or an <CodeText>address</CodeText> node), it will divide with all his childrens all bitcoin in the father balance, proportionally to the percentages passed.
      </Text>
      <Paragraph />
      {ReactJsons(split_example)}
      <Paragraph />
      <Text>
        The process of split, will try to find the <CodeText>address</CodeText> and the <CodeText>percentage</CodeText> of his childrens with type <CodeText>address</CodeText> . It is recommend that the <CodeText>percentage</CodeText> is set to 100% in the sum of all childrens type <CodeText>address</CodeText>. Therefore we use an nomalization function, if the sum of percentages is not 100%, we use an "rule of three" to give the proportionally amount. An simple example: Address A has 25% and Address B has 25%, so in the "rule of three", both will have 50%, closing 100% in the end.
      </Text>

      <Paragraph />
      <ApiTitles>Timer</ApiTitles>
      <Text>
        The Tool Timer is used to agend an operation in the future. It requires the <CodeText>name</CodeText> and <CodeText>time</CodeText> object with <CodeText>hours</CodeText>, <CodeText>minutes</CodeText> and <CodeText>seconds</CodeText> fields in the <CodeText>info</CodeText> object. Theses values will be added to time when the node is processed. A simple example, if the date is 01/01/2020 07:00:00, and the <CodeText>time</CodeText> is equal to <CodeText>"hour": 1, "minutes": 0, "seconds": 0</CodeText>, then the next node will execute at 01/01/2020 08:00:00.
      </Text>
      <Paragraph />
      <ItalicText>The only children node available is the split.</ItalicText>
      <Paragraph />
      {ReactJsons(timer_example)}

      <Paragraph />
      <ApiTitles>Swap</ApiTitles>
      <Text>
        The Tool Swap is experimental, needs CDA account logged in the Splitmaster to get the token and the splitmaster<CodeText>user_id</CodeText> to create the scheme with it. In the background, we save your CDA account to generate CDA Token and the Splitmaster Token, it will be used when Splitmaster API calls the CDA API Endpoint /trade, to create the swap request, converting all bitcoin above 0.01 BTC to BRL (Reais).
      </Text>
      <Paragraph />
      <ItalicText>The only children available is notify.</ItalicText>
      <Paragraph />
      {ReactJsons(swap_example)}

      <Paragraph />
      <ApiTitles>Event</ApiTitles>
      <Text>
        The Tool Event is used to execute the next node after the price of Bitcoin reach a specific price,
      It requires the fields <CodeText>event_price</CodeText> and the <CodeText>direction</CodeText> in the <CodeText>info</CodeText> object of event node. A simple example, if the user select <CodeText>event_price</CodeText> equal to US$ 8,000.00, and the <CodeText>direction</CodeText> equal to <CodeText>above</CodeText>. When the node is processed, it will create a job in the Splitmaster background, checking the price every 10 minutes, until the price is above of the selected price, then, the next node will be executed.
      </Text>
      <Paragraph />
      <ItalicText>The only available childrens are <CodeText>split</CodeText>, <CodeText>swap</CodeText> and <CodeText>notify</CodeText>.</ItalicText>
      <Paragraph />
      {ReactJsons(event_example)}

      <Paragraph />
      <ApiTitles>Notify</ApiTitles>
      <Text>
        The Tool Notify is used to send an e-mail after the node is executed. Whether <CodeText>swap</CodeText>, <CodeText>event</CodeText>, <CodeText>address</CodeText> or <CodeText>root</CodeText>. It requires the <CodeText>emails</CodeText> fields in the <CodeText>info</CodeText> node.
      </Text>
      <Paragraph />
      <ItalicText>No available childrens.</ItalicText>
      <Paragraph />
      {ReactJsons(notify_example)}

      <Paragraph />
      <ApiTitles>Tree</ApiTitles>
      <Text>
        The <CodeText>tree</CodeText> is where everything happens, the first node of the user scheme, where children of children of children (…) are located, and it has the <CodeText>address</CodeText> of the node, so it can receive BTC any moment, has <CodeText>type</CodeText> equal to <CodeText>root</CodeText> and the <CodeText>children</CodeText>, where the next node will be located.
      </Text>
      <Paragraph />
      {ReactJsons(tree_example)}

      <Paragraph />
      <ApiTitles>Address</ApiTitles>
      <Text>
        The <CodeText>address</CodeText> node is used after the <CodeText>split</CodeText> node, where all bitcoin's father will be divide. It can receive children of type <CodeText>split</CodeText>, <CodeText>notify</CodeText>, <CodeText>timer</CodeText>, <CodeText>swap</CodeText> and <CodeText>event</CodeText>. It has the <CodeText>percentage</CodeText> in the <CodeText>info</CodeText> object.
      </Text>
      <Paragraph />
      <Text>
        If the user let the <CodeText>address</CodeText> field equal to <CodeText>[ ]</CodeText> (None), the Splitmaster API will generate a new address to the node. But if the user add an existing address, can not process any other node after it, so it is the end of the tree for that node.
      </Text>
      <Paragraph />
      {ReactJsons(address_example)}
      <Paragraph />
      <Paragraph />

      <Text>
        Clearing all said, the valid children type for each father type is showed in the illustration bellow.
      </Text>
      <Paragraph />
      {ReactJsons(valid_children_type)}
      <Paragraph />

      <Text>
        All fields required in the <CodeText>info</CodeText> object, is showed bellow.
      </Text>
      <Paragraph />
      {ReactJsons(fields_by_type)}
      <Paragraph />
      <Paragraph />

      <Text>
        Any other question about the API, can be found in the Postman documentation: https://www.getpostman.com/collections/95da206e74f9db895034
      </Text>
      <Paragraph />
      <Paragraph />

    </Container >
  )
}

export default Api