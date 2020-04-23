import axios from 'axios'

import { SchemeInfo } from './apiTypes'

export interface CreateUserData {
  username: string
  password: string
  fullname: string
  email: string
}

export interface SchemeDetailsData {
  secretToken: string
  schemeId: string
}

export interface GetHistoryData {
  secretToken: string
  address: string
}
class Api {
  url: string
  options: {
    headers: Object
  }

  constructor() {
    this.url = process.env.REACT_APP_API_ENDPOINT as string
    this.options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    }
  }

  /**
   * User login request
   * @param {string} username
   * @param {string} password
   */
  login = async (userData: { username: string; password: string }) => {
    const { username, password } = userData
    try {
      const response = await axios.post(`${this.url}/login`, {
        username,
        password,
      })
      return response
    } catch (err) {
      throw Error(`Error on Login request: ${err.message}`)
    }
  }

  /**
   * User signup request
   * @param {CreateUserData} createUserData signup user info
   */
  signup = async (createUserData: CreateUserData) => {
    const { username, password, fullname, email } = createUserData
    try {
      const response = await axios.post(`${this.url}/signup`, {
        username,
        password,
        fullname,
        email,
      })

      return response
    } catch (err) {
      throw Error(`Error on Signup request: ${err.message}`)
    }
  }

  /**
   * Forgot password request
   * @param {string} email accout email
   */
  forgotPassword = async (email: string) => {
    try {
      const response = await axios.post(`${this.url}/forgot`, {
        email,
      })

      return response
    } catch (err) {
      throw Error(`Error on Forgot Password request: ${err.message}`)
    }
  }

  /**
   * Reset user password request
   * @param {string} reset_token
   * @param {string} password
   */
  resetPassword = async (reset_token: string, password: string) => {
    try {
      const response = await axios.post(`${this.url}/reset`, {
        reset_token,
        password,
      })

      return response
    } catch (err) {
      throw Error(`Error on Reset Password request: ${err.message}`)
    }
  }

  /**
   * Get user profile request
   * @param {string} secretToken user secret token
   */
  getProfile = async (secretToken: string) => {
    try {
      const response = await axios.get(`${this.url}/user-details`, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })
      return response
    } catch (err) {
      throw Error(`Error on get Profile request: ${err.message}`)
    }
  }

  /**
   * Get public schemes library
   */
  getLibrary = async () => {
    try {
      const response = await axios.get(`${this.url}/library`)
      return response
    } catch (err) {
      throw Error(`Error on get Library request: ${err.message}`)
    }
  }

  /**
   * Get all user schemes
   * @param {string} secretToken user secret token
   */
  getMySchemes = async (secretToken: string) => {
    try {
      const response = await axios.get(`${this.url}/scheme`, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })
      return response
    } catch (err) {
      throw Error(`Error on get My Schemes request: ${err.message}`)
    }
  }

  /**
   * Get scheme data request
   * @param {SchemeDetails} data scheme id and user secret token
   */
  getSchemeDetails = async (data: SchemeDetailsData) => {
    try {
      const { secretToken, schemeId } = data

      const response = await axios.get(`${this.url}/scheme/${schemeId}`, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })
      return response
    } catch (err) {
      throw Error(`Error on get SchemeDetails: ${err.message}`)
    }
  }

  /**
   * Create scheme request
   * @param {string} secretToken user secret token
   * @param {SchemeInfo} newSchemeInfo new scheme data
   */

  createScheme = async (secretToken: string, newSchemeInfo: SchemeInfo) => {
    try {
      const response = await axios.post(`${this.url}/scheme`, newSchemeInfo, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })

      return response
    } catch (err) {
      throw Error(`Error on Create Scheme: ${err.message}`)
    }
  }

  /**
   * Update scheme request
   * @param {string} secretToken user secret token
   * @param {string} schemeId scheme to be updated id
   * @param {ScehemInfo} schemeInfo update scheme data
   */
  updateScheme = async (
    secretToken: string,
    schemeId: string,
    schemeInfo: SchemeInfo
  ) => {
    try {
      const response = await axios.patch(
        `${this.url}/scheme/${schemeId}`,
        schemeInfo,
        {
          headers: {
            Authorization: `Bearer ${secretToken}`,
          },
        }
      )

      return response
    } catch (err) {
      throw Error(`Error on Update Scheme: ${err.message}`)
    }
  }

  /**
   * Get scheme history request
   * @param {GetHistoryData} user secret token and scheme address
   */
  getHistory = async (data: GetHistoryData) => {
    const { secretToken, address } = data
    try {
      const response = await axios.get(`${this.url}/history/${address}`, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })

      return response
    } catch (err) {
      throw Error(`Error on get History: ${err.message}`)
    }
  }
}

export default new Api()
