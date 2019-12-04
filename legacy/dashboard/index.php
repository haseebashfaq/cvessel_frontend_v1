<?php
session_start();
if(!isset($_SESSION["email"]) || !isset($_SESSION["password"])) {
?>
<script type="text/javascript">
window.location.replace("../login.php");
</script>
<?php
} else {
	include '../backend/dashboard.php';
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<?php include '../assets/head-include-dashboard.php'; ?>
</head>
<body>
	<?php include '../assets/header-dashboard.php'; ?>
	
	<section>
		<div class="tz">
			<!--LEFT SECTION-->
			<div class="tz-l">
				<div class="tz-l-1">
					<ul>
						<li><!-- <img src="../images/db-profile.jpg" alt="" /> -->
							<div style="background-image: url(../images/db-profile.jpg); background-size: cover; background-position: center; background-repeat: no-repeat; height: 200px;"></div>
						</li>
						<li style="width: 100%;"><span><?php echo $dashboardData['firstname']; ?></span> Welcome</li>
						<!-- <li><span>18</span> Notifications</li> -->
					</ul>
				</div>
				<div class="tz-l-2">
					<ul>
						<li>
							<a href="" class="tz-lma"><img src="../images/icon/dbl1.png" alt="" /> My Dashboard</a>
						</li>
						<li>
							<a href="profile.php"><img src="../images/icon/dbl6.png" alt="" /> My Profile</a>
						</li>
						<li>
							<a href="#!"><img src="../images/icon/dbl14.png" alt="" /> Messages</a>
						</li>
						<li>
							<a href="#!"><img src="../images/icon/dbl11.png" alt="" /> My Bookings</a>
						</li>
						<li>
							<a href="#!"><img src="../images/icon/dbl12.png" alt="" /> Log Out</a>
						</li>
					</ul>
				</div>
			</div>
			<!--CENTER SECTION-->
			<div class="tz-2">
				<div class="tz-2-com tz-2-main">
					<h4>Manage Bookings</h4>
					<div class="tz-2-main-com">
						<div class="tz-2-main-1">
							<div class="tz-2-main-2"> <img src="../images/icon/d1.png" alt="" /><span>All Bookings</span>
								<p>All of your previous bokkings</p>
								<h2>04</h2> </div>
						</div>
						<div class="tz-2-main-1">
							<div class="tz-2-main-2"> <img src="../images/icon/hcat9.png" alt="" /><span>Pending</span>
								<p>You have some bookings on pending</p>
								<h2>69</h2> </div>
						</div>
						<div class="tz-2-main-1">
							<div class="tz-2-main-2"> <img src="../images/icon/d3.png" alt="" /><span>Messages</span>
								<p>Don't miss out on any message in your inbox</p>
								<h2>53</h2> </div>
						</div>
					</div>
					<div class="db-list-com tz-db-table pending-bookings">
						<div class="ds-boar-title">
							<h2>Pending Bookings</h2>
							<p>Here is the list of all your bookings which are awaiting response from the vessel owners.</p>
						</div>
						<table class="responsive-table bordered">
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
									<td><span class="db-list-rat">Hamburg</span>
									</td>
									<td><span class="db-list-ststus-na">Pending</span>
									</td>
									<td><a><i class="fa fa-times fa-2x" aria-hidden="true"></i></a>
									</td>
								</tr>
								<tr>
									<td>Effi Furniture Dealers</td>
									<td>23 July 2016</td>
									<td><span class="db-list-rat">Barcelona</span>
									</td>
									<td><span class="db-list-ststus-na">Pending</span>
									</td>
									<td><a><i class="fa fa-times fa-2x" aria-hidden="true"></i></a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="db-list-com tz-db-table">
						<div class="ds-boar-title">
							<h2>Completed Booking History</h2>
							<p>Here is the list of all your successful bookings with CVessels.</p>
						</div>
						<table class="responsive-table bordered">
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
									<td><span class="db-list-rat">Done</span>
									</td>
									<td><span class="db-list-ststus">Completed</span>
									</td>
									<td><a href="db-payment.html" class="db-list-edit">Payment</a>
									</td>
								</tr>
								<tr>
									<td>Joney Health and Fitness</td>
									<td>19 March 2014</td>
									<td><span class="db-list-rat">Done</span>
									</td>
									<td><span class="db-list-ststus">Completed</span>
									</td>
									<td><a href="db-payment.html" class="db-list-edit">Payment</a>
									</td>
								</tr>
								<tr>
									<td>Effi Furniture Dealers</td>
									<td>02 April 2012</td>
									<td><span class="db-list-rat">Done</span>
									</td>
									<td><span class="db-list-ststus">Completed</span>
									</td>
									<td><a href="db-payment.html" class="db-list-edit">Payment</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
					<div class="db-list-com tz-db-table">
						<div class="ds-boar-title">
							<h2>Messages</h2>
							<p>All the Lorem Ipsum generators on the All the Lorem Ipsum generators on the</p>
						</div>
						<div class="tz-mess">
							<ul>
								<li class="view-msg">
									<h5><img src="../images/users/1.png" alt="" />Listing Enquiry <span class="tz-msg-un-read">unread</span></h5>
									<p>Nulla egestas leo elit, eu sollicitudin diam suscipit non. Nunc imperdiet hendrerit mi, mollis sagittis risus accumsan ac.</p>
									<div class="hid-msg"><a href="#"><i class="fa fa-eye" title="view"></i></a><a href="#"><i class="fa fa-trash" title="delete"></i></a>
									</div>
								</li>
								<li class="view-msg">
									<h5><img src="../images/users/4.png" alt="" />Request for meet <span class="tz-msg-read">unread</span></h5>
									<p>Duis nulla ligula, interdum porta nulla sed, efficitur tempus lacus. Quisque facilisis, sapien tempor mollis sollicitudin, urna ligula vulputate nulla, rhoncus faucibus justo mauris eget elit.Pellentesque eget pellentesque dolor.</p>
									<div class="hid-msg"><a href="#"><i class="fa fa-eye" title="view"></i></a><a href="#"><i class="fa fa-trash" title="delete"></i></a>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<!--RIGHT SECTION-->
			<?php include 'assets/featured-vessels.php'; ?>
		</div>
	</section>

	<?php include '../assets/footer-dashboard.php'; ?>
</body>
</html>