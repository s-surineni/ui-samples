import React from 'react';
import './LoginPage.css';
function LoginPage() {
    return (
        <div className='login-box'>
            <h2>Login</h2>
            <form>
                <div className='user-box'>
                    <input type="text" id="username" />
                    <label htmlFor='username'>Username</label>
                </div>
                <div className='user-box'>
                    <input type='password' id="password" />
                    <label htmlFor='password'>Password</label>
                </div>
                <a href='#'>Submit</a>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
            </form>
        </div>
    );
}
export default LoginPage;