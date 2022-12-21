import { Button } from 'antd';
import styled from 'styled-components';
export const LoginContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(34, 193, 195);
    background: linear-gradient(135deg, rgba(34, 193, 195, 1) 0%, rgba(253, 187, 45, 1) 100%);
    font-family: 'work sans';
`;
export const FormLogin = styled.div`
    max-width: 500px;
    min-width: 300px;
    max-height: 700px;
    width: 30%;
    height: 80%;
    margin: 50px auto;
    background-color: white;
    border-radius: 25px;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;
export const HeaderTitle = styled.span`
    flex: 2;
    font-size: 30px;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const UserNameContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
`;
export const UserNameText = styled.span`
    font-size: 18px;
    padding: 10px 0px;
    font-weight: bold;
`;
export const UserNameInput = styled.input`
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
    transition: box-shadow 0.2s ease-in;
    &: focus {
        box-shadow: inset 0px -3px 0px 0px rgba(34, 193, 195, 0.7);
        outline: none;
    }
    &:focus::-webkit-input-placeholder {
        opacity: 0;
    }
    &:hover::-webkit-input-placeholder {
        transition: opacity 0.3s ease-out;
        opacity: 0;
    }
`;

export const PassWordContainer = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    padding: 5px 20px;
`;
export const PassWordText = styled.span`
    font-size: 18px;
    padding: 10px 0px;
    font-weight: bold;
`;
export const PassWordInput = styled.input`
    height: 40px;
    border-radius: 5px;
    outline: none;
    border: none;
    box-shadow: inset 0px -3px 0px 0px rgba(187, 187, 187, 0.2);
    transition: box-shadow 0.2s ease-in;
    &: focus {
        box-shadow: inset 0px -3px 0px 0px rgba(34, 193, 195, 0.7);
        outline: none;
    }
    &:focus::-webkit-input-placeholder {
        opacity: 0;
    }
    &:hover::-webkit-input-placeholder {
        transition: opacity 0.3s ease-out;
        opacity: 0;
    }
`;
export const RememberContainer = styled.div`
    flex: 2;
`;
export const LoginSubmit = styled.div`
    flex: 2;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const ButtonCustom = styled(Button)`
    height: 50px;

    &.ant-btn {
        width: 250px;
    }
`;

export const SignInWith = styled.div`
    flex: 2;
`;
