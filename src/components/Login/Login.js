import React, { useState, useEffect, useReducer } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLoginMutation } from 'generated/graphql'
import { addCookie } from 'utils/cookies'
import { COOKIE_ACCESS_TOKEN } from 'utils/constants'

export function Login() {
  const location = useLocation()

  const [hasEmptyFields, setHasEmptyFields] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [login, { loading, error }] = useLoginMutation()

  const inputDefaultValues = { email: '', password: '' }
  const inputReducer = (state, newState) => ({
    ...state,
    ...newState,
  })

  const [inputValues, setInputValues] = useReducer(
    inputReducer,
    inputDefaultValues,
  )

  useEffect(() => {
    if (error && error.graphQLErrors[0]) {
      setErrorMessage(error.graphQLErrors[0].message)
    } else if (error && !error.graphQLErrors[0]) {
      setErrorMessage('Something went wrong.')
    }
  }, [error])

  const handleInputChange = event => {
    const { name, value } = event.target
    setInputValues({ [name]: value })
  }

  const handleLogin = async e => {
    e.preventDefault()

    hasEmptyFields && setHasEmptyFields(false)
    errorMessage && setErrorMessage(false)

    const { email, password } = inputValues

    if (!email || !password) {
      return setHasEmptyFields(true)
    } else {
      setHasEmptyFields(false)
    }

    try {
      const result = await login({
        variables: {
          data: { email, password },
        },
      })

      const token = result.data.login.token

      addCookie(COOKIE_ACCESS_TOKEN, token)

      const { from } = location.state || { from: { pathname: '/' } }
      window.location.replace(from.pathname)
    } catch (error) {}
  }

  return (
    <>
      {/* // <!--PRE LOADING--> */}
      {/* <div id="preloader">
        <div id="status">&nbsp;</div>
      </div> */}
      <section className="tz-register">
        <div className="log-in-pop">
          <div className="log-in-pop-left">
            <h1>Hello Visitor</h1>
            <p>
              Don't have an account? Create your account. It takes less then a
              minutes
            </p>
            <h4>Login with social media</h4>
            <ul>
              <li>
                <button className="social-btn facebook">
                  <i className="fa fa-facebook"></i> Facebook
                </button>
              </li>
              <li>
                <button className="social-btn google">
                  <i className="fa fa-google"></i> Google+
                </button>
              </li>
              <li>
                <button className="social-btn twitter">
                  <i className="fa fa-twitter"></i> Twitter
                </button>
              </li>
            </ul>
          </div>
          <div className="log-in-pop-right">
            <h4>Login</h4>
            <p>
              Already have an account? Log in to manage your profile and
              bookings.
            </p>
            <form className="s12">
              <div>
                <div className="input-field s12">
                  <input
                    type="text"
                    data-ng-model="name1"
                    className="validate"
                    id="login_email"
                    name="email"
                    onChange={handleInputChange}
                  />
                  <label>Email</label>
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  <input
                    type="password"
                    className="validate"
                    id="login_password"
                    name="password"
                    onChange={handleInputChange}
                  />
                  <label>Password</label>
                </div>
              </div>
              <div>
                <div className="input-field s4">
                  <button
                    id="loginbtn"
                    type="submit"
                    className="waves-effect waves-light log-in-btn"
                    onClick={handleLogin}
                  >
                    Login
                  </button>
                  {loading && <i className="fa fa-spinner fa-3x fa-spin"></i>}
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  {' '}
                  <Link to="/forgot-password">Forgot password</Link> |{' '}
                  <Link to="/register">Create a new account</Link>{' '}
                </div>
              </div>
            </form>

            {errorMessage && (
              <div className="alert alert-danger login-alert error-alert">
                {errorMessage}
              </div>
            )}
            {hasEmptyFields && (
              <div className="alert alert-danger login-alert error-alert">
                Please fill all fields
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

export default Login
