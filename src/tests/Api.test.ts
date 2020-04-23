import Api from '../Api'
import axios from 'axios'
import { mocked } from 'ts-jest/utils'

import { SchemeInfo } from '../apiTypes'

jest.mock('axios')
const axiosMock = mocked(axios, true)

describe('Api', () => {
  it('should POST login as expected', async () => {
    const expectedResult = 'test'
    axiosMock.post.mockResolvedValueOnce(expectedResult)

    const testUser = {
      username: 'Test Login',
      password: '123456',
    }

    const result = await Api.login(testUser)

    expect(axiosMock.post).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should POST signup as expected', async () => {
    const expectedResult = 'test'
    axiosMock.post.mockResolvedValueOnce(expectedResult)

    const testUser = {
      username: 'Test Login',
      password: '123456',
      fullname: 'Test Login test',
      email: 'test@test.com',
    }

    const result = await Api.signup(testUser)

    expect(axiosMock.post).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should POST forgot password as expected', async () => {
    const expectedResult = 'test'
    axiosMock.post.mockResolvedValueOnce(expectedResult)

    const result = await Api.forgotPassword('test@test.com')

    expect(axiosMock.post).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should POST reset password as expected', async () => {
    const expectedResult = 'test'
    axiosMock.post.mockResolvedValueOnce(expectedResult)

    const result = await Api.resetPassword('test_token', '123456')

    expect(axiosMock.post).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should GET profile as expected', async () => {
    const expectedResult = 'test'
    axiosMock.get.mockResolvedValueOnce(expectedResult)

    const result = await Api.getProfile('secretToken')

    expect(axiosMock.get).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should GET library as expected', async () => {
    const expectedResult = 'test'
    axiosMock.get.mockResolvedValueOnce(expectedResult)

    const result = await Api.getLibrary()

    expect(axiosMock.get).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should GET My Schemes expected', async () => {
    const expectedResult = 'test'
    axiosMock.get.mockResolvedValueOnce(expectedResult)

    const result = await Api.getMySchemes('secretToken')

    expect(axiosMock.get).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should GET scheme details as expected', async () => {
    const expectedResult = 'test'
    axiosMock.get.mockResolvedValueOnce(expectedResult)

    const schemeData = {
      secretToken: 'secretToken',
      schemeId: 'schemeId',
    }

    const result = await Api.getSchemeDetails(schemeData)

    expect(axiosMock.get).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should POST create scheme as expected', async () => {
    const expectedResult = 'test'
    axiosMock.post.mockResolvedValueOnce(expectedResult)

    const newSchemeInfo: SchemeInfo = {
      name: 'test',
      fee: true,
      payout: '0.001',
      visibility: 'private',
      tree: {
        id: '1',
        type: 'split',
        name: 'Test',
        children: [],
      },
    }

    const result = await Api.createScheme('secretToken', newSchemeInfo)

    expect(axiosMock.post).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should PATCH update scheme as expected', async () => {
    const expectedResult = 'test'
    axiosMock.patch.mockResolvedValueOnce(expectedResult)

    const schemeInfo: SchemeInfo = {
      name: 'test',
      fee: true,
      payout: '0.001',
      visibility: 'private',
      tree: {
        id: '1',
        type: 'split',
        name: 'Test',
        children: [],
      },
    }

    const result = await Api.updateScheme('secretToken', 'schemeId', schemeInfo)

    expect(axiosMock.patch).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })

  it('should GET history as expected', async () => {
    const expectedResult = 'test'
    axiosMock.get.mockResolvedValueOnce(expectedResult)

    const schemeData = {
      secretToken: 'secretToken',
      address: 'address',
    }

    const result = await Api.getHistory(schemeData)

    expect(axiosMock.get).toHaveBeenCalled()
    expect(result).toBe(expectedResult)
  })
})
