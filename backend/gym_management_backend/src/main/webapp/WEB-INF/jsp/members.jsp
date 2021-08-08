<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<title>Insert title here</title>
</head>
<body>
	<div class = "container">
		<h2>Welcome</h2>
		
		<h3>Id : ${member.mid}</h3>
		<h3>Name : ${member.mfname}</h3>
		<h3>Email : ${member.mlname}</h3>
		<h3>Address : ${member.maddress}</h3>
		
		
		<a href = "edit?id=${member.mid}" class = "btn btn success">Edit Info </a>
	</div>
</body>
</html>