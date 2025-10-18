import React, { useEffect } from 'react';
import useFormInputData from '../Hooks/useFormInputData';
import generateStrongPassword from '../Utils/generateStrongPassword';
import { Link } from 'react-router-dom';

function Register() {
    const { inputData: email, handleInputChange: handleEmailChange } = useFormInputData('');
    const { inputData: password, handleInputChange: handlePasswordChange } = useFormInputData('');
    const { inputData: confirmation, handleInputChange: handlePasswordConfirmation } = useFormInputData('');

    function suggestPassword() {
        const password = generateStrongPassword();

        handlePasswordChange(null, password);
        handlePasswordConfirmation(null, password);

    }

    useEffect(() => {
        document.title = "Create new account"
    })

    return (
        <>
            <div className="flex min-h-full h-screen flex-col justify-center px-6 py-12 lg:px-8 bg-black overflow-auto">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-20 text-center text-2xl/9 font-bold tracking-tight text-white">Create a new account</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                Email address
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={email}
                                    onChange={handleEmailChange}
                                    required
                                    autoComplete="email"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">
                                    Password
                                </label>
                                <div className="text-sm">
                                    <button className="font-semibold text-indigo-400 hover:text-indigo-300 cursor-pointer" type="button" onClick={suggestPassword}>
                                        Suggest a strong password
                                    </button>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                             <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">
                                Password Confirmation
                            </label>
                            <div className="mt-2">
                                <input
                                    id="password-confirmation"
                                    name="confirmation"
                                    type="password"
                                    value={confirmation}
                                    onChange={handlePasswordConfirmation}
                                    required
                                    autoComplete="current-password"
                                    className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <p className="mt-10 text-center text-sm/6 text-gray-400">
                        Already have an account?{' '}
                        <Link to={"/login"} className="font-semibold text-indigo-400 hover:text-indigo-300">
                            Login
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register