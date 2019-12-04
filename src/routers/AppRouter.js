import React, { useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PublicRoute from './PublicRoute'
import PrivateRoute from './PrivateRoute'
import {
  Dashboard,
  Footer,
  ForgotPassword,
  Header,
  Home,
  Login,
  Register,
  VesselList,
} from 'components'
import addCustomScript from 'utils/add-custom-script'

export function AppRouter() {
  useEffect(() => {
    addCustomScript()
  }, [])

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Home} exact={true} />
          <Route path="/vessel-list" component={VesselList} />
          <PublicRoute path="/login" component={Login} />
          <PublicRoute path="/register" component={Register} />
          <PublicRoute path="/forgot-password" component={ForgotPassword} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          {/* <Route component={NotFoundPage} /> */}
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default AppRouter
