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
							<a href="../dashboard"><img src="../images/icon/dbl1.png" alt="" /> My Dashboard</a>
						</li>
						<li>
							<a href="" class="tz-lma"><img src="../images/icon/dbl6.png" alt="" /> My Profile</a>
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
					<h4>Manage Profile</h4>
					<div class="db-list-com tz-db-table">
						<div class="ds-boar-title">
							<h2>Profile</h2>
							<p>Please check if all your data is there. If not, please update it.</p>
						</div>
						<table class="responsive-table bordered">
							<tbody>
								<tr>
									<td>First Name</td>
									<td>:</td>
									<td><?php echo $dashboardData['firstname']; ?></td>
								</tr>
								<tr>
									<td>Last Name</td>
									<td>:</td>
									<td><?php echo $dashboardData['lastname']; ?></td>
								</tr>
								<tr>
									<td>Email</td>
									<td>:</td>
									<td><?php echo $dashboardData['email']; ?></td>
								</tr>
								<tr>
									<td>Password</td>
									<td>:</td>
									<td><a href="">Click to reset</a></td>
								</tr>
								
								<tr>
									<td>Phone</td>
									<td>:</td>
									<td><?php echo $dashboardData['phone']; ?></td>
								</tr>
								<tr>
									<td>Company</td>
									<td>:</td>
									<td><?php echo $dashboardData['company']; ?></td>
								</tr>
								<tr>
									<td>Address</td>
									<td>:</td>
									<td><?php echo $dashboardData['address']; ?></td>
								</tr>
							</tbody>
						</table>
						<div class="db-mak-pay-bot">
							<p>Please make sure if you have entered correct information before saving it. Incorrect information might lead to the cancellation of booking.</p>
							<a href="edit-profile.php" class="waves-effect waves-light btn-large">Edit profile</a>
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