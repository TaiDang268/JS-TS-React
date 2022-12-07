// import { BiUser } from "react-icons/bi";
// import { AiFillUnlock } from "react-icons/ai";
// import { Form } from "react-router-dom";
import {
  Container,
  LoginContainer,
  Wrapper,
  Form,
  CameraWrap,
  CameraIcon,
  FormItem,
  InputContainer,
  IconWrap,
  Input,
  CheckBoxWrap,
  ButtonForm,
} from "./Login.styled";
import CameraImg from "../../assets/images/camera-icon.png";

const Login = () => {
  return (
    <LoginContainer>
      <Container>
        <Wrapper>
          <Form>
            <CameraWrap>
              <CameraIcon src={CameraImg} />
            </CameraWrap>
            <FormItem>
              <InputContainer>
                <IconWrap></IconWrap>
                <Input type="text" placeholder="username" />
              </InputContainer>
            </FormItem>

            <FormItem>
              <InputContainer>
                <IconWrap></IconWrap>
                <Input type="text" placeholder="password" />
              </InputContainer>
            </FormItem>

            <FormItem>
              <CheckBoxWrap>
                <input type="checkbox" />
                <span>Remember me</span>
              </CheckBoxWrap>
            </FormItem>

            <FormItem>
              <ButtonForm>Login</ButtonForm>
            </FormItem>
          </Form>
        </Wrapper>
      </Container>
    </LoginContainer>
  );
};

export default Login;
