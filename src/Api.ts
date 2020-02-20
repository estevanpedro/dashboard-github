import axios from 'axios'

class Api {
  url: string
  options: {
    headers: string
  }

  constructor() {
    this.url = 'https://splitmaster.herokuapp.com'
    this.options = {
      headers: 'Access-Control-Allow-Origin',
    }
  }

  login = async (loginData: { username: string; password: string }) => {
    return await axios.post(
      `${this.url}/login`,
      {
        username: loginData.username,
        password: loginData.password,
      },
      this.options
    )
  }

  createUser = async (createUserData: {
    username: string
    password: string
    fullname: string
    email: string
  }) => {
    const { username, password, fullname, email } = createUserData

    return await axios.post(
      `${this.url}/signup`,
      {
        username,
        password,
        fullname,
        email,
      },
      this.options
    )
  }
}

export default new Api()
