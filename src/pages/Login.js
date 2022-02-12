import React, { useState } from 'react';
import Navbar from '../const/Navbar';
import './../App.css';
import { LoginAction } from '../store/actions/LoginAction';
import { connect } from 'react-redux';

const Login = (props) => {
    const [isloading, setisloading] = useState(false);
    const [username, setusername] = useState('');
    const [password, setpassword] = useState('');


    const loginfunction = (username, password) => {
        setisloading(true);

        let payload = { username: username, password: password }
        props.loginAction(payload).then(result => {
            if (result.success) {
                setisloading(false);
                props.history.push('/dashboard');
            }
        })
        console.log('user loggedin with username', username);
    };

    const handleChange = (e) => {
        if (e.target.name === 'username') {
            setusername(e.target.value);
        }

        if (e.target.name === 'password') {
            setpassword(e.target.value);
        }

        return () => { };
    };

    const handleClick = (e) => {
        e.preventDefault();
        username.length && password.length && loginfunction(username, password);
    };

    return (
        <>
            <Navbar />
            <div className='wrap'>
                <div className='login_div'>
                    <form method='post' action='/'>
                        <div className='form-group'>
                            <label for="username"> Username: </label>
                            <input type="text" placeholder='Enter Username' onChange={handleChange} className="form-control" required name="username" />
                        </div>

                        <div className='form-group'>
                            <label for="password"> Password: </label>
                            <input type="password" placeholder='Enter Password' onChange={handleChange} className="form-control" required name="password" />
                        </div>

                        <button className='btn btn-primary mt-3' type='submit' onClick={handleClick} >
                            {!isloading ? 'Login' : 'loading...'}
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    console.log('state', state);
    return {
        userDetails: state.login.userDetails,
    }
}

const mapDispatchToProps = {
    loginAction: LoginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

// export default Login;