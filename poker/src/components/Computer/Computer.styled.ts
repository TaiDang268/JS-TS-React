import { Position } from "components/types/user.type";
import styled, { css } from "styled-components";
export const Container = styled.div`
  width: 150px;
  height: 150px;
  position: absolute;
  /* bottom: 20px;
  left: 45%; */
  ${(props: { position: Position }) => {
    switch (props.position) {
      case "left":
        return css`
          top: 50%;
          left: 10%;
          transform: translateY(-50%);
        `;
      case "right":
        return css`
          top: 50%;
          right: 10%;
          transform: translateY(-50%);
          flex-direction: row-reverse;
        `;
      case "top":
        return css`
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          flex-direction: row-reverse;
        `;

      default:
        break;
    }
  }}
  display: flex;
  justify-content: center;
  flex-direction: column;
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
export const Name = styled.div`
  font-weight: bold;
`;
export const Money = styled.div``;
