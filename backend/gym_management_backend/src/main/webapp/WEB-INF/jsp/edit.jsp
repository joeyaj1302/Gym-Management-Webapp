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
		<form action="editdetails?id=${member.mid}" method = "post" class = "form-control">
			<table>
				<tr>
				<td>Name :</td>
				<td> <input type = "text" name = "name" value = "${member.mfname}"/> </td>
				</tr>
				<tr>
				<td>Password :</td>
				<td> <input type = "text" name = "password"/> </td>
				</tr>
				<tr>
				<td> <input type = "submit" value = "Update Details" class = "btn btn-primary"/> </td>
				</tr>
			</table>
		
		</form>
		<br/>
		<a href = "addsubjects" class = "btn btn-warning">Add Subjects</a>
	</div>
</body>
</html>