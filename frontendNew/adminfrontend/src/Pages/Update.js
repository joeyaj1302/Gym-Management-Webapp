
function Update() {
    return (
        <div className="update" >
            <table>
				<tr> First Name :</tr>
                <tr><input className="form-control" />
				</tr>
                
                <tr> Last Name :</tr>
                <tr><input className="form-control"/></tr>

                <tr>Email :</tr>
                <tr><input className="form-control"/></tr>

                <tr> Password :</tr>
                    <tr><input  className="form-control"/></tr>

                <tr>Age :</tr>
                <tr><input className="form-control"/></tr>

                <tr>Address :</tr>
               <tr><input  className="form-control"/>
				</tr>

                <tr>
                    <td>
                        <button className="btn btn-success"> Update Details </button>
                    </td>
                </tr>
			</table>
            <br/>

            

        </div>
    )
}

export default Update
