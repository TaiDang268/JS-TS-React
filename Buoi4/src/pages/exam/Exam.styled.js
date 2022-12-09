import styled from "styled-components";

export const ExamContainer = styled.div`
  display: flex;
  padding: 0;
  height: 100vh;
  width: 100vw;
`;

export const MainExam = styled.div`
  height: 100%;
  width: 75%;

  display: flex;
  flex-direction: column;
`;
export const Pagination = styled.div`
  height: 100%;
  width: 25%;
  background-color: #d9d9d9;
  border-left: 2px solid #4e4242;
  paddingTop: 20px
`;

export const MainExamTop = styled.div`
  height: 20%;
  width: 100%;
  background-color: #d9d9d9;
  padding: 10px 20px;
`;
export const MainExamBottom = styled.div`
  height: 80%;
  width: 100%;
  background-color: #909090;
  border-top: 2px solid #4e4242;
  padding:  0 20px;
`;
export const Text = styled.div`
  font-weight: bold;
`;
export const Time = styled.div`
  padding-top: 15px;
`;
export const TimeLine = styled.div`
  width: 70%;
  height: 15px;
  border-radius: 4px;
  background-color: #41c54e;
  margin-top: 15px;
`;
export const Question = styled.div`
  font-weight:bold;
`;

export const FormAnwser = styled.div``;
export const AnswerLabel = styled.label`
  display: flex;
  gap: 10px;
  cursor: pointer;

  > span {
    font-size: 18px;
  }
`;
export const Next = styled.button`
  height: 51px;
  width:87px;
  background-color:#EEE7A9;
  position: relative;
  top:260px;
  cursor: pointer;
`;
export const NextPrev = styled.div`
  display: flex;
  justify-content: space-around;
  `;
  export const Pagi = styled.button`
    height: 34px;
    width: 52px;
    margin: 5px 5px;
    border-radius: 4px;
  cursor: pointer;

  `;

  export const Submit = styled.button`
    height: 43px;
    width: 83px;
    background-color:#4e4242;
    position: relative;
    top:400px;
    left:60px;
    font-weight:bold;
    border-radius: 40px;
  cursor: pointer;

    `;

