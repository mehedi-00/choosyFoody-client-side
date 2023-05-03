/* eslint-disable no-unused-vars */
import { Button, Card, Label, TextInput } from 'flowbite-react';
import React, { useContext, useState } from 'react';
import { Link,  useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
import { FaExclamation, FaGoogle, FaGithub } from 'react-icons/fa';

const Login = () => {
    const { loginWithEmailAndPassword, loginWithGoogle, loginWithGithub } = useContext(AuthContext);
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';
    const handleLoginWithEmailPass = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        loginWithEmailAndPassword(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message));

    };

    const handleLoginGoogle = () => {
        loginWithGoogle()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message));
    };
    const handleLoginGithub = () => {
        loginWithGithub()
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate(from, { replace: true });
            })
            .catch(err => setError(err.message));
    };
    return (
        <div className="max-w-sm mt-28 mx-auto shadow-xl ">
            <Card>
                <div className='text-red-700 flex space-x-2'> {error && <FaExclamation className='w-5 h-5 text-teal-950'></FaExclamation>} <span>{error}</span> </div>
                <form className="flex flex-col gap-4" onSubmit={handleLoginWithEmailPass}>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email" name='email'
                            placeholder="email@.com"
                            required={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="password1"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password1"
                            type="password"
                            name='password'
                            required={true}
                        />
                    </div>

                    <button type="submit" className='btn-primary'>
                        Login
                    </button>
                </form>
                <span className='font-popins'>Do not have an account <Link to='/login/register' className='text-primary font-semibold underline'>Register</Link></span>
                <div className='flex justify-evenly mt-5'>
                    <button onClick={handleLoginGoogle} className='flex items-center bg-lime-800 px-3 py-2 rounded-md shadow-md'>
                        <FaGoogle className='w-8 w-8 text-yellow-400' />
                        <span className='font-popins text-white font-semibold'>GOOGLE</span>
                    </button>
                    <button onClick={handleLoginGithub} className='flex items-center bg-blue-900 px-3 py-2 rounded-md shadow-md'>
                        <FaGithub className='w-8 w-8 text-yellow-400' />
                        <span className='font-popins text-white font-semibold'>GITHUB</span>
                    </button>
                </div>
            </Card>
        </div>
    );
};

export default Login;