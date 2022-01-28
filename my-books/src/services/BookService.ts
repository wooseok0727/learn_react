import axios from 'axios'
import { BookReqType, BookType } from '../types'

const URL = process.env.REACT_APP_BOOK_API_URL

export default class BookService {
  public static async getBooks(token: string): Promise<BookType[]> {
    const response = await axios.get(URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  public static async addBook(
    token: string,
    book: BookReqType
  ): Promise<BookType> {
    const response = await axios.post(URL, book, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    return response.data
  }

  public static async deleteBook(token: string, bookId: number) {
    await axios.delete(`${URL}/${bookId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  }
}
