import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <>
      {/* // <!--MOBILE APP--> */}
      <section className="web-app com-padd">
        <div className="container"></div>
      </section>
      {/* // <!--FOOTER SECTION--> */}
      <footer id="colophon" className="site-footer clearfix">
        <div
          id="quaternary"
          className="sidebar-container "
          role="complementary"
        >
          <div className="sidebar-inner">
            <div className="widget-area clearfix">
              <div id="azh_widget-2" className="widget widget_azh_widget">
                <div data-section="section">
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-4 col-md-3 foot-logo">
                        {/* <!-- <img src="images/foot-logo.png" alt="logo"> --> */}
                        <h1
                          style={{
                            fontSize: '30px',
                            padding: ' 2rem 0',
                            color: '#fff',
                          }}
                        >
                          CVESSEL
                        </h1>
                        <p className="hasimg">
                          An online platform which gives you an opportunity to
                          book a vessel instantly. We have more than 1200
                          vessels listed on more than 50 ports all over the
                          Europe.
                        </p>
                      </div>
                      <div className="col-sm-4 col-md-2">
                        <h4>Support & Help</h4>
                        <ul className="">
                          <li>
                            {' '}
                            <a href="#!">About Us</a>{' '}
                          </li>
                          <li>
                            {' '}
                            <a href="#!">Vessels</a>{' '}
                          </li>
                          <li>
                            {' '}
                            <a href="#!">Ports</a>{' '}
                          </li>
                          <li>
                            {' '}
                            <Link to="/register">Register</Link>
                          </li>
                          <li>
                            {' '}
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            {' '}
                            <a href="#!">Contact us </a>{' '}
                          </li>
                        </ul>
                      </div>
                      <div className="col-sm-4 col-md-4">
                        <h4>Email Address</h4>
                        <div className="col-sm-12">
                          <ul className="">
                            <li>
                              {' '}
                              <a href="mailto:info@cvessel.de">
                                info@cvessel.de
                              </a>{' '}
                            </li>
                          </ul>
                        </div>
                        <h4>Phone</h4>
                        <div className="col-sm-12">
                          <ul className="">
                            <li>
                              {' '}
                              <a href="#!">+49 40 30713219</a>{' '}
                            </li>
                            <li>
                              {' '}
                              <a href="#!">+49 157 52068990</a>{' '}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-sm-4 col-md-3 foot-social">
                        <h4>Follow us</h4>
                        <p>
                          Join us and never miss any exciting news from the
                          world of seas!
                        </p>
                        <ul>
                          <li>
                            <a href="#!">
                              <i
                                className="fa fa-facebook"
                                aria-hidden="true"
                              ></i>
                            </a>{' '}
                          </li>
                          <li>
                            <a href="#!">
                              <i
                                className="fa fa-twitter"
                                aria-hidden="true"
                              ></i>
                            </a>{' '}
                          </li>
                          <li>
                            <a href="#!">
                              <i
                                className="fa fa-linkedin"
                                aria-hidden="true"
                              ></i>
                            </a>{' '}
                          </li>
                          <li>
                            <a href="#!">
                              <i
                                className="fa fa-youtube"
                                aria-hidden="true"
                              ></i>
                            </a>{' '}
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- .widget-area --> */}
          </div>
          {/* <!-- .sidebar-inner --> */}
        </div>
        {/* <!-- #quaternary --> */}
      </footer>
      {/* // <!--COPY RIGHTS--> */}
      <section className="copy">
        <div className="container">
          <p>Copyrights © 2018 CVessel. &nbsp;&nbsp;All rights reserved. </p>
        </div>
      </section>
    </>
  )
}

export default Footer
