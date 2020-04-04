import axios from 'axios'

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


  // TODO: methods documentation

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
        },
        this.options
      ).then((response: any) => {
        console.log('response login: ', response, response.message)
        return response
      })
      .catch((err) => {
        console.log('catch err login: ', err.message)
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
            return true // if false -> Error: Request failed with status code 400
          },
        }
      )
      .catch(err => {
        console.log(err)
      })
      .then((response: any) => {
        console.log('response of UserSignup: ', response)
        return response
      })
  }

  getProfile = async (secretToken: string) => {
    return await axios.get(`${this.url}/profile?secret_token=${secretToken}`)
  }
}

export default new Api()
