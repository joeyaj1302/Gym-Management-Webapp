<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
	<h2>Online Gym Management</h2>
	<form method="post" action="authenticate">
		<h4>${message}</h4>
		<table>
			<tr>	
				<td>Email:</td>
				<td><input type="text" name="email"/></td>
			</tr>
			<tr>	
				<td>Password:</td>
				<td><input type="password" name="password"/></td>
			</tr>
			<tr>	
				<td colspan="2">
					<input type="submit" value="Sign In"/>
					<a href="register">Sign Up</a>
				</td>
			</tr>
		</table>
	</form>
</body>
</html>