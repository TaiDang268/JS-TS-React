import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import isEmail from 'validator/lib/isEmail';
import isEmpty from 'validator/lib/isEmpty';
import isByteLength from 'validator/lib/isByteLength';
import {
    FormLogin,
    LoginContainer,
    HeaderTitle,
    UserNameContainer,
    PassWordContainer,
    RememberContainer,
    LoginSubmit,
    SignInWith,
    UserNameText,
    UserNameInput,
    PassWordText,
    PassWordInput,
    ButtonCustom,
    UserNameWarning,
    PassWordWarning,
    Register,
} from './Login.styled';
// import { Button } from 'antd';
const Login = () => {
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [validation, setValidation] = useState('');

    // console.log(email, password);
    const messageWarning = {};
    const validateAll = (email, password) => {
        if (!isEmail(email)) {
            messageWarning.username = 'Please enter the correct email';
        }
        if (isByteLength(password, 0, 5)) {
            messageWarning.password = 'Password must be longer than 6 characters';
        }
        if (isEmpty(email)) {
            console.log(111);
            messageWarning.username = 'Please enter a username';
        }
        if (isEmpty(password)) {
            messageWarning.password = 'Please enter a password';
        }
        setValidation(messageWarning);
        if (Object.keys(messageWarning).length > 0) return false;
        return true;
    };
    const handleSubmit = () => {
        validateAll(email.current.value, password.current.value);
        if (email.current.value === 'abc@gmail.com' && password.current.value === '12345') {
            navigate('/taskdetail');
            // localStorage.setItem('emailData', 'abc@gmail.com');
            // localStorage.setItem('passwordData', '12345');
        }
    };

    return (
        <LoginContainer>
            <FormLogin>
                <HeaderTitle>LOGIN</HeaderTitle>
                <UserNameContainer>
                    <UserNameText>Username</UserNameText>
                    <UserNameInput placeholder="Enter Your Username" type="text" ref={email}></UserNameInput>
                    <UserNameWarning>{validation.username}</UserNameWarning>
                </UserNameContainer>
                <PassWordContainer>
                    <PassWordText>Password</PassWordText>
                    <PassWordInput placeholder="Enter Your Password" type="password" ref={password}></PassWordInput>
                    <PassWordWarning>{validation.password}</PassWordWarning>
                </PassWordContainer>
                <Register>Register</Register>
                <RememberContainer></RememberContainer>
                <LoginSubmit>
                    <ButtonCustom type="primary" shape="round" value="large" onClick={handleSubmit}>
                        LOGIN
                    </ButtonCustom>
                </LoginSubmit>
                <SignInWith></SignInWith>
            </FormLogin>
        </LoginContainer>
    );
};
export default Login;
