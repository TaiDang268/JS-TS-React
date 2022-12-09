import styled from "styled-components";



export const DashBoardContainer = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;
export const Infor = styled.div`
 width: 20%;
 height: 100%;
 background-color:#f5f5f5;
@media (max-width:740px){
   display: none;
}

`;

export const AvatarWrap = styled.div`
width: 100px;
height: 100px;
margin: 0 auto;
border-radius: 100%;
overflow: hidden;
cursor: pointer;

> img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
`;
export const InforText = styled.div`
font-weight: bold;
`;
export const Button = styled.div`
width: 112px;
padding: 14px 0px;
background: #d9d9d9;
text-align: center;
border-radius: 5px;
cursor: pointer;
font-weight:bold;
position: relative;
margin: 0 78px;
top: 400px;
`;
export const MainContent = styled.div`
width: 80%;
height: 100%;
background-color:#d9d9d9;
display: flex;
flex-direction:column;

`;
export const ListQuiz = styled.div`
width: 100%;
height: 100%;
background-color:#d9d9d9;
display: flex;
flex-wrap:wrap;
`;
export const Navbar = styled.div`
width: 100%;
height: 20%;
display: flex;
margin:10px 10px;

`;
export const Pagination = styled.div`
  width: 80%;
  text-align: center;
  
`;

export const Search = styled.input`
 width: 70%;
 height: 33px;
 margin-right: 54px;
 margin-left: 30px;

`;
export const SelectOption = styled.select`
width: 20%;
height: 40px;
`;
export const QuizItem = styled.div`
  width: 40%;
  height: 120px;
  background-color:#d9d9d9;
  margin:0 56px;
  border:2px solid black;
`;

export const TextInfor = styled.div`
  margin: 0 15px;
  font-weight:bold;
`;
export const FormIcon = styled.div`
  display: flex;
  margin:15px 15px;
`;
export const Lock = styled.img`
  height: 24px;
  width: 21px;
  margin-right:10px;
  margin-left:2px;
`;
export const MinuteText = styled.div`
  margin-right:30px;
`;

export const Star = styled.img`

  
`;
export const FormStar = styled.div`
margin:15px 15px;

  
`;


export const Pagi = styled.button`
  margin: 0 3px;
  
`;