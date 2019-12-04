import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import AppRouter from 'routers/AppRouter'
import { UserProvider } from 'context'
import client from 'api/apollo'

function App() {
  return (
    <ApolloProvider client={client}>
      <UserProvider>
        <AppRouter />
      </UserProvider>
    </ApolloProvider>
  )
}

export default App
