import { IUser } from "components/types/user.type";
import { Avatar, Container, Money, Name, Wrapper } from "./Computer.styled";
// import User from "components/User/User";
interface IComputer {
  data: IUser;
}
const Computer = ({ data }: IComputer) => {
  return (
    <Container position={data.position || "top"}>
      <Avatar src={data.avatar}></Avatar>
      <Wrapper>
        <Name>{data.name}</Name>
        <Money>{data.money}$</Money>
      </Wrapper>
    </Container>
  );
};
export default Computer;
