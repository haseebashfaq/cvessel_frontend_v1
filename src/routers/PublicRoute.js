import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { UserConsumer } from 'context'

export function PublicRoute({ component: Component, ...rest }) {
  return (
    <UserConsumer>
      {user => (
        <Route
          {...rest}
          render={props =>
            user.isAuthenticated ? (
              <Redirect
                to={{
                  pathname: '/dashboard',
                  state: { from: props.location },
                }}
              />
            ) : (
              <Component {...props} />
            )
          }
        />
      )}
    </UserConsumer>
  )
}

export default PublicRoute
