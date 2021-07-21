import React, { useState } from 'react'
import logo from '../../assets/images/logos/inovact 1.png'
import google from '../../assets/images/social-icons/google.png'
import facebook from '../../assets/images/social-icons/facebook.png'
import apple from '../../assets/images/social-icons/apple.png'

interface IUserCred {
    email: string
    password: string
    confirmPassword: string
}

const LoginForm: React.FC = () => {
    const [isSignup, setIsSignup] = useState(false)
    const [userCred, setUserCred] = useState<IUserCred>({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleSignup = (e: any) => {
        e.preventDefault()
        setIsSignup(true)
    }

    const handleInputChange = (e: any) => {
        const property = e.target.id
        setUserCred((prev) => {
            return { ...prev, [property]: e.target.value }
        })
    }

    return (
        <div className="login-page">
            <div className="login-page__form">
                <img
                    className="login-page__form__img u-margin-bottom-small"
                    src={logo}
                    alt=""
                ></img>

                <h1 className="heading-login u-margin-bottom-medium">
                    {isSignup ? 'Sign up' : 'Log in'}
                </h1>

                <input
                    onChange={handleInputChange}
                    id="email"
                    autoFocus
                    type="email"
                    className="input-component"
                    placeholder="Email"
                    value={userCred.email}
                ></input>
                <input
                    onChange={handleInputChange}
                    id="password"
                    type="password"
                    className="input-component"
                    placeholder="Password"
                    value={userCred.password}
                ></input>

                {isSignup && (
                    <input
                        onChange={handleInputChange}
                        id="confirmPassword"
                        type="password"
                        className="input-component"
                        placeholder="Confirm Password"
                        value={userCred.confirmPassword}
                    ></input>
                )}

                <a href="/" className="button button--blue">
                    {isSignup ? 'Sign up' : 'Log in'}
                </a>

                {!isSignup ? (
                    <div className="signup-links">
                        <div className="forgot-password">
                            <a href="/">Forgot password?</a>
                        </div>
                        <div className="signup">
                            Dont have an account?{' '}
                            <a onClick={handleSignup} href="/">
                                Sign up
                            </a>
                        </div>
                    </div>
                ) : null}
                <h2 className="login-page__form__division u-margin-bottom-small">
                    <span>OR</span>
                </h2>
                <h1 className="heading-login heading-login--secondary u-margin-bottom-small">
                    Sign in with
                </h1>
                <div className="login-page__form__social-icons">
                    <a
                        href="/"
                        className="login-page__form__social-icons__link"
                    >
                        <img
                            src={google}
                            alt=""
                            className="login-page__form__social-icons__img"
                        ></img>
                    </a>
                    <a
                        href="/"
                        className="login-page__form__social-icons__link"
                    >
                        <img
                            src={facebook}
                            alt=""
                            className="login-page__form__social-icons__img"
                        ></img>
                    </a>
                    <a
                        href="/"
                        className="login-page__form__social-icons__link"
                    >
                        <img
                            src={apple}
                            alt=""
                            className="login-page__form__social-icons__img"
                        ></img>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default LoginForm
