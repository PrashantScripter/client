import '../styles/Login.css'
import { useState } from 'react';

const Login = () => {

    const [account, toggleAccount] = useState('login');

    const toggleSignUp = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }

    return (
        <>
            {
                account === 'login' ?
                    <form id='form'>
                        <h2>Welcome Back</h2>
                        <section className='inputs-login'>
                            <input type="text" placeholder='Enter Email here' required/>
                            <input type="password" placeholder='Enter Password here' required/>
                            <div className='login-button-forgot'>
                                <button className='login-button'>Login</button>
                                <a href="" className='forgot'>Forget
                                    Password</a>
                            </div>

                        </section>
                        <button className='createAccount' onClick={()=>toggleSignUp()}>Create an account</button>
                    </form>
                :
                    <form id='form'>
                        <h2>Create Account</h2>
                        <section className='inputs-login'>
                            <input type="text" placeholder='Enter Name'
                                required />
                            <input type="text" placeholder='Enter Username' required />
                            <input type="text" placeholder='Enter Password' />
                            <div className='login-button-forgot'>
                                <button className='login-button'>Sing Up</button>
                                <a href="" className='forgot'>Forget
                                    Password</a>
                            </div>
                        </section>
                        <button className='createAccount' onClick={()=>toggleSignUp()}>Already have an account</
                        button>
                    </form>
            }
        </>
    );
}


export default Login;