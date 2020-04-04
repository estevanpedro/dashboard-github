import axios from 'axios'

class Api {
  url: string
  options: {
    headers: Object
  }
  cors: string

  constructor() {
    this.url = process.env.REACT_APP_API_ENDPOINT as string
    this.options = {
      headers: {
        'Access-Control-Allow-Origin': '*',
        "X-Requested-With": "XMLHttpRequest",
        'Content-Type': 'application/json'
      },
    }
    this.cors = "http://cors-anywhere.herokuapp.com/"
  }


  // TODO: methods documentation

  login = async (userData: {
    username: string
    password: string
  }) => {
    const { username, password } = userData
    return await axios
      .post(
        `${this.cors}${this.url}/login`,
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
        `http://127.0.0.1:8000/signup`,
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
      ).catch(err => {
        console.log(err)
      })
      .then((response: any) => {
        console.log('response of UserSignup: ', response)
        return response
      })

  }

  // UserSignup = async (createUserData: {
  //   username: string
  //   password: string
  //   fullname: string
  //   email: string
  // }) => {

  //   const { username, password, fullname, email } = createUserData
  //   return await axios({
  //     method: 'post',
  //     url: `http://127.0.0.1:8000/signup`,
  //     data: {
  //       username,
  //       password,
  //       fullname,
  //       email,
  //     },
  //     headers: {
  //       'Access-Control-Allow-Origin': '*',
  //       'Content-Type': 'application/json'
  //     },
  //     validateStatus: (status: any) => {
  //       return true
  //     },
  //   })
  //     .catch((err: any) => {

  //     })
  //     .then((response: any) => {
  //       console.log('response of UserSignup: ', response)
  //       return response
  //     })

  // }

  getProfile = async (secretToken: string) => {
    return await axios.get(`${this.url}/profile?secret_token=${secretToken}`)
  }
}

export default new Api()
