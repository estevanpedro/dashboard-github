import axios from 'axios'

import { SchemeInfo } from './apiTypes'

// TODO LIST
// getMySchemes
// getLibrary
// logout
// createScheme
// updateScheme

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

  login = async (userData: { username: string; password: string }) => {
    const { username, password } = userData
    return await axios
      .post(`${this.url}/login`, {
        username,
        password,
      })
      .then((response: any) => {
        console.log('response login: ', response)
        return response
      })
      .catch(err => {
        console.log('Axios catch err login: ', err.message)
      })
  }

  UserSignup = async (createUserData: {
    username: string
    password: string
    fullname: string
    email: string
  }) => {
    const { username, password, fullname, email } = createUserData
    return await axios
      .post(
        `${this.url}/signup`,
        {
          username,
          password,
          fullname,
          email,
        },
        {
          validateStatus: (status: any) => {
            return true
          },
        }
      )
      .then((response: any) => {
        console.log('response of UserSignup: ', response)
        return response
      })
      .catch(err => {
        console.log('Axios catch UserSignup: ', err)
      })
  }

  getProfile = async (secretToken: string) => {
    return await axios
      .get(`${this.url}/user-details`, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })
      .then((response: any) => {
        console.log('Trying to getProfile: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch getProfile: ', err)
      })
  }

  // API INCOMPLETE
  getLibrary = async () => {
    return await axios
      .get(`${this.url}/library`)
      .then((response: any) => {
        console.log('Trying to getLibrary: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch getLibrary error:', err)
      })
  }

  // API INCOMPLETE
  getMySchemes = async (secretToken: string) => {
    return await axios
      .get(`${this.url}/scheme`, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })
      .then((response: any) => {
        console.log('Trying to getMySchemes: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch getMySchemes error: ', err)
      })
  }

  getSchemeDetails = async (data: { secretToken: string, schemeId: any }) => {
    const { secretToken, schemeId } = data
    return await axios
      .get(`${this.url}/scheme/${schemeId}`, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })
      .then((response: any) => {
        console.log('Trying to getSchemeInfo: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch getSchemeInfo error: ', err)
      })
  }

  // THIS AXIOS WAS NOT TESTED... API INCOMPLETE
  createScheme = async (secretToken: string, newSchemeInfo: SchemeInfo) => {
    return await axios
      .post(`${this.url}/scheme`, newSchemeInfo, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })

      .then((response: any) => {
        console.log('Trying to createScheme: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch createScheme error: ', err)
      })
  }

  // THIS AXIOS WAS NOT TESTED... API INCOMPLETE
  updateScheme = async (
    secretToken: string,
    schemeId: string,
    schemeInfo: SchemeInfo
  ) => {
    return await axios
      .patch(`${this.url}/scheme/${schemeId}`, schemeInfo, {
        headers: {
          Authorization: `Bearer ${secretToken}`,
        },
      })
      .then((response: any) => {
        console.log('Trying to updateScheme: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch updateScheme error: ', err)
      })
  }

  // Need to configure the API endpoint to accpect id, right now, it only accepts _id.
  // This endpoint is used to get de history transactions of an specific scheme, utilizing the scheme to get it,
  // it should show only the transaction history of the first split of a scheme.
  getHistory = async (
    req: {
      secretToken: string
      address: any
    }) => {
    const { secretToken, address } = req
    return await axios
      .get(`${this.url}/history/${address}`,
        // .get(`http://127.0.0.1:8000/history/2MyEy6i77Xf35qhnw2drK5SexSrczGfHn4x`,
        {
          headers: {
            Authorization: `Bearer ${secretToken}`,
          },
        }
      )
      .then((response: any) => {
        // console.log('Trying to getHistory: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch getHistory error: ', err)
      })
  }
}

export default new Api()
