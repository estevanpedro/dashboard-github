import axios from 'axios'

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

  login = async (userData: {
    username: string
    password: string
  }) => {
    const { username, password } = userData
    return await axios
      .post(
        `${this.url}/login`,
        {
          username,
          password,
        }
      )
      .then((response: any) => {
        console.log('response login: ', response)
        return response
      })
      .catch((err) => {
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
      .get(`${this.url}/user-details`,
        {
          headers: {
            Authorization: `Bearer ${secretToken}`
          }
        })
      .then((response: any) => {
        console.log('Trying to getProfile: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch getProfile: ', err)
      })
  }

  // API RESPONSE INCOMPLETE
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

  // API RESPONSE INCOMPLETE
  getMySchemes = async (secretToken: string) => {
    return await axios
      .get(`${this.url}/scheme`,
        {
          headers: {
            Authorization: `Bearer ${secretToken}`
          }
        }
      )
      .then((response: any) => {
        console.log('Trying to getMySchemes: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch getMySchemes error: ', err)
      })
  }

  // THIS AXIOS WAS NOT TESTED... API INCOMPLETE
  createScheme = async (
    {
      secretToken,
      json,
    }:
      {
        secretToken: string;
        json: any
      }
  ) => {
    return await axios
      .post(`${this.url}/scheme`,
        {
          headers: {
            Authorization: `Bearer ${secretToken}`
          }
        },
        json
      )
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
    {
      secretToken,
      schemeId,
      json,
    }: {
      secretToken: string;
      schemeId: any;
      json: any
    }) => {
    return await axios
      .post(`${this.url}/scheme/${schemeId}`,
        json,
        {
          headers: { Authorization: `Bearer ${secretToken}` }
        },
      )
      .then((response: any) => {
        console.log('Trying to createScheme: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch createScheme error: ', err)
      })
  }

  // THIS AXIOS WAS NOT TESTED... API INCOMPLETE
  splitDetails = async ({ secretToken, schemeId, }: { secretToken: string; schemeId: any }) => {
    return await axios
      .post(`${this.url}/scheme/${schemeId}`,
        {
          headers: { Authorization: `Bearer ${secretToken}` }
        },
      )
      .then((response: any) => {
        console.log('Trying to createScheme: ', response)
        return response
      })
      .catch((err: any) => {
        console.log('Axios catch createScheme error: ', err)
      })
  }

}


export default new Api()
