import React, {useState} from "react";
import css from '../SignIn/SignIn.module.css';
import Svg from '../../assets/svg/svg';

const SignIn = () => {
    const [signinEmailPlaceholder, setSigninEmailPlaceholder] = useState('Name');
    const [signinPasswordPlaceholder, setSigninPasswordPlaceholder] = useState('Password');

    return (
        <>
        <section className={css.signInSection}>
            <section className={css.signInPosition}>
        <div className={css.sectionImageSignIn}>
            <div className={css.signInImageContainer}>
                <img className={css.signInImage} src="./src/assets/images/registration_login/login_images_mobile@1x.png" alt="login">
                </img>
                </div>
                </div>
                <div className={css.signInSectionBackground}>
                    <div className={css.signInContainerBackground}>
                <div className={css.containerFormSignIn}>
                <form className={css.signInForm}>
                <h5 className={css.signInTitle}>Sign In</h5>
            <label className={css.signInLabel}>
                <input className={css.signInInput} 
                type="email" 
                name="email" 
                placeholder={signinEmailPlaceholder}
                onFocus={() => setSigninEmailPlaceholder('')}
                onBlur={() => setSigninEmailPlaceholder('Email')} />
                <div className={css.signInIcons}>
                <Svg className={css.signInIcon} icon="icon-mail-01" />
                </div>
            </label>
            <label>
                <input className={css.signInInput} 
                type="password" 
                name="password" 
                placeholder={signinPasswordPlaceholder}
                onFocus={() => setSigninPasswordPlaceholder('')}
                onBlur={() => setSigninPasswordPlaceholder('Password')} />
                <div className={css.signInPassword}>
                <Svg className={css.signInIcon} icon="icon-lock-02" />
                </div>
            </label>
            <button className={css.buttonSignIn} type="submit">Sign In</button>
                </form>
            </div>
             <div className={css.registrationLink}>
                <a href="/So-Yummy-app/registration">Registration</a>
            </div>
            </div>
            </div>
            </section>
            <div className={css.backgroundLaptopSignIn}></div>
            </section>
            </>
    )
}

export default SignIn;