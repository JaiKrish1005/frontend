import React, { useContext, useState } from 'react';
import { AuthContext } from '../context/AuthContext';
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const { login, signup } = useContext(AuthContext);
    const [isLoginMode, setIsLoginMode] = useState(true);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isLoginMode) {
            await login(username, password);
            history.push('/'); // Redirect to home after login.
        } else {
            await signup(username, password);
            alert('Signup successful');
            setIsLoginMode(true); // Switch to login mode after signup.
        }
    };

    return (
        <div>
            <h2>{isLoginMode ? 'Login' : 'Signup'}</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">{isLoginMode ? 'Login' : 'Signup'}</button>
            </form>
            <button onClick={() => setIsLoginMode(!isLoginMode)}>
                Switch to {isLoginMode ? 'Signup' : 'Login'}
            </button>
        </div>
    );
};

export default Auth;