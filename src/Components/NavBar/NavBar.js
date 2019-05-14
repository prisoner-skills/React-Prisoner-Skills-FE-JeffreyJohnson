import React from 'react';

class NavBar extends React.Component{
    render(){
        return(
            <div>
                <a href="/HomePage">HomePage</a>
                <a href="/Login">Login</a>
                <a href="/AdminPage">AdminPage</a>
                <a href="/RegisterPage">Register</a>
                
            </div>
        )
    }
}
export default NavBar;