import styles from './styles.module.scss';
import { images } from '../../assets';
const Login = () => {
    return (
        <div className={styles.LoginContainer}>
            <img className={styles.LoginContainerImg} src={images.bg} alt="" />
            <div className={styles.LoginForm}>
                <div className={styles.CameraImgContainer}>
                    <img className={styles.CameraImg} src={images.cameraIcon} alt="" />
                </div>
                <div className={styles.UsernameContainer}>
                    <div className={styles.UsernameImg}>
                        <img src={images.usernameIcon} alt="" />
                    </div>
                    <input className={styles.UsernameInput} type="text" placeholder="Username" />
                </div>

                <div className={styles.PasswordContainer}>
                    <div className={styles.PasswordImg}>
                        <img src={images.passwordIcon} alt="" />
                    </div>
                    <input className={styles.PasswordInput} type="text" placeholder="Password" />
                </div>

                <div className={styles.RememberContainer}>
                    <input type="checkbox" name="" id="" />
                    <span className={styles.RememberText}>Remember me</span>
                </div>
                <div className={styles.LoginBtnContainer}>
                    <button>LOGIN</button>
                </div>
            </div>
        </div>
    );
};
export default Login;
