/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test'
    PUBLIC_URL: string
    REACT_APP_TEST: string
    REACT_APP_BOOK_API_URL: string
    REACT_APP_USER_API_URL: string
  }
}
