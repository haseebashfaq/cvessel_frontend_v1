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
<body id="editProfilePage">
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
							<a href="../dashboard/profile.php" class="tz-lma"><img src="../images/icon/dbl6.png" alt="" /> My Profile</a>
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
					<h4>Profile</h4>
					<div class="db-list-com tz-db-table">
						<div class="ds-boar-title">
							<h2>Edit Profile</h2>
							<p>All the Lorem Ipsum generators on the All the Lorem Ipsum generators on the</p>
						</div>
						<div class="tz2-form-pay tz2-form-com">
							<form class="col s12">
								<div class="row">
									<div class="input-field col m6">
										<input id="editProfileFirstname" type="text" class="validate" value="<?php if($dashboardData['firstname']) echo $dashboardData['firstname']; ?>">
										<label>First Name</label>
									</div>
									<div class="input-field col m6">
										<input id="editProfileLastname" type="text" class="validate" value="<?php if($dashboardData['lastname']) echo $dashboardData['lastname']; ?>">
										<label>Last Name</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="editProfileEmail" type="email" class="validate" value="<?php if($dashboardData['email']) echo $dashboardData['email']; ?>" disabled>
										<label>Email Address</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12 m6">
										<input id="editProfileCompany" type="text" class="validate" value="<?php if($dashboardData['company']) echo $dashboardData['company']; ?>">
										<label>Company</label>
									</div>
									<div class="input-field col s12 m6">
										<input id="editProfilePhone" type="number" class="validate" value="<?php if($dashboardData['phone']) echo $dashboardData['phone']; ?>">
										<label>Phone</label>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input id="editProfileAddress" type="text" class="validate" value="<?php if($dashboardData['address']) echo $dashboardData['address']; ?>">
										<label>Address</label>
									</div>
								</div>
								<!-- <div class="row">
									<div class="input-field col s12">
										<select>
											<option value="" disabled selected>Select Status</option>
											<option value="1">Active</option>
											<option value="2">Non-Active</option>
										</select>
									</div>
								</div>
								<div class="row">
									<div class="input-field col s12">
										<input type="text" class="validate">
										<label>Date Of Birth</label>
									</div>
								</div> -->
								<!-- <div class="row tz-file-upload">
									<div class="file-field input-field">
										<div class="tz-up-btn"> <span>File</span>
											<input type="file"> </div>
										<div class="file-path-wrapper">
											<input class="file-path validate" type="text"> </div>
									</div>
								</div> -->
								<div class="row">
									<div class="input-field col s12">
										<input id="updateProfileBtn" type="submit" value="Save" class="waves-effect waves-light full-btn">
										<i class="fa fa-spinner fa-3x fa-spin"></i>
									</div>
								</div>
							</form>
							<div class="alert alert-danger data-alert">Please enter valid details</div>
						</div>
						<div class="db-mak-pay-bot">
							<p>Please make sure if you have entered correct information before saving it. Incorrect information might lead to the cancellation of booking.</p></div>
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

<script type="text/javascript">
	$('#updateProfileBtn').on('click', function(e){
		e.preventDefault();

		if(!$("#editProfileFirstname").val() || !$("#editProfileLastname").val() || !$("#editProfileCompany").val() || !$("#editProfilePhone").val() || !$("#editProfileAddress").val()) {
			$('.fa-spinner').css('opacity',1).fadeIn(1000);;
        	setTimeout(function(){
		        $('.fa-spinner').css('opacity',0).fadeOut(1000);
		        $('.data-alert').fadeIn(1000).delay(3000).fadeOut(1000);	
		    }, 500);
		    return false;
		}

		var edit_profile_data = {
			"firstname": $("#editProfileFirstname").val(),
			"lastname": $("#editProfileLastname").val(),
			"company": $("#editProfileCompany").val(),
			"phone": $("#editProfilePhone").val(),
			"address": $("#editProfileAddress").val()
	    };
	    console.log('here');
	    $.ajax({
          type: "POST",
          url: "../backend/edit-profile.php",
          data: edit_profile_data,
          success: function(returndata){console.log(returndata);
            if(returndata) {
            	$('.fa-spinner').css('opacity',1);
            	setTimeout(function(){
			        $('.fa-spinner').css('opacity',0).fadeOut(1000);
			        window.location.replace("profile.php");
			    }, 1000);
            } else {
            	$('#updateProfileBtn').fadeOut(500).delay(3000).fadeIn(500);
            	$('.fa-spinner').css('opacity',1).fadeIn(1000);
	        	setTimeout(function(){
			        $('.fa-spinner').css('opacity',0).fadeOut(1000);
			        $('.data-alert').fadeIn(1000).delay(3000).fadeOut(1000);
			    }, 500);
            }
          }
        });
    });
</script>