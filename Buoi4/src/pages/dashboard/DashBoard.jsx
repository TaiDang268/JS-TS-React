import {
  DashBoardContainer,
  SideMenu,
  TopSideMenu,
  AvatarWrap,
  InforText,
  Button,
  Content,
  Container,
  Navbar,
  NavbarOption,
  NavbarSearch,
  MainContent,
  ListQuizWrap,
  ListQuiz,
  
} from "./DashBoard.styled";

const DashBoard = () => {
  return (
    <Container>
      <DashBoardContainer>
        <SideMenu>
          <TopSideMenu>
            <AvatarWrap>
              <img
                src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/297191474_781960059801989_4585909138518852413_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rKHHowftZCIAX_rtBqu&_nc_ht=scontent.fhan14-3.fna&oh=00_AfD45Ewj2NR88oHxszKXDC_Ilyabw_GypT3s05aPp67kFw&oe=63967805"
                alt=""
              />
            </AvatarWrap>
            <InforText>Username:taidang268</InforText>
            <InforText>Point:2468</InforText>
          </TopSideMenu>
          <Button>Log Out</Button>
        </SideMenu>
      </DashBoardContainer>

      <Content>
        <Navbar>
          <NavbarSearch placeholder="Search..." />
          <NavbarOption>
            <option value="1">Difficult</option>
            <option value="2">Medium</option>
            <option value="3">Easy</option>
          </NavbarOption>
        </Navbar>

        <MainContent>
            <ListQuizWrap>
                <ListQuiz></ListQuiz>
            </ListQuizWrap>
            
            
        </MainContent>
      </Content>
    </Container>
  );
};

export default DashBoard;
