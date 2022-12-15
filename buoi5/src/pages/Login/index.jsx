import styles from './styles.module.scss';
import { images } from '../../assets';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from '../Dashboard';
import isEmpty from 'validator/lib/isEmpty';
import isEmail from 'validator/lib/isEmail';

const Login = () => {
    const navigate = useNavigate();
    const Acounts = [
        { id: 1, username: 'taidang268@gmail.com', password: '1234' },
        { id: 2, username: '', password: '' },
        { id: 3, username: '', password: '' },
    ];
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validation, setValidation] = useState('');
    const validateAll = () => {
        const message = {};
        if (isEmpty(username)) {
            message.username = 'Please enter a username';
        }
        if (isEmpty(password)) {
            message.password = 'Please enter a password';
        }
        if (!isEmail(username)) {
            message.username = 'Please enter the correct email';
        }

        setValidation(message);
        if (Object.keys(message).length > 0) return false;
        return true;
    };
    const handleOnChangeUsername = (event) => {
        const value = event.target.value;
        setUsername(value);
    };
    const handleOnChangePassword = (event) => {
        const value = event.target.value;
        setPassword(value);
    };
    const handleSubmitLogin = (e) => {
        const isValidate = validateAll();

        if (isValidate) navigate('/dashboard');
        if (!isValidate) return;
    };
    return (
        <div className={styles.LoginContainer}>
            <div className={styles.LoginForm}>
                <div className={styles.CameraImgContainer}>
                    {/* <img className={styles.CameraImg} src={images.cameraIcon} alt="" /> */}
                </div>
                <div className={styles.UsernameContainer}>
                    <div className={styles.UsernameImg}>
                        <img src={images.usernameIcon} alt="" />
                    </div>
                    <input
                        className={styles.UsernameInput}
                        type="text"
                        onChange={handleOnChangeUsername}
                        placeholder="Username"
                    />
                </div>
                <span className={styles.TextWarning}>{validation.username}</span>

                <div className={styles.PasswordContainer}>
                    <div className={styles.PasswordImg}>
                        <img src={images.passwordIcon} alt="" />
                    </div>
                    <input
                        className={styles.PasswordInput}
                        type="password"
                        onChange={handleOnChangePassword}
                        placeholder="Password"
                    />
                </div>
                <span className={styles.TextWarning}>{validation.password}</span>

                <div className={styles.RememberContainer}>
                    <input type="checkbox" name="" id="" />
                    <span className={styles.RememberText}>Remember me</span>
                </div>
                <div className={styles.LoginBtnContainer}>
                    <button type="submit" onClick={handleSubmitLogin}>
                        LOGIN
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Login;
