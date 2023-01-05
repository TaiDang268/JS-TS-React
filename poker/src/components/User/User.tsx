import { IUser } from "components/types/user.type";
// import images from "../../assets/images"
import { Avatar, Container, Money, Name, Wrapper } from "./User.styled";
interface IPropsUser {
  data: IUser;
}
const User = ({ data }: IPropsUser) => {
  return (
    <Container>
      <Avatar src={data.avatar}></Avatar>
      <Wrapper>
        <Name>Name:{data.name}</Name>
        <Money>Money:{data.money}$</Money>
      </Wrapper>
    </Container>
  );
};
export default User;
