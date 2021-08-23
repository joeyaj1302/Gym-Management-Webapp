import React from 'react';

const AppContext = React.createContext({
    isLoggedIn: false,
    id:0,
    fname: '',
    lname: '',
    email: '',
    age:0,
    address:''
})

export default AppContext;