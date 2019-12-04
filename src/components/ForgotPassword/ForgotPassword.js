import React from 'react'

export function ForgotPassword() {
  return (
    <>
      {/* <div id="preloader">
        <div id="status">&nbsp;</div>
      </div> */}
      {/* <!--TOP SEARCH SECTION--> */}
      <section className="tz-register">
        <div className="log-in-pop">
          <div className="log-in-pop-left">
            <h1>
              Hello... <span>visitor</span>
            </h1>
            <p>
              Don't have an account? Create your account. It's take less then a
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
            {/* <a href="#" className="pop-close" data-dismiss="modal">
              <img src="images/cancel.html" alt="" />
            </a> */}
            <h4>Login</h4>
            <p>
              Don't have an account? Create your account. It's take less then a
              minutes
            </p>
            <form className="s12">
              <div>
                <div className="input-field s12">
                  <input
                    type="text"
                    data-ng-model="name1"
                    className="validate"
                  />
                  <label>User name</label>
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  <input type="password" className="validate" />
                  <label>Password</label>
                </div>
              </div>
              <div>
                <div className="input-field s4">
                  <input
                    type="submit"
                    value="Register"
                    className="waves-effect waves-light log-in-btn"
                  />{' '}
                </div>
              </div>
              <div>
                <div className="input-field s12">
                  {' '}
                  <a href="login.html">
                    Are you a already member ? Login
                  </a> | <a href="register.html">Create an account</a>{' '}
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      {/* <!--MOBILE APP--> */}
      <section className="web-app com-padd">
        <div className="container">
          <div className="row">
            <div className="col-md-6 web-app-img">
              {' '}
              <img src="images/mobile.png" alt="" />{' '}
            </div>
            <div className="col-md-6 web-app-con">
              <h2>
                Looking for the Best Service Provider? <span>Get the App!</span>
              </h2>
              <ul>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Find nearby
                  listings
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Easy
                  service enquiry
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Listing
                  reviews and ratings
                </li>
                <li>
                  <i className="fa fa-check" aria-hidden="true"></i> Manage your
                  listing, enquiry and reviews
                </li>
              </ul>{' '}
              <span>
                We'll send you a link, open it on your phone to download the app
              </span>
              <form>
                <ul>
                  <li>
                    <input type="text" placeholder="+01" />{' '}
                  </li>
                  <li>
                    <input type="number" placeholder="Enter mobile number" />{' '}
                  </li>
                  <li>
                    <input type="submit" value="Get App Link" />{' '}
                  </li>
                </ul>
              </form>
              <button className="store-btn">
                <img src="images/android.png" alt="" />{' '}
              </button>
              <button className="store-btn">
                <img src="images/apple.png" alt="" />{' '}
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default ForgotPassword
