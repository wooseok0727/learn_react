import { useCallback, useState } from 'react'
import AppStateContext from '../contexts/AppStateContext'
import { prototypesData } from '../data'

const AppStateProvider = ({ children }) => {
  const [prototypes] = useState(prototypesData)
  const [orders, setOders] = useState([])

  const addToOrder = useCallback(id => {
    setOders(orders => {
      const finded = orders.find(order => order.id === id)

      if (finded === undefined) {
        return [...orders, { id, quantity: 1 }]
      } else {
        return orders.map(order => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            }
          } else {
            return order
          }
        })
      }
    })
  }, [])

  const remove = useCallback(id => {
    setOders(orders => {
      return orders.filter(order => order.id !== id)
    })
  }, [])

  const removeAll = useCallback(() => {
    setOders([])
  }, [])

  return (
    <AppStateContext.Provider
      value={{
        prototypes,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}>
      {children}
    </AppStateContext.Provider>
  )
}

export default AppStateProvider
