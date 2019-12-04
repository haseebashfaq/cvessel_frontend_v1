import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export function Home() {
  const history = useHistory()

  const [query, setQuery] = useState('')

  const handleInputChange = e => {
    const query = e.target.value

    setQuery(query)
  }

  const handleSearch = e => {
    e.preventDefault()

    if (query) {
      history.push(`/vessel-list?query=${query}`)
    }
  }

  return (
    <>
      {/* <!--PRE LOADING--> */}
      {/* <div id="preloader">
            <div id="status">&nbsp;</div>
          </div> */}
      {/* <!--BANNER AND SERACH BOX--> */}
      <section
        id="background"
        className="dir1-home-head"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/144634/pexels-photo-144634.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb)',
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-xs-12">
              <div className="dir-ho-tl">
                <ul>
                  <li>
                    <h1
                      style={{
                        fontSize: '30px',
                        padding: '2rem 0',
                        color: '#fff',
                      }}
                    >
                      CVESSEL
                    </h1>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6 col-sm-6">
              <div className="dir-ho-tr">
                <ul>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                  <li>
                    <Link to="/login">Sign in</Link>
                  </li>
                  {/* <!-- <li><a href="db-listing-add.html"><i className="fa fa-plus" aria-hidden="true"></i> Add Listing</a> </li> --> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="container dir-ho-t-sp">
          <div className="row">
            <div className="dir-hr1">
              <div className="dir-ho-t-tit">
                <h1>Find and Book the vessel instantly</h1>
                <p>
                  An online platform to find and book the vessel. Contact the
                  vessel owner directly and make the booking faster.
                </p>
              </div>
              {/* <!-- <form className="tourz-search-form" action="/vessel-list.php"> --> */}
              <form
                className="tourz-search-form"
                action="/cvessel/cvessel_frontend_v1/vessel-list.php"
              >
                <div className="input-field">
                  {/* <!-- <input type="text" id="select-city" className="autocomplete"> */}
                  {/* <label htmlFor="select-city">Enter Port</label> --> */}
                </div>
                <div className="input-field">
                  <input
                    type="search"
                    name="query"
                    value={query}
                    id="select-search"
                    className="autocomplete"
                    onChange={handleInputChange}
                  />
                  <label
                    id="search-input"
                    htmlFor="select-search"
                    className="search-hotel-type"
                  >
                    Search by vessel or port
                  </label>
                </div>
                <div className="input-field">
                  <button
                    type="submit"
                    value=""
                    className="waves-button-input search-btn"
                    onClick={handleSearch}
                  >
                    Search
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      {/* <?php include 'assets/header.php'; ?> */}
      {/* <!--HOME PROJECTS--> */}
      <section className="proj mar-bot-red-m30">
        <div className="container">
          <div className="row">
            {/* <!--HOME PROJECTS: 1--> */}
            <div className="col-md-3 col-sm-6">
              <div className="hom-pro">
                <img src="images/icon/d1.png" alt="" />
                <h4>Instant Booking</h4>
                <p>
                  Contact and get quote directly from the vessel owners at any
                  time
                </p>
                <a href="vessel-list.php">Explore Now</a>
              </div>
            </div>
            {/* <!--HOME PROJECTS: 1--> */}
            <div className="col-md-3 col-sm-6">
              <div className="hom-pro">
                <img src="images/icon/1.png" alt="" />
                <h4>1200+ Vessels</h4>
                <p>
                  Choose from more than 1200 vessels for booking all over the
                  Europe
                </p>
                <a href="vessel-list.php">Explore Now</a>
              </div>
            </div>
            {/* <!--HOME PROJECTS: 1--> */}
            <div className="col-md-3 col-sm-6">
              <div className="hom-pro">
                <img src="images/icon/3.png" alt="" />
                <h4>50 European Ports</h4>
                <p>
                  Pick & drop your vessel on one of the major ports in Europe of
                  your choice
                </p>
                <a href="vessel-list.php">Explore Now</a>
              </div>
            </div>
            {/* <!--HOME PROJECTS: 1--> */}
            <div className="col-md-3 col-sm-6">
              <div className="hom-pro">
                <img src="images/icon/7.png" alt="" />
                <h4>Manage your booking</h4>
                <p>
                  Maintain your booking and see status by registering on our
                  platform
                </p>
                <a href="vessel-list.php">Explore Now</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--FIND YOUR SERVICE--> */}
      <section className="com-padd com-padd-redu-bot1 pad-bot-red-40 popular-vessels">
        <div className="container">
          <div className="row">
            <div className="com-title">
              <h2>Most Popular vessels</h2>
              <p>Explore some of the most booked vessels in Europe</p>
            </div>
            <div className="dir-hli">
              <ul>
                {/* <!--=====LISTINGS======--> */}
                <li className="col-md-3 col-sm-6">
                  {/* <a href=""> */}
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3">
                        <img src="images/hci1.png" alt="" />
                      </div>
                      <div className="dir-hli-4" />
                      <img src="images/services/vessel1.jpg" alt="" />
                    </div>
                    <div className="dir-hli-2">
                      <h4>
                        Atlantic Pioneer
                        <span className="dir-ho-cat">Book</span>
                      </h4>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
                {/* <!--=====LISTINGS======--> */}
                <li className="col-md-3 col-sm-6">
                  {/* <a href=""> */}
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3">
                        <img src="images/hci1.png" alt="" />
                      </div>
                      <div className="dir-hli-4"> </div>
                      <img src="images/services/vessel2.jpg" alt="" />
                    </div>
                    <div className="dir-hli-2">
                      <h4>
                        Aqua Flight <span className="dir-ho-cat">Book</span>
                      </h4>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
                {/* <!--=====LISTINGS======--> */}
                <li className="col-md-3 col-sm-6">
                  {/* <a href=""> */}
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3">
                        <img src="images/hci1.png" alt="" />
                      </div>
                      <div className="dir-hli-4"> </div>
                      <img src="images/services/9.jpg" alt="" />
                    </div>
                    <div className="dir-hli-2">
                      <h4>
                        Cable Bay <span className="dir-ho-cat">Book</span>
                      </h4>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
                {/* <!--=====LISTINGS======--> */}
                <li className="col-md-3 col-sm-6">
                  {/* <a href=""> */}
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3">
                        <img src="images/hci1.png" alt="" />
                      </div>
                      <div className="dir-hli-4"> </div>
                      <img src="images/services/vessel4.jpg" alt="" />
                    </div>
                    <div className="dir-hli-2">
                      <h4>
                        Coastal Thunder
                        <span className="dir-ho-cat">Book</span>
                      </h4>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
                {/* <!--=====LISTINGS======--> */}
                <li className="col-md-3 col-sm-6">
                  {/* <a href=""> */}
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3">
                        <img src="images/hci1.png" alt="" />>
                      </div>
                      <div className="dir-hli-4"> </div>
                      <img src="images/services/vessel6.jpg" alt="" />
                    </div>
                    <div className="dir-hli-2">
                      <h4>
                        Dalby Wharfe <span className="dir-ho-cat">Book</span>
                      </h4>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
                {/* <!--=====LISTINGS======--> */}
                <li className="col-md-3 col-sm-6">
                  {/* <a href=""> */}
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3">
                        <img src="images/hci1.png" alt="" />
                      </div>
                      <div className="dir-hli-4"> </div>
                      <img src="images/services/vessel7.jpg" alt="" />
                    </div>
                    <div className="dir-hli-2">
                      <h4>
                        Marineco Dignity
                        <span className="dir-ho-cat">Book</span>
                      </h4>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
                {/* <!--=====LISTINGS======--> */}
                <li className="col-md-3 col-sm-6">
                  {/* <a href=""> */}
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3">
                        <img src="images/hci1.png" alt="" />
                      </div>
                      <div className="dir-hli-4"> </div>
                      <img src="images/services/vessel8.jpg" alt="" />
                    </div>
                    <div className="dir-hli-2">
                      <h4>
                        Offshore Phantom
                        <span className="dir-ho-cat">Book</span>
                      </h4>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
                {/* <!--=====LISTINGS======--> */}
                <li className="col-md-3 col-sm-6">
                  {/* <a href=""> */}
                  <div className="dir-hli-5">
                    <div className="dir-hli-1">
                      <div className="dir-hli-3">
                        <img src="images/hci1.png" alt="" />
                      </div>
                      <div className="dir-hli-4"> </div>
                      <img src="images/services/vessel5.jpg" alt="" />
                    </div>
                    <div className="dir-hli-2">
                      <h4>
                        Sea Hurricane <span className="dir-ho-cat">Book</span>
                      </h4>
                    </div>
                  </div>
                  {/* </a> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* <!--EXPLORE CITY LISTING--> */}
      <section className="com-padd com-padd-redu-top">
        <div className="container">
          <div className="row">
            <div className="com-title">
              <h2>Available Ports for Pick & Drop</h2>
              <p>
                Explore our available ports to pick and drop the vessel. We are
                constantly adding more.
              </p>
            </div>
            <div className="col-md-6">
              {/* <a href=""> */}
              <div className="list-mig-like-com">
                <div className="list-mig-lc-img">
                  <img src="images/listing/home.jpg" alt="" />
                </div>
                <div className="list-mig-lc-con">
                  <h5>Hamburg</h5>
                  <p>2045 Listings</p>
                </div>
              </div>
              {/* </a> */}
            </div>
            <div className="col-md-3">
              {/* <a href=""> */}
              <div className="list-mig-like-com">
                <div className="list-mig-lc-img">
                  <img src="images/listing/home2.jpg" alt="" />
                </div>
                <div className="list-mig-lc-con list-mig-lc-con2">
                  <h5>Amsterdam</h5>
                  <p>1454 Listings</p>
                </div>
              </div>
              {/* </a> */}
            </div>
            <div className="col-md-3">
              {/* <a href=""> */}
              <div className="list-mig-like-com">
                <div className="list-mig-lc-img">
                  <img src="images/listing/home3.jpg" alt="" />
                </div>
                <div className="list-mig-lc-con list-mig-lc-con2">
                  <h5>Barcelona</h5>
                  <p>1895 Listings</p>
                </div>
              </div>
              {/* </a> */}
            </div>
            <div className="col-md-3">
              <a href="list-lead.html">
                <div className="list-mig-like-com">
                  <div className="list-mig-lc-img">
                    <img src="images/listing/home4.jpg" alt="" />
                  </div>
                  <div className="list-mig-lc-con list-mig-lc-con2">
                    <h5>Sunderland</h5>
                    <p>1260 Listings</p>
                  </div>
                </div>
              </a>
            </div>
            <div className="col-md-3">
              <a href="list-lead.html">
                <div className="list-mig-like-com">
                  <div className="list-mig-lc-img">
                    <img src="images/listing/home1.jpg" alt="" />
                  </div>
                  <div className="list-mig-lc-con list-mig-lc-con2">
                    <h5>Copenhegen</h5>
                    <p>4152 Listings</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* <!--ADD BUSINESS--> */}
      <section className="com-padd home-dis">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h2>
                <span>10% Off</span> when you book online{' '}
                <a href="vessel-list.php">Find a Vessel</a>
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* <!--CREATE FREE ACCOUNT--> */}
      {/* <section className="com-padd sec-bg-white">
        <div className="container">
          <div className="row">
            <div className="com-title">
              <h2>
                Create a free <span>Account</span>
              </h2>
              <p>
                Explore some of the best vessels available from around the
                Europe.
              </p>
            </div>
            <div className="col-md-6">
              <div className="hom-cre-acc-left">
                <h3>
                  A few reasons you should register with us{' '}
                  <span>Right Now!</span>
                </h3>
                <!-- <p>5 Benefits of Listing Your Business to a Local Online Directory</p> -->
                <ul>
                  <li>
                    <img src="images/icon/1.png" alt="" />
                    <div>
                      <h5>Keep yourself connected</h5>
                      <p>
                        Register and keep yourself connected with the vessel
                        owners to get a priority booking in future.
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src="images/icon/5.png" alt="" />
                    <div>
                      <h5>Speedup your booking process</h5>
                      <p>
                        Get instant response from the vessel owners and book it
                        in advance to save yourself from last-minute trouble.
                      </p>
                    </div>
                  </li>
                  <li>
                    <img src="images/icon/6.png" alt="" />
                    <div>
                      <h5>Best rates guaranteed</h5>
                      <p>
                        Find special discounts and best rates in the market.
                        Keep checking for seasonal packages.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="hom-cre-acc-left hom-cre-acc-right">
                <form>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="acc-name" type="text" className="validate" />
                      <label htmlFor="acc-name">Name</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="acc-mob" type="number" className="validate" />
                      <label htmlFor="acc-mob">Mobile</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input id="acc-mail" type="email" className="validate" />
                      <label htmlFor="acc-mail">Email</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      <input
                        id="acc-pass"
                        type="password"
                        className="validate"
                      />
                      <label htmlFor="acc-pass">Password</label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col s12 hom-cr-acc-check">
                      <input type="checkbox" id="test5" />
                      <label htmlFor="test5">
                        By signing up, you agree to the Terms and Conditions and
                        Privacy Policy. You also agree to receive
                        product-related emails.
                      </label>
                    </div>
                  </div>
                  <div className="row">
                    <div className="input-field col s12">
                      {' '}
                      <a
                        className="waves-effect waves-light btn-large full-btn"
                        href="#!"
                      >
                        Submit Now
                      </a>{' '}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Home
