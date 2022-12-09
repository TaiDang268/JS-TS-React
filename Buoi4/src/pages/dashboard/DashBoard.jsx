import cl from "../../assets/images/clock-icon.png";
import pointicon from "../../assets/images/point-icon.png";
import star from "../../assets/images/start-active.png";
import unstar from "../../assets/images/start-unactive.png";
import prev from "../../assets/images/left-arrow.png"
import cont from "../../assets/images/right-arrow.png"

import {
  DashBoardContainer,
  Infor,
  MainContent,
  AvatarWrap,
  InforText,
  Button,
  Navbar,
  ListQuiz,
  Pagination,
  Search,
  SelectOption,
  QuizItem,
  TextInfor,
  FormIcon,
  Lock,
  MinuteText,
  Star,FormStar,Pagi
} from "./DashBoard.styled";

const DashBoard = () => {
  return (
    <DashBoardContainer>
      <Infor>
        <AvatarWrap>
          <img
            src="https://scontent.fhan14-3.fna.fbcdn.net/v/t39.30808-6/297191474_781960059801989_4585909138518852413_n.jpg?stp=cp6_dst-jpg&_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=rKHHowftZCIAX_rtBqu&_nc_ht=scontent.fhan14-3.fna&oh=00_AfAtZo7_TFGMidNwpFHPgeYb58m8DLVIDjtT_44NA5F7yA&oe=63987245"
            alt=""
          />
        </AvatarWrap>
        <InforText>User : taidang268@gmail.com</InforText>
        <InforText>Point : 2468</InforText>
        <Button>LOGOUT</Button>
      </Infor>
      <MainContent>
        <Navbar>
          <Search placeholder="Search..." />
          <SelectOption>
            <option value="1">Difficult</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </SelectOption>
        </Navbar>
        <ListQuiz>
          <QuizItem>
            <TextInfor>Kiểm tra an toàn bảo mật thông tin 2</TextInfor>
            <FormIcon>
              <Lock src={cl} />
              <MinuteText>7 phút</MinuteText>
              <Lock src={pointicon} />
              <MinuteText>200/250 điểm</MinuteText>
            </FormIcon>
            <FormStar>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={unstar} />
            </FormStar>
          </QuizItem>
          <QuizItem>
            <TextInfor>Kiểm tra an toàn bảo mật thông tin 2</TextInfor>
            <FormIcon>
              <Lock src={cl} />
              <MinuteText>7 phút</MinuteText>
              <Lock src={pointicon} />
              <MinuteText>200/250 điểm</MinuteText>
            </FormIcon>
            <FormStar>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={unstar} />
            </FormStar>
          </QuizItem>
          <QuizItem>
            <TextInfor>Kiểm tra an toàn bảo mật thông tin 2</TextInfor>
            <FormIcon>
              <Lock src={cl} />
              <MinuteText>7 phút</MinuteText>
              <Lock src={pointicon} />
              <MinuteText>200/250 điểm</MinuteText>
            </FormIcon>
            <FormStar>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={unstar} />
            </FormStar>
          </QuizItem>
          <QuizItem>
            <TextInfor>Kiểm tra an toàn bảo mật thông tin 2</TextInfor>
            <FormIcon>
              <Lock src={cl} />
              <MinuteText>7 phút</MinuteText>
              <Lock src={pointicon} />
              <MinuteText>200/250 điểm</MinuteText>
            </FormIcon>
            <FormStar>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={unstar} />
            </FormStar>
          </QuizItem>
          <QuizItem>
            <TextInfor>Kiểm tra an toàn bảo mật thông tin 2</TextInfor>
            <FormIcon>
              <Lock src={cl} />
              <MinuteText>7 phút</MinuteText>
              <Lock src={pointicon} />
              <MinuteText>200/250 điểm</MinuteText>
            </FormIcon>
            <FormStar>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={unstar} />
            </FormStar>
          </QuizItem>
          <QuizItem>
            <TextInfor>Kiểm tra an toàn bảo mật thông tin 2</TextInfor>
            <FormIcon>
              <Lock src={cl} />
              <MinuteText>7 phút</MinuteText>
              <Lock src={pointicon} />
              <MinuteText>200/250 điểm</MinuteText>
            </FormIcon>
            <FormStar>
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={star} />
              <Star src={unstar} />
            </FormStar>
          </QuizItem>
        </ListQuiz>
        <Pagination>
          
          <Pagi ><img src={prev} alt="" /></Pagi>
          <Pagi>1</Pagi>

          <Pagi>2</Pagi>
          <Pagi>...</Pagi>
          <Pagi>9</Pagi>
          <Pagi>10</Pagi>
          <Pagi ><img src={cont} alt="" /></Pagi>

         
        </Pagination>
      </MainContent>
    </DashBoardContainer>
  );
};

export default DashBoard;
