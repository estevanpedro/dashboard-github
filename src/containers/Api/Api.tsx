import React from 'react'
import Title, { SubTitle } from '../../components/Title'
import { Text, TextMargin } from './elements'
const Api = () => {
  return (
    <div>
      <Title>Api</Title>

      <SubTitle>Read the documentation in Postman</SubTitle>
      <TextMargin>https://www.getpostman.com/collections/95da206e74f9db895034</TextMargin>

      <SubTitle> How a tree is processed</SubTitle>
      <Text>1. First there has to be a tree to be processed, the scheme controller has the post method for that.</Text>
      <Text>2. After tree is present, we must validate that it follow simple rules - all the nodes must adhere for it's defined rules.</Text>
      <Text>3. All nodes must have known type (split, timer, etc...)</Text>
      <Text>4. Each node type has it's own set of rules (split has address)</Text>
      <Text>5. Register web hook with block.io</Text>
      <Text>6. On movement on the account, verify if threshold is met and if then, trigger tree processing</Text>
      <Text>7. Each node has a corresponding function, it accepts a tree as parameter, and execute the node function</Text>
      <Text>8. For split, it send a transaction request for the blockio api, and schedule a job for validating the transaction. on transaction validated, call the corresponding function for all the children nodes.</Text>


      <TextMargin>News soon...</TextMargin>
    </div >
  )
}

export default Api