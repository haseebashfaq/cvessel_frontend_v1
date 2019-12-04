<?php
session_start();
if(isset($_SESSION["email"]) && isset($_SESSION["password"])) {
?>
<script type="text/javascript">
window.location.replace("dashboard/");
</script>
<?php
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
	<?php include 'assets/head-include.php'; ?>
</head>
<body id="loginPage">
	<!--PRE LOADING-->
	<div id="preloader">
		<div id="status">&nbsp;</div>
	</div>
	<?php include 'assets/header.php'; ?>
	<section class="tz-register">
		<div class="log-in-pop">
			<div class="log-in-pop-left">
				<h1>Hello Visitor</h1>
				<p>Don't have an account? Create your account. It takes less then a minutes</p>
				<h4>Login with social media</h4>
				<ul>
					<li><a href="#"><i class="fa fa-facebook"></i> Facebook</a>
					</li>
					<li><a href="#"><i class="fa fa-google"></i> Google+</a>
					</li>
					<li><a href="#"><i class="fa fa-twitter"></i> Twitter</a>
					</li>
				</ul>
			</div>
			<div class="log-in-pop-right">
				<h4>Login</h4>
				<p>Already have an account? Log in to manage your profile and bookings.</p>
				<form class="s12">
					<div>
						<div class="input-field s12">
							<input type="text" data-ng-model="name1" class="validate" id="login_email">
							<label>Email</label>
						</div>
					</div>
					<div>
						<div class="input-field s12">
							<input type="password" class="validate" id="login_password">
							<label>Password</label>
						</div>
					</div>
					<div>
						<div class="input-field s4">
							<input id="loginbtn" type="submit" value="Login" class="waves-effect waves-light log-in-btn">
							<i class="fa fa-spinner fa-3x fa-spin"></i>
						</div>
					</div>
					<div>
						<div class="input-field s12"> <a href="forgot-pass.php">Forgot password</a> | <a href="register.php">Create a new account</a> </div>
					</div>
				</form>
        <div class="alert alert-success login-alert success-alert">Logged in successfully</div>
				<div class="alert alert-danger login-alert error-alert">Please fill all fields</div>
			</div>
		</div>
	</section>
	<?php include 'assets/footer.php'; ?>
</body>
</html>
<script type="text/javascript">
	$('#loginbtn').on('click', function(e){
		e.preventDefault();

    // Missing fields
		if(!$("#login_email").val() || !$("#login_password").val()) {
      $('.login-alert.error-alert').fadeIn(1000).delay(3000).fadeOut(1000);	
		  return false;
		}

    const email = $("#login_email").val()
    const password = $("#login_password").val()

    const login = `
      mutation {
        login(
          data: {
            email: "${email}"
            password: "${password}"
          }
        ) {
          token
          user {
            id
            firstName
          }
        }
      }
    `
    
    $('.fa-spinner').css('opacity',1);

    $.ajax({
        type: "POST",
        url: "https://cvessel-node-prod.herokuapp.com/",
        contentType: "application/json",
        data: JSON.stringify({ query: login }),
        success: function(result){
          $('.fa-spinner').css('opacity',0).fadeOut(500);
          if(result.data) {
            console.log('success ->', result)
            $('.login-alert.success-alert').delay(500).fadeIn(1000).delay(3000).fadeOut(1000);
            // window.location.replace("dashboard/");
          } else {
            console.log('fail ->', result)
            const errorMessage = result.errors[0].message

            $('.login-alert.error-alert').html(errorMessage);
            $('.login-alert.error-alert').delay(500).fadeIn(1000).delay(3000).fadeOut(1000);
          }
        }
      });
    });
</script>
