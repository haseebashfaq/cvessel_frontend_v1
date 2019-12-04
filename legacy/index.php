<!DOCTYPE html>
<html lang="en">
<head>
	<?php include 'assets/head-include.php'; ?>
</head>
<body>
	<!--PRE LOADING-->
	<div id="preloader">
		<div id="status">&nbsp;</div>
	</div>
	<!--BANNER AND SERACH BOX-->
	<section id="background" class="dir1-home-head" style="background-image: url(https://images.pexels.com/photos/144634/pexels-photo-144634.jpeg?w=940&h=650&dpr=2&auto=compress&cs=tinysrgb);">
		<div class="container">
			<div class="row">
				<div class="col-md-6 col-sm-6 col-xs-12">
					<div class="dir-ho-tl">
						<ul>
							<li>
								<!-- <a href="index.php"><img src="images/logo.png" alt=""> </a> -->
								<h1 style="font-size: 30px; padding: 2rem 0; color: #fff;">CVESSEL</h1>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6 col-sm-6">
					<div class="dir-ho-tr">
						<ul>
							<li><a href="register.php">Register</a> </li>
							<li><a href="login.php">Sign In</a> </li>
							<!-- <li><a href="db-listing-add.html"><i class="fa fa-plus" aria-hidden="true"></i> Add Listing</a> </li> -->
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div class="container dir-ho-t-sp">
			<div class="row">
				<div class="dir-hr1">
					<div class="dir-ho-t-tit">
						<h1>Find and Book the vessel instantly</h1> 
						<p>An online platform to find and book the vessel. Contact the vessel owner directly and make the booking faster.</p>
					</div>
					<form class="tourz-search-form" action="/vessel-list.php"">
						<div class="input-field">
							<!-- <input type="text" id="select-city" class="autocomplete">
							<label for="select-city">Enter Port</label> -->
						</div>
						<div class="input-field">
							<input type="search" name="q" id="select-search" class="autocomplete" required>
							<label id="search-input" for="select-search" class="search-hotel-type">Search by vessel or port</label>
						</div>
						<div class="input-field">
							<input id="searchbtn" type="submit" value="search" class="waves-effect waves-light tourz-sear-btn"> </div>
					</form>
				</div>
			</div>
		</div>
	</section>
	<?php include 'assets/header.php'; ?>
	<!--HOME PROJECTS-->
	<section class="proj mar-bot-red-m30">
		<div class="container">
			<div class="row">
				<!--HOME PROJECTS: 1-->
				<div class="col-md-3 col-sm-6">
					<div class="hom-pro"> <img src="images/icon/d1.png" alt="" />
						<h4>Instant Booking</h4>
						<p>Contact and get quote directly from the vessel owners at any time</p> <a href="vessel-list.php">Explore Now</a> </div>
				</div>
				<!--HOME PROJECTS: 1-->
				<div class="col-md-3 col-sm-6">
					<div class="hom-pro"> <img src="images/icon/1.png" alt="" />
						<h4>1200+ Vessels</h4>
						<p>Choose from more than 1200 vessels for booking all over the Europe</p> <a href="vessel-list.php">Explore Now</a> </div>
				</div>
				<!--HOME PROJECTS: 1-->
				<div class="col-md-3 col-sm-6">
					<div class="hom-pro"> <img src="images/icon/3.png" alt="" />
						<h4>50 European Ports</h4>
						<p>Pick & drop your vessel on one of the major ports in Europe of your choice</p> <a href="vessel-list.php">Explore Now</a> </div>
				</div>
				<!--HOME PROJECTS: 1-->
				<div class="col-md-3 col-sm-6">
					<div class="hom-pro"> <img src="images/icon/7.png" alt="" />
						<h4>Manage your booking</h4>
						<p>Maintain your booking and see status by registering on our platform</p> <a href="vessel-list.php">Explore Now</a> </div>
				</div>
			</div>
		</div>
	</section>
	<!--FIND YOUR SERVICE-->
	<section class="com-padd com-padd-redu-bot1 pad-bot-red-40 popular-vessels">
		<div class="container">
			<div class="row">
				<div class="com-title">
					<h2>Most Popular vessels</h2>
					<p>Explore some of the most booked vessels in Europe</p>
				</div>
				<div class="dir-hli">
					<ul>
						<!--=====LISTINGS======-->
						<li class="col-md-3 col-sm-6">
							<a href="">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src="images/hci1.png" alt=""> </div>
										<div class="dir-hli-4"> </div> <img src="images/services/vessel1.jpg" alt=""> </div>
									<div class="dir-hli-2">
										<h4>Atlantic Pioneer <span class="dir-ho-cat">Book</span></h4> </div>
								</div>
							</a>
						</li>
						<!--=====LISTINGS======-->
						<li class="col-md-3 col-sm-6">
							<a href="">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src="images/hci1.png" alt=""> </div>
										<div class="dir-hli-4"> </div> <img src="images/services/vessel2.jpg" alt=""> </div>
									<div class="dir-hli-2">
										<h4>Aqua Flight <span class="dir-ho-cat">Book</span></h4> </div>
								</div>
							</a>
						</li>
						<!--=====LISTINGS======-->
						<li class="col-md-3 col-sm-6">
							<a href="">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src="images/hci1.png" alt=""> </div>
										<div class="dir-hli-4"> </div> <img src="images/services/9.jpg" alt=""> </div>
									<div class="dir-hli-2">
										<h4>Cable Bay <span class="dir-ho-cat">Book</span></h4> </div>
								</div>
							</a>
						</li>
						<!--=====LISTINGS======-->
						<li class="col-md-3 col-sm-6">
							<a href="">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src="images/hci1.png" alt=""> </div>
										<div class="dir-hli-4"> </div> <img src="images/services/vessel4.jpg" alt=""> </div>
									<div class="dir-hli-2">
										<h4>Coastal Thunder <span class="dir-ho-cat">Book</span></h4> </div>
								</div>
							</a>
						</li>
						<!--=====LISTINGS======-->
						<li class="col-md-3 col-sm-6">
							<a href="">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src="images/hci1.png" alt=""> </div>
										<div class="dir-hli-4"> </div> <img src="images/services/vessel6.jpg" alt=""> </div>
									<div class="dir-hli-2">
										<h4>Dalby Wharfe <span class="dir-ho-cat">Book</span></h4> </div>
								</div>
							</a>
						</li>
						<!--=====LISTINGS======-->
						<li class="col-md-3 col-sm-6">
							<a href="">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src="images/hci1.png" alt=""> </div>
										<div class="dir-hli-4"> </div> <img src="images/services/vessel7.jpg" alt=""> </div>
									<div class="dir-hli-2">
										<h4>Marineco Dignity <span class="dir-ho-cat">Book</span></h4> </div>
								</div>
							</a>
						</li>
						<!--=====LISTINGS======-->
						<li class="col-md-3 col-sm-6">
							<a href="">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src="images/hci1.png" alt=""> </div>
										<div class="dir-hli-4"> </div> <img src="images/services/vessel8.jpg" alt=""> </div>
									<div class="dir-hli-2">
										<h4>Offshore Phantom <span class="dir-ho-cat">Book</span></h4> </div>
								</div>
							</a>
						</li>
						<!--=====LISTINGS======-->
						<li class="col-md-3 col-sm-6">
							<a href="">
								<div class="dir-hli-5">
									<div class="dir-hli-1">
										<div class="dir-hli-3"><img src="images/hci1.png" alt=""> </div>
										<div class="dir-hli-4"> </div> <img src="images/services/vessel5.jpg" alt=""> </div>
									<div class="dir-hli-2">
										<h4>Sea Hurricane <span class="dir-ho-cat">Book</span></h4> </div>
								</div>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</section>
	<!--EXPLORE CITY LISTING-->
	<section class="com-padd com-padd-redu-top">
		<div class="container">
			<div class="row">
				<div class="com-title">
					<h2>Available Ports for Pick & Drop</h2>
					<p>Explore our available ports to pick and drop the vessel. We are constantly adding more.</p>
				</div>
				<div class="col-md-6">
					<a href="">
						<div class="list-mig-like-com">
							<div class="list-mig-lc-img"> <img src="images/listing/home.jpg" alt="" /> </div>
							<div class="list-mig-lc-con">
								<h5>Hamburg</h5>
								<p>2045 Listings</p>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="">
						<div class="list-mig-like-com">
							<div class="list-mig-lc-img"> <img src="images/listing/home2.jpg" alt="" /> </div>
							<div class="list-mig-lc-con list-mig-lc-con2">
								<h5>Amsterdam</h5>
								<p>1454 Listings</p>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="">
						<div class="list-mig-like-com">
							<div class="list-mig-lc-img"> <img src="images/listing/home3.jpg" alt="" /> </div>
							<div class="list-mig-lc-con list-mig-lc-con2">
								<h5>Barcelona</h5>
								<p>1895 Listings</p>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="list-lead.html">
						<div class="list-mig-like-com">
							<div class="list-mig-lc-img"> <img src="images/listing/home4.jpg" alt="" /> </div>
							<div class="list-mig-lc-con list-mig-lc-con2">
								<h5>Sunderland</h5>
								<p>1260 Listings</p>
							</div>
						</div>
					</a>
				</div>
				<div class="col-md-3">
					<a href="list-lead.html">
						<div class="list-mig-like-com">
							<div class="list-mig-lc-img"> <img src="images/listing/home1.jpg" alt="" /> </div>
							<div class="list-mig-lc-con list-mig-lc-con2">
								<h5>Copenhegen</h5>
								<p>4152 Listings</p>
							</div>
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>
	<!--ADD BUSINESS-->
	<section class="com-padd home-dis">
		<div class="container">
			<div class="row">
				<div class="col-md-12">
					<h2><span>10% Off</span> when you book online <a href="vessel-list.php">Find a Vessel</a></h2> </div>
			</div>
		</div>
	</section>
	
	<!--CREATE FREE ACCOUNT-->
	<section class="com-padd sec-bg-white">
		<div class="container">
			<div class="row">
				<div class="com-title">
					<h2>Create a free <span>Account</span></h2>
					<p>Explore some of the best vessels available from around the Europe.</p>
				</div>
				<div class="col-md-6">
					<div class="hom-cre-acc-left">
						<h3>A few reasons you should register with us <span>Right Now!</span></h3>
						<!-- <p>5 Benefits of Listing Your Business to a Local Online Directory</p> -->
						<ul>
							<li> <img src="images/icon/1.png" alt="">
								<div>
									<h5>Keep yourself connected</h5>
									<p>Register and keep yourself connected with the vessel owners to get a priority booking in future.</p>
								</div>
							</li>
							<li> <img src="images/icon/5.png" alt="">
								<div>
									<h5>Speedup your booking process</h5>
									<p>Get instant response from the vessel owners and book it in advance to save yourself from last-minute trouble.</p>
								</div>
							</li>
							<li> <img src="images/icon/6.png" alt="">
								<div>
									<h5>Best rates guaranteed</h5>
									<p>Find special discounts and best rates in the market. Keep checking for seasonal packages.</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-md-6">
					<div class="hom-cre-acc-left hom-cre-acc-right">
						<form>
							<div class="row">
								<div class="input-field col s12">
									<input id="acc-name" type="text" class="validate">
									<label for="acc-name">Name</label>
								</div>
							</div>
							<div class="row">
								<div class="input-field col s12">
									<input id="acc-mob" type="number" class="validate">
									<label for="acc-mob">Mobile</label>
								</div>
							</div>
							<div class="row">
								<div class="input-field col s12">
									<input id="acc-mail" type="email" class="validate">
									<label for="acc-mail">Email</label>
								</div>
							</div>
							<div class="row">
								<div class="input-field col s12">
									<input id="acc-pass" type="password" class="validate">
									<label for="acc-pass">Password</label>
								</div>
							</div>
							<div class="row">
								<div class="col s12 hom-cr-acc-check">
									<input type="checkbox" id="test5" />
									<label for="test5">By signing up, you agree to the Terms and Conditions and Privacy Policy. You also agree to receive product-related emails.</label>
								</div>
							</div>
							<div class="row">
								<div class="input-field col s12"> <a class="waves-effect waves-light btn-large full-btn" href="#!">Submit Now</a> </div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</section>
	<?php include 'assets/footer.php'; ?>
</body>
</html>
