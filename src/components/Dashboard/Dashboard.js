import React from 'react'

export function Dashboard() {
  return (
    <section>
      <div className="tz">
        {/* <!--LEFT SECTION--> */}
        <div className="tz-l">
          <div className="tz-l-1">
            <ul>
              <li>
                {/* <!-- <img src="../images/db-profile.jpg" alt="" /> --> */}
                <div
                  style={{
                    backgroundImage: 'url(../images/db-profile.jpg)',
                    backgroundSize: 'cover',
                    backgroundPosition: ' center',
                    backgroundRepeat: ' no-repeat',
                    height: '200px',
                  }}
                ></div>
              </li>
              <li
                style={{
                  width: '100%',
                }}
              >
                <span></span> Welcome
              </li>
              {/* <!-- <li><span>18</span> Notifications</li> --> */}
            </ul>
          </div>
          <div className="tz-l-2">
            <ul>
              <li>
                <button href="" className="tz-lma dashboard-btn">
                  <img src="../images/icon/dbl1.png" alt="" /> My Dashboard
                </button>
              </li>
              <li>
                <a href="profile.php">
                  <img src="../images/icon/dbl6.png" alt="" /> My Profile
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="../images/icon/dbl14.png" alt="" /> Messages
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="../images/icon/dbl11.png" alt="" /> My Bookings
                </a>
              </li>
              <li>
                <a href="#!">
                  <img src="../images/icon/dbl12.png" alt="" /> Log Out
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* <!--CENTER SECTION--> */}
        <div className="tz-2">
          <div className="tz-2-com tz-2-main">
            <h4>Manage Bookings</h4>
            <div className="tz-2-main-com">
              <div className="tz-2-main-1">
                <div className="tz-2-main-2">
                  {' '}
                  <img src="../images/icon/d1.png" alt="" />
                  <span>All Bookings</span>
                  <p>All of your previous bokkings</p>
                  <h2>04</h2>{' '}
                </div>
              </div>
              <div className="tz-2-main-1">
                <div className="tz-2-main-2">
                  {' '}
                  <img src="../images/icon/hcat9.png" alt="" />
                  <span>Pending</span>
                  <p>You have some bookings on pending</p>
                  <h2>69</h2>{' '}
                </div>
              </div>
              <div className="tz-2-main-1">
                <div className="tz-2-main-2">
                  {' '}
                  <img src="../images/icon/d3.png" alt="" />
                  <span>Messages</span>
                  <p>Don't miss out on any message in your inbox</p>
                  <h2>53</h2>{' '}
                </div>
              </div>
            </div>
            <div className="db-list-com tz-db-table pending-bookings">
              <div className="ds-boar-title">
                <h2>Pending Bookings</h2>
                <p>
                  Here is the list of all your bookings which are awaiting
                  response from the vessel owners.
                </p>
              </div>
              <table className="responsive-table bordered">
                <thead>
                  <tr>
                    <th>Vessel Name</th>
                    <th>Date</th>
                    <th>Port</th>
                    <th>Status</th>
                    <th>Cancel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Joney Health and Fitness</td>
                    <td>12 May 2017</td>
                    <td>
                      <span className="db-list-rat">Hamburg</span>
                    </td>
                    <td>
                      <span className="db-list-ststus-na">Pending</span>
                    </td>
                    <td>
                      <span>
                        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td>Effi Furniture Dealers</td>
                    <td>23 July 2016</td>
                    <td>
                      <span className="db-list-rat">Barcelona</span>
                    </td>
                    <td>
                      <span className="db-list-ststus-na">Pending</span>
                    </td>
                    <td>
                      <span>
                        <i className="fa fa-times fa-2x" aria-hidden="true"></i>
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="db-list-com tz-db-table">
              <div className="ds-boar-title">
                <h2>Completed Booking History</h2>
                <p>
                  Here is the list of all your successful bookings with
                  CVessels.
                </p>
              </div>
              <table className="responsive-table bordered">
                <thead>
                  <tr>
                    <th>Listing Name</th>
                    <th>Departure</th>
                    <th>Payment</th>
                    <th>Status</th>
                    <th>Make Payment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Taj Luxury Hotel & Resorts</td>
                    <td>11 May 2015</td>
                    <td>
                      <span className="db-list-rat">Done</span>
                    </td>
                    <td>
                      <span className="db-list-ststus">Completed</span>
                    </td>
                    <td>
                      <a href="db-payment.html" className="db-list-edit">
                        Payment
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Joney Health and Fitness</td>
                    <td>19 March 2014</td>
                    <td>
                      <span className="db-list-rat">Done</span>
                    </td>
                    <td>
                      <span className="db-list-ststus">Completed</span>
                    </td>
                    <td>
                      <a href="db-payment.html" className="db-list-edit">
                        Payment
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>Effi Furniture Dealers</td>
                    <td>02 April 2012</td>
                    <td>
                      <span className="db-list-rat">Done</span>
                    </td>
                    <td>
                      <span className="db-list-ststus">Completed</span>
                    </td>
                    <td>
                      <a href="db-payment.html" className="db-list-edit">
                        Payment
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="db-list-com tz-db-table">
              <div className="ds-boar-title">
                <h2>Messages</h2>
                <p>
                  All the Lorem Ipsum generators on the All the Lorem Ipsum
                  generators on the
                </p>
              </div>
              <div className="tz-mess">
                <ul>
                  <li className="view-msg">
                    <h5>
                      <img src="../images/users/1.png" alt="" />
                      Listing Enquiry{' '}
                      <span className="tz-msg-un-read">unread</span>
                    </h5>
                    <p>
                      Nulla egestas leo elit, eu sollicitudin diam suscipit non.
                      Nunc imperdiet hendrerit mi, mollis sagittis risus
                      accumsan ac.
                    </p>
                    <div className="hid-msg">
                      <span className="message-icon">
                        <i className="fa fa-eye" title="view"></i>
                      </span>
                      <span className="message-icon">
                        <i className="fa fa-trash" title="delete"></i>
                      </span>
                    </div>
                  </li>
                  <li className="view-msg">
                    <h5>
                      <img src="../images/users/4.png" alt="" />
                      Request for meet{' '}
                      <span className="tz-msg-read">unread</span>
                    </h5>
                    <p>
                      Duis nulla ligula, interdum porta nulla sed, efficitur
                      tempus lacus. Quisque facilisis, sapien tempor mollis
                      sollicitudin, urna ligula vulputate nulla, rhoncus
                      faucibus justo mauris eget elit.Pellentesque eget
                      pellentesque dolor.
                    </p>
                    <div className="hid-msg">
                      <button className="message-icon">
                        <i className="fa fa-eye" title="view"></i>
                      </button>
                      <button className="message-icon">
                        <i className="fa fa-trash" title="delete"></i>
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!--RIGHT SECTION--> */}
        {/* <?php include 'assets/featured-vessels.php'; ?> */}
      </div>
    </section>
  )
}

export default Dashboard
