import React from 'react';
import './LoginPage2.css';
function LoginPage() {
    return (
        <div className='component-box'>
            <div className='login-box2'>
                <div className='form-box'>
                    <form>
                        <input type="text" placeholder='Username' />
                        <input type="password" placeholder='Password' />
                        <button>Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
export default LoginPage;