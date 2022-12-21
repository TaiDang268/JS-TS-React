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
} from './Login.styled';
// import { Button } from 'antd';
const Login = () => {
    return (
        <LoginContainer>
            <FormLogin>
                <HeaderTitle>LOGIN</HeaderTitle>
                <UserNameContainer>
                    <UserNameText>Username</UserNameText>
                    <UserNameInput placeholder="Enter Your Username"></UserNameInput>
                </UserNameContainer>
                <PassWordContainer>
                    <PassWordText>Password</PassWordText>
                    <PassWordInput placeholder="Enter Your Password" type="password"></PassWordInput>
                </PassWordContainer>
                <RememberContainer></RememberContainer>
                <LoginSubmit>
                    <ButtonCustom type="primary" shape="round" value="large">
                        LOGIN
                    </ButtonCustom>
                </LoginSubmit>
                <SignInWith></SignInWith>
            </FormLogin>
        </LoginContainer>
    );
};
export default Login;
