import styled from "styled-components";
import { Button } from "antd";
export const Container = styled.div`
  width: 150px;
  height: 150px;
  /* position: absolute;
  bottom: -20px;
  left: 45%; */
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;
export const Avatar = styled.img`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  display: flex;

  justify-content: center;
`;
export const Wrapper = styled.div`
  font-weight: bold;
`;
export const Name = styled.div``;
export const Money = styled.div``;
export const FlipCard = styled(Button)`
  background-color: green;
  margin-right: 10px;
  font-weight: bold;
`;
