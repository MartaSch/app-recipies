import React, { useState } from "react";
import { useDispatch } from "react-redux";
import css from '../Registration/Registration.module.css';
import Svg from '../../assets/svg/svg';
import { register } from "../../redux/auth/operations";

const Registration = () => {

    const [namePlaceholder, setNamePlaceholder] = useState('Name');
    const [emailPlaceholder, setEmailPlaceholder] = useState('Email');
    const [passwordPlaceholder, setPasswordPlaceholder] = useState('Password');

    const dispatch = useDispatch();
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        dispatch(
            register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
        );
        form.reset();
    }

    return (
        <>
        <section className={css.registrationSection}>
            <section className={css.registrationPosition}>
        <div className={css.sectionImageRegistration}>
            <div className={css.registrationImageContainer}>
                <img className={css.registrationImage} src="./src/assets/images/registration_login/login_images_mobile@1x.png" alt="login">
                </img>
                </div>
                </div>
                <div className={css.registrationSectionBackground}>
                    <div className={css.registrationContainerBackground}>
                <div className={css.containerForm}>
                <form className={css.registerForm} onSubmit={handleSubmit}>
                <h5 className={css.registrationTitle}>Registration</h5>
            <label className={css.registerLabel}>
                <input className={css.registerInput} 
                type="text" 
                name="name" 
                placeholder={namePlaceholder}
                onFocus={() => setNamePlaceholder('')}
                onBlur={() => setNamePlaceholder('Name')}/>
                <div className={css.registerIcons}>
                <Svg className={css.registerIcon} icon="icon-user-01" />
                </div>
            </label>
            <label className={css.registerLabel}>
                <input className={css.registerInput} 
                type="email" 
                name="email" 
                placeholder={emailPlaceholder}
                onFocus={() => setEmailPlaceholder('')}
                onBlur={() => setEmailPlaceholder('Email')} 
                />
                <div className={css.registerIcons}>
                <Svg className={css.registerIcon} icon="icon-mail-01" />
                </div>
            </label>
            <label>
                <input className={css.registerInput} 
                type="password" 
                name="password" 
                placeholder={passwordPlaceholder}
                onFocus={() => setPasswordPlaceholder('')}
                onBlur={() => setPasswordPlaceholder('Password')}
                />
                <div className={css.registerIcons}>
                <Svg className={css.registerIconLock} icon="icon-lock-02" />
                </div>
            </label>
            <button className={css.buttonRegister} type="submit">Sign up</button>
                </form>
            </div>
             <div className={css.signinLink}>
                <a href="/yummy-app/signin">Sign In</a>
            </div>
            </div>
            </div>
            </section>
            <div className={css.backgroundLaptop}></div>
            </section>
            </>
    )
}

export default Registration;