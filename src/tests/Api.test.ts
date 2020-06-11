import Api from '../Api'
import axios from 'axios'
import { mocked } from 'ts-jest/utils'


jest.mock('axios')
const axiosMock = mocked(axios, true)

describe('Api', () => {
  it('should GET Details as expected', async () => {
    const expectedResult = 'test'
    axiosMock.get.mockResolvedValueOnce(expectedResult)

    const usernameTest = 'estevanpedro'

    const result = await Api.getUserDetails(usernameTest)

    expect(axiosMock.get).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })
  it('should GET Repos as expected', async () => {
    const expectedResult = 'test'
    axiosMock.get.mockResolvedValueOnce(expectedResult)

    const usernameTest = 'estevanpedro'

    const result = await Api.getUserRepos(usernameTest)

    expect(axiosMock.get).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })
  it('should GET List as expected', async () => {
    const expectedResult = 'test'
    axiosMock.get.mockResolvedValueOnce(expectedResult)

    const sinceTest = 130

    const result = await Api.getUserRepos(sinceTest)

    expect(axiosMock.get).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

})
