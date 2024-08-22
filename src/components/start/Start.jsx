import React from "react";
import css from '../start/start.module.css'
import logo from '../../assets/images/start/logo.png';
import { useNavigate } from "react-router-dom";
const Start = () => {
    const navigate = useNavigate();

    const handleRegistrationClick = () => {
        navigate('/So-Yummy-app/registration');
    };

    const handleSignInClick = () => {
        navigate('/So-Yummy-app/signin')
    }
    return (
        <div className={css.startContainer}>
            <div className={css.startElements}>
                <div>
            <div className={css.logoBackground}>
            <img src={logo} className={css.iconLogo} alt="logo"></img>
            </div>
            <p className={css.titleStart}>Welcome to the app!</p>
            <p className={css.noteStart}>This app offers more than just a collection of recipes - it is designed to be your very own digital cookbook. You can easily save and retrieve your own recipes at any time.</p>
            </div>
            <div className={css.buttonsStart}>
             <button className={css.buttonStartOne} onClick={handleRegistrationClick}>
                Registration
                </button>
            <button className={css.buttonStartTwo} onClick={handleSignInClick}>Sign In</button>            
            </div>
        </div>
        </div>
    )
}

export default Start;