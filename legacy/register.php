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
<body id="RegisterPage">
	<!--PRE LOADING-->
	<div id="preloader">
		<div id="status">&nbsp;</div>
	</div>
	<?php include 'assets/header.php'; ?>
	<section class="tz-register">
		<div class="log-in-pop">
			<div class="log-in-pop-left">
				<h1>Hello Visitor</h1>
				<p>Don't have an account? Create your account. It will take less than a minutes</p>
				<h4>Follow us for latest updates</h4>
				<ul>
					<li><a href="#"><i class="fa fa-facebook"></i> Facebook</a>
					</li>
					<li><a href="#"><i class="fa fa-google"></i> Google+</a>
					</li>
					<li><a href="#"><i class="fa fa-twitter"></i> Twitter</a>
					</li>
				</ul>
				<div class="login-left">
					<div class="input-field s12"> <a href="login.php">Already a member? Login</a> </div>
				</div>
			</div>
			<div class="log-in-pop-right">
				<h4>Create an Account</h4>
				<p>Don't have an account? Create your account. It will take less then a minutes.</p>
				<form class="s12">
					<div>
						<div class="input-field s12">
							<input type="text" id="register_firstName" data-ng-model="name1" ng-hide="true" class="validate">
							<label>First name</label>
						</div>
					</div>
					<div>
						<div class="input-field s12">
							<input type="text" id="register_lastName" data-ng-model="name1" class="validate">
							<label>Last name</label>
						</div>
					</div>
					<div>
						<div class="input-field s12">
							<input type="email" id="register_email" class="validate">
							<label>Email id</label>
						</div>
					</div>
					<div>
						<div class="input-field s12">
							<input type="password" id="register_password" class="validate">
							<label>Password</label>
						</div>
					</div>
					<div>
						<div class="input-field s12">
							<input type="password" id="register_confirmPassword" class="validate">
							<label>Confirm password</label>
						</div>
					</div>
					<div>
						<div class="input-field s4">
							<input id="registerbtn" type="submit" value="Register" class="waves-effect waves-light log-in-btn">
							<i class="fa fa-spinner fa-3x fa-spin"></i>
						</div>
					</div>
					
				</form>
        <div class="alert alert-success login-alert success-alert">Registered successfully</div>
				<div class="alert alert-danger login-alert error-alert">Please fill all fields</div>
				<div class="alert alert-danger password-mismatch-alert">Your passwords don't match</div>
			</div>
		</div>
	</section>
	<?php include 'assets/footer.php'; ?>
</body>
</html>
<script type="text/javascript">
	$('#registerbtn').on('click', function(e){
		e.preventDefault();

    // Passwords don't match
		if($("#register_password").val()!=$("#register_confirmPassword").val()) {
      $('.password-mismatch-alert').fadeIn(1000).delay(3000).fadeOut(1000);	
      return false;
		}

    // Missing fields
		if(!$("#register_firstName").val() || !$("#register_lastName").val() || !$("#register_email").val() || !$("#register_password").val()) {
      $('.login-alert.error-alert').fadeIn(1000).delay(3000).fadeOut(1000);	
      return false;
    }
    
      const firstName = $("#register_firstName").val()
      const lastName = $("#register_lastName").val()
      const email = $("#register_email").val()
      const password = $("#register_password").val()

      const createUser = `
        mutation {
          createUser(
            data:{
              firstName: "${firstName}"
              lastName: "${lastName}"
              email: "${email}"
              password: "${password}"
              isActivated: true
              userType: CUSTOMER
            }
          ){
            token
            user {
              id
              firstName
            }
          }
        }
      ` 
        
      $('.fa-spinner').css('opacity',1).fadeIn(1000);

	    $.ajax({
        type: "POST",
        url: "https://cvessel-node-prod.herokuapp.com/",
        contentType: "application/json",
        data: JSON.stringify({ query: createUser }),
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