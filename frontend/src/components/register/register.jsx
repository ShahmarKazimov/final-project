import React, { useState } from 'react';
import "./register.css"
const SignUpSignInForm = () => {
    const [rightPanelActive, setRightPanelActive] = useState(false);

    const handleSignUpClick = () => {
        setRightPanelActive(true);
    };

    const handleSignInClick = () => {
        setRightPanelActive(false);
    };

    return (
        <div className={`mx-5 h-[350px] lg:h-[480px] sm:w-[461px] md:w-[561px] lg:w-[761px] sm:mx-auto containers ${rightPanelActive ? "right-panel-active" : ""}`} id="containers">
            <div className="form-containers sign-up-containers">
                <form className='register-form px-5 sm:px-[50px]' action="#">
                    <h1 className='text-xs md:text-base font-semibold'>Create Account</h1>
                    <div className="social-containers">
                        <button type="submit" name="signInWithGoogle" className="border flex items-center justify-center gap-x-5 rounded-lg p-1">
                            <img src="https://static.chrono24.com/images/icons/svg/google-logo.svg" alt="" className="" />
                            <span className='hidden lg:block'>Continue with Google</span>
                        </button>                    </div>
                    <span className='text-xs md:text-base'>or use your email for registration</span>
                    <input className='register-input text-xs md:text-base' type="text" placeholder="Name" />
                    <input className='register-input text-xs md:text-base' type="email" placeholder="Email" />
                    <input className='register-input text-xs md:text-base' type="password" placeholder="Password" />
                    <button className='register-button text-xs md:text-base'>Sign Up</button>
                </form>
            </div>
            <div className="form-containers sign-in-containers">
                <form className='register-form px-5 sm:px-10' action="#">
                    <h1 className='text-xs md:text-base font-semibold'>Sign in</h1>
                    <div className="social-containers">
                        <button type="submit" name="signInWithGoogle" className="border flex items-center justify-center gap-x-5 rounded-lg p-1">
                            <img src="https://static.chrono24.com/images/icons/svg/google-logo.svg" alt="" className="" />
                            <span className='hidden lg:block'>Continue with Google</span>
                        </button>
                    </div>
                    <span className='text-xs md:text-base'>or use your account</span>
                    <input className='text-xs md:text-base register-input' type="email" placeholder="Email" />
                    <input className='text-xs md:text-base register-input' type="password" placeholder="Password" />
                    <a className='text-xs md:text-base' href="#">Forgot your password?</a>
                    <button className='mt-2 register-button text-xs md:text-base'>Sign In</button>
                </form>
            </div>
            <div className="overlay-containers">
                <div className="overlay">
                    <div className="overlay-panel px-5 lg:px-10 overlay-left">
                        <h1 className='leading-6 text-xs md:text-base'>Welcome Back!</h1>
                        <p className='leading-6 text-xs md:text-base'>To keep connected with us please login with your personal info</p>
                        <button className="mt-5 register-button ghost text-xs md:text-base" id="signIn" onClick={handleSignInClick}>Sign In</button>
                    </div>
                    <div className="overlay-panel px-5 lg:px-10 overlay-right line">
                        <h1 className='leading-6 text-xs md:text-base'>Hello, Friend!</h1>
                        <p className='leading-6 text-xs md:text-base'>Enter your personal details and start journey with us</p>
                        <button className="mt-5 register-button ghost text-xs md:text-base" id="signUp" onClick={handleSignUpClick}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpSignInForm;
