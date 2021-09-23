import './App.css';

import Update from './Pages/Update';
import Members from './Pages/Members';
import Trainers from './Pages/Trainers';
import Plans from './Pages/Plans';
import Dashboard from './Pages/Dashboard';
import Logout from './Pages/Logout'
import UpdateTrainer from './Pages/UpdateTrainer';
import Navbar from './Components/Navbar';
import { BrowserRouter , Switch, Route } from 'react-router-dom';
import Equipments from './Pages/Equipments';
import Payments from './Pages/Payment';
import UpdateMember from './Pages/UpdateMember';
import  UpdatePlan from './Pages/UpdatePlan';
import Enquiry from './Pages/Enquiry';


function App() {
  const authResult = new URLSearchParams(window.location.search); 
  const id = authResult.get('id');
  const uid = id;
  console.log(uid);
  if (id!=null) {
    sessionStorage.setItem('uid',id);
    sessionStorage.setItem('isLoggedin',true);
  }
  const goLogin = () => {
    window.location.href = 'http://localhost:3006/login';
  }

  if (sessionStorage.getItem('isLoggedin')=='true') {
    return (
    
      <BrowserRouter>
      <Navbar id={uid} />
      <Switch>
        <Route path='/dashboard' component={Dashboard} />
        <Route path='/update/:uid' component={Update} />
        <Route path='/members' component={Members} />
        <Route path='/trainers' component={Trainers} />
        <Route path='/plans' component={Plans} />
        <Route path='/equipments' component={Equipments}/>
        <Route path='/payments' component={Payments}/>
        <Route path='/updatemember' component={UpdateMember} />
        <Route path='/updatetrainer' component={UpdateTrainer} />
        <Route path='/updateplan' component={UpdatePlan} />
        <Route path='/enquiry' component={Enquiry} />
        {/* <Route path='/dashbaord' component={Dashboard} /> */}
        <Route path='/logout' component={Logout} />
      </Switch>
    </BrowserRouter>
    );
  }
  else {
    return(
      <div>
        <h1>Login First</h1>
        <button onClick={goLogin}>Login</button>
      </div>
    )
   
  }

  
}

export default App;
