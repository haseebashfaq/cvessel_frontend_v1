import React, { useState, useContext, useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { UserContext } from 'context'

export function Header() {
  const history = useHistory()
  const user = useContext(UserContext)
  const inputRef = useRef()
  const { isAuthenticated, logout } = user

  const [query, setQuery] = useState('')

  const handleLogout = () => {
    logout()
  }

  const handleInputChange = e => {
    const query = e.target.value

    setQuery(query)
  }

  const handleSearch = e => {
    e.preventDefault()

    if (query) {
      setQuery('')
      inputRef.current.blur()
      history.push(`/vessel-list?query=${query}`)
    }
  }

  return (
    // <!--TOP SEARCH SECTION-->
    <section id="myID" className="bottomMenu dir-il-top-fix">
      <div className="container top-search-main">
        <div className="row">
          <div className="ts-menu">
            {/* <!--SECTION: LOGO--> */}
            <div className="ts-menu-1">
              {/* <Link to="/">
                <img src="images/aff-logo.png" alt="" />{' '}
              </Link> */}
            </div>
            {/* <!--SECTION: SEARCH BOX--> */}
            <div className="ts-menu-3">
              <div className="">
                <form
                  className="tourz-search-form tourz-top-search-form"
                  action="/cvessel/cvessel_frontend_v1/vessel-list.php"
                >
                  <div className="input-field">
                    {/* <!-- <input type="text" id="top-select-city" className="autocomplete"> */}
                    {/* <label htmlFor="top-select-city">Enter Port</label> --> */}
                    <div className="logo">
                      <Link to="/">CVessel</Link>
                    </div>
                  </div>
                  <div className="input-field">
                    <input
                      type="search"
                      name="query"
                      value={query}
                      ref={inputRef}
                      id="top-select-search"
                      className="autocomplete"
                      onChange={handleInputChange}
                    />
                    <label
                      htmlFor="top-select-search"
                      className="search-hotel-type"
                    >
                      Search by vessel or port
                    </label>
                  </div>
                  <div className="input-field">
                    <button
                      id="searchbtn-header"
                      type="submit"
                      value=""
                      className="waves-button-input search-btn-header"
                      onClick={handleSearch}
                    >
                      <i className="waves-effect waves-light tourz-top-sear-btn waves-input-wrapper"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            {/* <!--SECTION: REGISTER,SIGNIN AND ADD YOUR BUSINESS--> */}

            {isAuthenticated ? (
              <div className="ts-menu-4 logout-container">
                <div className="v3-top-ri">
                  <ul>
                    <li>
                      <button
                        className="v3-menu-sign logout-btn"
                        onClick={handleLogout}
                      >
                        Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div className="ts-menu-4">
                <div className="v3-top-ri">
                  <ul>
                    <li>
                      <Link to="/login" className="v3-menu-sign">
                        <i className="fa fa-sign-in"></i> Sign In
                      </Link>
                    </li>
                    <li>
                      <Link to="/register" className="v3-add-bus">
                        <i className="fa fa-plus" aria-hidden="true"></i>{' '}
                        Register
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            )}
            {/* <div className="ts-menu-4 logout-container">
              <div className="v3-top-ri">
                <ul>
                  {isAuthenticated ? (
                    <li>
                      <button
                        className="v3-menu-sign logout-btn"
                        onClick={handleLogout}
                      >
                        Log out
                      </button>
                    </li>
                  ) : (
                    <>
                      <li>
                        <Link to="/login" className="v3-menu-sign">
                          <i className="fa fa-sign-in"></i> Sign In
                        </Link>
                      </li>
                      <li>
                        <Link to="/register" className="v3-add-bus">
                          <i className="fa fa-plus" aria-hidden="true"></i>{' '}
                          Register
                        </Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div> */}
            {/* <!--MOBILE MENU ICON:IT'S ONLY SHOW ON MOBILE & TABLET VIEW--> */}
            <div className="ts-menu-5">
              <span>
                <i className="fa fa-bars" aria-hidden="true"></i>
              </span>{' '}
            </div>
            {/* <!--MOBILE MENU CONTAINER:IT'S ONLY SHOW ON MOBILE & TABLET VIEW--> */}
            <div className="mob-right-nav" data-wow-duration="0.5s">
              <div className="mob-right-nav-close">
                <i className="fa fa-times" aria-hidden="true"></i>{' '}
              </div>
              {/* <h5>Business</h5> */}
              <ul className="mob-menu-icon">
                {isAuthenticated ? (
                  <li>
                    <button
                      className="logout-btn-mobile"
                      onClick={handleLogout}
                    >
                      Log out
                    </button>
                  </li>
                ) : (
                  <>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
