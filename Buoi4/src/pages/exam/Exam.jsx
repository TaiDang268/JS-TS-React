import {
  ExamContainer,
  MainExam,
  Pagination,
  MainExamBottom,
  MainExamTop,
  Text,
  Time,
  TimeLine,
  Question,
  FormAnwser,
  AnswerLabel,
  Next,
  NextPrev,
  Pagi,
  Submit,
} from "./Exam.styled";

const Exam = () => {
  return (
    <ExamContainer>
      <MainExam>
        <MainExamTop>
          <Text>Kiểm tra an toàn bảo mật thông tin lần 2</Text>
          <Time>Còn lại :14 phút 22 giây</Time>
          <TimeLine></TimeLine>
        </MainExamTop>
        <MainExamBottom>
          <Question>
            Câu 3:Nhân viên chính thức của công ty Amela được nghỉ phép(có hưởng
            lương) bao nhiêu ngày một năm?
          </Question>
          <FormAnwser>
            <AnswerLabel>
              <input type="radio" value="A" name="test" />
              <span>A. 12 ngày nếu làm đủ cả năm</span>
            </AnswerLabel>
            <AnswerLabel>
              <input type="radio" value="B" name="test" />
              <span>B. 16 ngày nếu làm đủ cả năm</span>
            </AnswerLabel>
            <AnswerLabel>
              <input type="radio" value="C" name="test" />
              <span>C. Không có nghỉ phép vẫn hưởng lương</span>
            </AnswerLabel>
            <AnswerLabel>
              <input type="radio" value="D" name="test" />
              <span>D. 8 ngày nếu làm đủ cả năm</span>
            </AnswerLabel>
          </FormAnwser>

          <NextPrev>
            <Next>Câu trước</Next>
            <Next>Câu sau</Next>
          </NextPrev>
        </MainExamBottom>
      </MainExam>
      <Pagination>
        <Pagi>1</Pagi>
        <Pagi>2</Pagi>
        <Pagi >3</Pagi>
        <Pagi>4</Pagi>
        <Pagi>5</Pagi>
        <Pagi>6</Pagi>
        <Pagi>7</Pagi>
        <Pagi>8</Pagi>
        <Pagi>9</Pagi>
        <Pagi>10</Pagi>
        <Pagi>11</Pagi>
        <Pagi>12</Pagi>
        <Pagi>13</Pagi>
        <Pagi>14</Pagi>
        <Pagi>15</Pagi>
        <Pagi>16</Pagi>

        <Submit>Nộp bài</Submit>
      </Pagination>
    </ExamContainer>
  );
};

export default Exam;
