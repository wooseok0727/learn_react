import axios from 'axios'
import { LoginReqType } from '../types'

const URL = process.env.REACT_APP_USER_API_URL

export default class UserService {
  public static async login(reqData: LoginReqType): Promise<string> {
    const response = await axios.post(URL, reqData)
    return response.data.token
  }

  public static async logout(token: string): Promise<void> {
    await axios.delete(URL, {
      headers: { Authorization: `Bearer ${token}` },
    })
  }
}
