import { IUser } from "components/types/user.type";
import { Avatar, Container, Money, Name, Wrapper } from "./Computer.styled";
// import User from "components/User/User";
interface IComputer {
  data: IUser;
}
const Computer = ({ data }: IComputer) => {
  console.log(data.position);
  return (
    <Container position={data.position || "top"}>
      <Avatar src={data.avatar}></Avatar>
      <Wrapper>
        <Name>Name:{data.name}</Name>
        <Money>Money:{data.money}$</Money>
      </Wrapper>
    </Container>
  );
};
export default Computer;
