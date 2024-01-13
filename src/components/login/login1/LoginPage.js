import React from 'react';
import './LoginPage.css';
function LoginPage() {
    return (
        <div className='login-box'>
            <form>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder='Username'/>
                <label htmlFor="password">Password</label>
                <input type='password' id="password" placeholder='Password'/>
                <a href='#'>Submit</a>
            </form>
        </div>
    );
}
export default LoginPage;