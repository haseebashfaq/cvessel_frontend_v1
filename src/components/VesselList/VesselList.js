import React, { useState, useEffect } from 'react'
import { useVesselsQuery } from 'generated/graphql'

export function VesselList() {
  const query = window.location.search.split('=')[1]

  const { called, loading, error, data } = useVesselsQuery({
    variables: {
      query,
    },
  })
  const [isLoading, setIsLoading] = useState(true)
  const [hasNoResults, setHasNoResults] = useState(false)
  const [vessels, setVessels] = useState()

  useEffect(() => {
    if (!query) {
      setHasNoResults(true)
      setIsLoading(false)
    } else if (called && !loading && data) {
      setVessels(data.vessels)
      setIsLoading(false)
    } else if (called && !loading && error) {
      setIsLoading(false)
    }
  }, [called, loading, error, data, query])

  const createCard = ({ id, vesselName, port }) => (
    <div key={id} className="home-list-pop list-spac">
      {/* <!--LISTINGS IMAGE--> */}
      <div className="col-md-3">
        <img
          src="https://source.unsplash.com/collection/3882058/vessels"
          alt=""
        />
      </div>
      {/* <!--LISTINGS: CONTENT--> */}
      <div className="col-md-9 home-list-pop-desc inn-list-pop-desc">
        <h3>{vesselName}</h3>
        <h4>{port}</h4>
        <p>
          <b>Address:</b> 28800 Orchard Lake Road, Suite 180 Farmington Hills,
          U.S.A.
        </p>
        <div className="list-number">
          <ul>
            <li>
              <img src="images/icon/phone.png" alt="" /> +01 1245 2541, +62 6541
              6528
            </li>
            <li>
              <img src="images/icon/mail.png" alt="" /> localdir@webdir.com
            </li>
          </ul>
        </div>{' '}
        <span className="home-list-pop-rat">4.2</span>
        <div className="list-enqu-btn">
          <ul>
            <li>
              <a href="#!">
                <i className="fa fa-star-o" aria-hidden="true"></i> Write Review
              </a>{' '}
            </li>
            <li>
              <a href="#!">
                <i className="fa fa-commenting-o" aria-hidden="true"></i> Send
                SMS
              </a>{' '}
            </li>
            <li>
              <a href="#!">
                <i className="fa fa-phone" aria-hidden="true"></i> Call Now
              </a>{' '}
            </li>
            <li>
              <a
                href="#!"
                data-dismiss="modal"
                data-toggle="modal"
                data-target="#list-quo"
              >
                <i className="fa fa-usd" aria-hidden="true"></i> Get Quotes
              </a>{' '}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )

  return isLoading ? (
    <div id="preloader">
      <div id="status">&nbsp;</div>
    </div>
  ) : (
    <section className="dir-alp dir-pa-sp-top">
      <div className="container">
        <div className="row">
          <div className="dir-alp-tit">
            <h1>Results</h1>
            <ol className="breadcrumb">
              {/* <!-- <li><a href="#">Home</a> </li>
						<li><a href="#">Listing</a> </li>
						<li className="active">All Property</li> --> */}
            </ol>
          </div>
        </div>
        <div className="row">
          <div className="dir-alp-con">
            {/* <div className="col-md-3 dir-alp-con-left">
              <!-- <div className="dir-alp-con-left-1">
							<h3>Nearby Listings(07)</h3> </div>
						<div className="dir-hom-pre dir-alp-left-ner-notb">
							<ul>
								==========NEARBY LISTINGS============
								<li>
									<a href="">
										<div className="list-left-near lln1"> <img src="images/services/s1.jpeg" alt="" /> </div>
										<div className="list-left-near lln2">
											<h5>Property Getaways</h5> <span>City: illunois, United States</span> </div>
										<div className="list-left-near lln3"> <span>5.0</span> </div>
									</a>
								</li>
								==========END NEARBY LISTINGS============
								==========NEARBY LISTINGS============
								<li>
									<a href="">
										<div className="list-left-near lln1"> <img src="images/services/s2.jpeg" alt="" /> </div>
										<div className="list-left-near lln2">
											<h5>Home Trends</h5> <span>City: illunois, United States</span> </div>
										<div className="list-left-near lln3"> <span>4.0</span> </div>
									</a>
								</li>
								==========END NEARBY LISTINGS============
								==========NEARBY LISTINGS============
								<li>
									<a href="">
										<div className="list-left-near lln1"> <img src="images/services/s3.jpeg" alt="" /> </div>
										<div className="list-left-near lln2">
											<h5>Security System</h5> <span>City: illunois, United States</span> </div>
										<div className="list-left-near lln3"> <span>4.4</span> </div>
									</a>
								</li>
								==========END NEARBY LISTINGS============
								==========NEARBY LISTINGS============
								<li>
									<a href="">
										<div className="list-left-near lln1"> <img src="images/services/s4.jpeg" alt="" /> </div>
										<div className="list-left-near lln2">
											<h5>Distance Educations</h5> <span>City: illunois, United States</span> </div>
										<div className="list-left-near lln3"> <span>3.8</span> </div>
									</a>
								</li>
								==========END NEARBY LISTINGS============
								==========NEARBY LISTINGS============
								<li>
									<a href="">
										<div className="list-left-near lln1"> <img src="images/services/s5.jpeg" alt="" /> </div>
										<div className="list-left-near lln2">
											<h5>Fresh Cake Shops</h5> <span>City: illunois, United States</span> </div>
										<div className="list-left-near lln3"> <span>4.8</span> </div>
									</a>
								</li>
								==========END NEARBY LISTINGS============
								==========NEARBY LISTINGS============
								<li>
									<a href="">
										<div className="list-left-near lln1"> <img src="images/services/s6.jpeg" alt="" /> </div>
										<div className="list-left-near lln2">
											<h5>Chicago Automobiles</h5> <span>City: illunois, United States</span> </div>
										<div className="list-left-near lln3"> <span>5.0</span> </div>
									</a>
								</li>
								==========END NEARBY LISTINGS============
								==========NEARBY LISTINGS============
								<li>
									<a href="">
										<div className="list-left-near lln1"> <img src="images/services/s7.jpeg" alt="" /> </div>
										<div className="list-left-near lln2">
											<h5>Bike Service Centers</h5> <span>City: illunois, United States</span> </div>
										<div className="list-left-near lln3"> <span>5.0</span> </div>
									</a>
								</li>
								==========END NEARBY LISTINGS============
							</ul>
						</div> -->
						<!--==========Sub Category Filter============-->
						<!-- <div className="dir-alp-l3 dir-alp-l-com">
							<h4>Sub Category Filter</h4>
							<div className="dir-alp-l-com1 dir-alp-p3">
								<form action="#">
									<ul>
										<li>
											<input type="checkbox" id="scf1" />
											<label htmlFor="scf1">Hortels & Resorts</label>
										</li>
										<li>
											<input type="checkbox" id="scf2" />
											<label htmlFor="scf2">Fitness Care</label>
										</li>
										<li>
											<input type="checkbox" id="scf3" />
											<label htmlFor="scf3">Educations</label>
										</li>
										<li>
											<input type="checkbox" id="scf4" />
											<label htmlFor="scf4">Property</label>
										</li>
										<li>
											<input type="checkbox" id="scf5" />
											<label htmlFor="scf5">Home Services</label>
										</li>
									</ul>
								</form> <a href="#!" className="list-view-more-btn">view more</a> </div>
						  </div>
              <!--==========End Sub Category Filter============-->
              <!--==========Sub Category Filter============-->
              <div className="dir-alp-l3 dir-alp-l-com">
                <h4>Distance</h4>
                <div className="dir-alp-l-com1 dir-alp-p3">
                  <form>
                    <ul>
                      <li>
                        <input
                          className="with-gap"
                          name="group1"
                          type="radio"
                          id="ldis1"
                        />
                        <label htmlFor="ldis1">up to 2 km</label>
                      </li>
                      <li>
                        <input
                          className="with-gap"
                          name="group1"
                          type="radio"
                          id="ldis2"
                        />
                        <label htmlFor="ldis2">2 to 5 km</label>
                      </li>
                      <li>
                        <input
                          className="with-gap"
                          name="group1"
                          type="radio"
                          id="ldis3"
                        />
                        <label htmlFor="ldis3">5 to 10 km</label>
                      </li>
                      <li>
                        <input
                          className="with-gap"
                          name="group1"
                          type="radio"
                          id="ldis4"
                        />
                        <label htmlFor="ldis4">10 to 20 km</label>
                      </li>
                      <li>
                        <input
                          className="with-gap"
                          name="group1"
                          type="radio"
                          id="ldis5"
                        />
                        <label htmlFor="ldis5">+20 km</label>
                      </li>
                    </ul>
                  </form>{' '}
                  <a href="#!" className="list-view-more-btn">
                    view more
                  </a>{' '}
                </div>
              </div>
              <!--==========End Sub Category Filter============-->
              <!--==========Sub Category Filter============-->
              <div className="dir-alp-l3 dir-alp-l-com">
                <h4>Ratings</h4>
                <div className="dir-alp-l-com1 dir-alp-p3">
                  <form>
                    <ul>
                      <li>
                        <input type="checkbox" className="filled-in" id="lr1" />
                        <label htmlFor="lr1">
                          {' '}
                          <span className="list-rat-ch">
                            {' '}
                            <span>5.0</span>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                          </span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" className="filled-in" id="lr2" />
                        <label htmlFor="lr2">
                          {' '}
                          <span className="list-rat-ch">
                            {' '}
                            <span>4.0</span>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                          </span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" className="filled-in" id="lr3" />
                        <label htmlFor="lr3">
                          {' '}
                          <span className="list-rat-ch">
                            {' '}
                            <span>3.0</span>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                          </span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" className="filled-in" id="lr4" />
                        <label htmlFor="lr4">
                          {' '}
                          <span className="list-rat-ch">
                            {' '}
                            <span>2.0</span>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                          </span>
                        </label>
                      </li>
                      <li>
                        <input type="checkbox" className="filled-in" id="lr5" />
                        <label htmlFor="lr5">
                          {' '}
                          <span className="list-rat-ch">
                            {' '}
                            <span>1.0</span>{' '}
                            <i className="fa fa-star" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                            <i className="fa fa-star-o" aria-hidden="true"></i>{' '}
                          </span>
                        </label>
                      </li>
                    </ul>
                  </form>{' '}
                  <a href="#!" className="list-view-more-btn">
                    view more
                  </a>{' '}
                </div>
              </div>
              <!--==========End Sub Category Filter============-->
            </div> */}
            <div className="col-md-12 dir-alp-con-right">
              <div className="dir-alp-con-right-1">
                <div id="results-table" className="row">
                  {/* <!-- Dynamic cards go here --> */}
                  {vessels &&
                    vessels.length > 0 &&
                    vessels.map(vessel => createCard(vessel))}

                  {vessels && vessels.length === 0 && (
                    <div className="no-results-container">
                      <h2>No results found</h2>
                    </div>
                  )}

                  {hasNoResults && (
                    <div className="no-results-container">
                      <h2>No results found</h2>
                    </div>
                  )}
                </div>
                {/* <div className="row">
                  <ul className="pagination list-pagenat">
                    <li className="disabled">
                      <a href="#!!">
                        <i className="material-icons">chevron_left</i>
                      </a>{' '}
                    </li>
                    <li className="active">
                      <a href="#!">1</a>{' '}
                    </li>
                    <li className="waves-effect">
                      <a href="#!">2</a>{' '}
                    </li>
                    <li className="waves-effect">
                      <a href="#!">3</a>{' '}
                    </li>
                    <li className="waves-effect">
                      <a href="#!">4</a>{' '}
                    </li>
                    <li className="waves-effect">
                      <a href="#!">5</a>{' '}
                    </li>
                    <li className="waves-effect">
                      <a href="#!">6</a>{' '}
                    </li>
                    <li className="waves-effect">
                      <a href="#!">7</a>{' '}
                    </li>
                    <li className="waves-effect">
                      <a href="#!">8</a>{' '}
                    </li>
                    <li className="waves-effect">
                      <a href="#!">
                        <i className="material-icons">chevron_right</i>
                      </a>{' '}
                    </li>
                  </ul>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VesselList
