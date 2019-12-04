import React, { useState, useEffect, createContext } from 'react'
import { useMeQuery } from 'generated/graphql'
import { deleteCookie } from 'utils/cookies'
import { COOKIE_ACCESS_TOKEN } from 'utils/constants'

export const UserContext = createContext()

export function UserProvider({ children }) {
  const { called, loading, error, data } = useMeQuery()
  console.log('data: ', data)
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState({ isAuthenticated: false, data: {} })

  useEffect(() => {
    if (called && !loading && data) {
      // Authenticated
      setUser({ isAuthenticated: true })
      setIsLoading(false)
    } else if (called && !loading && error) {
      // Not authenticated
      setIsLoading(false)
    }
  }, [called, loading, error, data])

  const logout = () => {
    deleteCookie(COOKIE_ACCESS_TOKEN)
    window.location.replace('/')
  }

  return (
    <UserContext.Provider value={{ ...user, logout }}>
      {isLoading ? (
        <div id="preloader">
          <div id="status">&nbsp;</div>
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  )
}

export const UserConsumer = UserContext.Consumer
