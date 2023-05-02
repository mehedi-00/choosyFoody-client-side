/* eslint-disable no-unused-vars */
import { Card, Label, TextInput } from 'flowbite-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="max-w-sm mt-28 mx-auto shadow-xl ">
            <Card>
                <form className="flex flex-col gap-4">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email1"
                                value="Your email"
                            />
                        </div>
                        <TextInput
                            id="email1"
                            type="email"
                            name='email'
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
                            id="password"
                            type="password"
                            name='password'
                            required={true}
                        />
                    </div>

                    <button type="submit" className='btn-primary'>
                        Submit
                    </button>
                </form>
                <span className='font-popins'>Allready have an account <Link to='/login' className=' text-primary font-semibold'>Login</Link></span>
            </Card>
        </div>
    );
};

export default Register;