import React, { useState, useEffect, useReducer } from 'react'
import { Link } from 'react-router-dom'
import { useCreateUserMutation } from 'generated/graphql'
import { addCookie } from 'utils/cookies'
import { COOKIE_ACCESS_TOKEN } from 'utils/constants'

export function Register() {
  const [hasEmptyFields, setHasEmptyFields] = useState(false)
  const [errorMessage, setErrorMessage] = useState(false)
  const [passwordsDontMatch, setPasswordsDontMatch] = useState(false)
  const [createUser, { loading, error }] = useCreateUserMutation()

  const inputDefaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  }
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

  const handleCreateUser = async e => {
    e.preventDefault()

    hasEmptyFields && setHasEmptyFields(false)
    passwordsDontMatch && setPasswordsDontMatch(false)
    errorMessage && setErrorMessage(false)

    const {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    } = inputValues

    if (!firstName || !lastName || !email || !password) {
      return setHasEmptyFields(true)
    } else if (password !== confirmPassword) {
      return setPasswordsDontMatch(true)
    } else {
      setHasEmptyFields(false)
    }

    try {
      const result = await createUser({
        variables: {
          data: {
            firstName,
            lastName,
            email,
            password,
            userType: 'CUSTOMER',
            isActivated: true,
          },
        },
      })

      const token = result.data.createUser.token

      addCookie(COOKIE_ACCESS_TOKEN, token)

      window.location.replace('/')
    } catch (error) {}
  }

  return (
    <section className="tz-register">
      <div className="log-in-pop">
        <div className="log-in-pop-left">
          <h1>Hello Visitor</h1>
          <p>
            Don't have an account? Create your account. It will take less than a
            minutes
          </p>
          <h4>Follow us for latest updates</h4>
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
          <div className="login-left">
            <div className="input-field s12">
              {' '}
              <Link to="/login">Already a member? Login</Link>{' '}
            </div>
          </div>
        </div>
        <div className="log-in-pop-right">
          <h4>Create an Account</h4>
          <p>
            Don't have an account? Create your account. It will take less then a
            minutes.
          </p>
          <form className="s12">
            <div>
              <div className="input-field s12">
                <input
                  type="text"
                  id="register_firstName"
                  data-ng-model="name1"
                  ng-hide="true"
                  className="validate"
                  name="firstName"
                  onChange={handleInputChange}
                />
                <label>First name</label>
              </div>
            </div>
            <div>
              <div className="input-field s12">
                <input
                  type="text"
                  id="register_lastName"
                  data-ng-model="name1"
                  className="validate"
                  name="lastName"
                  onChange={handleInputChange}
                />
                <label>Last name</label>
              </div>
            </div>
            <div>
              <div className="input-field s12">
                <input
                  type="email"
                  id="register_email"
                  className="validate"
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
                  id="register_password"
                  className="validate"
                  name="password"
                  onChange={handleInputChange}
                />
                <label>Password</label>
              </div>
            </div>
            <div>
              <div className="input-field s12">
                <input
                  type="password"
                  id="register_confirmPassword"
                  className="validate"
                  name="confirmPassword"
                  onChange={handleInputChange}
                />
                <label>Confirm password</label>
              </div>
            </div>
            <div>
              <div className="input-field s4">
                <button
                  id="loginbtn"
                  type="submit"
                  className="waves-effect waves-light log-in-btn"
                  onClick={handleCreateUser}
                >
                  Register
                </button>
                {loading && <i className="fa fa-spinner fa-3x fa-spin"></i>}
              </div>
            </div>
          </form>

          {passwordsDontMatch && (
            <div className="alert alert-danger password-mismatch-alert">
              Your passwords don't match
            </div>
          )}

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
  )
}

export default Register
