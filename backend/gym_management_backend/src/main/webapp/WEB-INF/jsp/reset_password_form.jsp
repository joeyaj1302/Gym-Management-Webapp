<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<title>Reset Password</title>
</head>
<body>
	<div class = "container" style = "postion:absolute;left:300px">
	<br/>
	<br/>
    <h2>Reset Your Password : </h2>
</div>
         
<form th:action="@{/reset_password}" method="post" style="max-width: 350px; margin: 0 auto;">
    <input type="hidden" name="token" th:value="${token}" />
<div class="border border-secondary rounded p-3">
    <div>
        <p>
            <input type="password" name="password" id="password" class="form-control"
                placeholder="Enter your new password" required autofocus />
        </p>         
        <p>
            <input type="password" class="form-control" placeholder="Confirm your new password"
                required oninput="checkPasswordMatch(this);" />
        </p>         
        <p class="text-center">
            <input type="submit" value="Change Password" class="btn btn-primary" />
        </p>
    </div>
</div>
</form>
<script>
function checkPasswordMatch(fieldConfirmPassword) {
    if (fieldConfirmPassword.value != $("#password").val()) {
        fieldConfirmPassword.setCustomValidity("Passwords do not match!");
    } else {
        fieldConfirmPassword.setCustomValidity("");
    }
}
</script>
</body>
</html>