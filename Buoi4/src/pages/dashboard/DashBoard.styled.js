import styled from "styled-components";

export const Container = styled.div`
  max-width: 1500px;

  display: flex;
`;
export const DashBoardContainer = styled.div`
  background-color: #f5f5f5;
  width: 18%;
  height: 100vh;
`;

export const SideMenu = styled.div`
    width: :300px;
    height: 100%
    background-color:#333; 

`;

export const TopSideMenu = styled.div``;
export const AvatarWrap = styled.div`
  width: 100px;
  height: 100px;
  margin: 0 auto;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const InforText = styled.div`
  font-weight: bold;
  margin-top: 5px;
`;

export const Button = styled.button`
  width: 100%;
  padding: 14px 20px;
  background: white;
  text-align: center;
  border-radius: 5px;
  cursor: pointer;
  position: relative;
  top: 480px;
`;
export const Content = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #d9d9d9;
`;
export const Navbar = styled.div`
  display: flex;
  justifycontent: "center";
`;
export const NavbarSearch = styled.input`
  height: 50px;
  width: 860px;
  margin: 20px 20px;
`;
export const NavbarOption = styled.select`
  width: 320px;
  height: 54px;
  margin: 21px 20px;
`;
export const MainContent = styled.div`
  width: 1270px;
  background-color: red;  
  height: 100%;
 display: flex;
`;
export const ListQuizWrap = styled.div`
 
 background-color: #d9d9d9;
 border-radius: 4px;
`;

export const ListQuiz = styled.div`
 height: 50px;
 width: 50px;
 background-color:blue;
 
`;

  