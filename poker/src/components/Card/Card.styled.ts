import { images } from "assets/images";
import styled from "styled-components";

export const Container = styled.div`
  width: 6em;
  height: 8em;
  background-color: transparent;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  /* border: 1px solid #fff; */
  transform-style: preserve-3d;
  transition: transform 0.2s;
  transition-timing-function: ease-in-out;
  transform: rotateY(
    ${(props: { flip: boolean }) => (props.flip ? "180deg" : "0")}
  );

  /* &:hover{
        transform: rotateY(180deg);
        props.isFlip ? '180deg' : '0'
        
    } */
`;

export const BackSide = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-position: center;
  background-image: url(${images.backSide});
  background-size: 100%;
  transform: rotateY(0deg);
  backface-visibility: hidden;
`;

export const FrontSide = styled(BackSide)`
  background: #fff;
  transform: rotateY(180deg);
`;

export const FrontSideWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  color: ${(props: any) => props.color};
`;

export const CardValue = styled.div`
  font-size: 1.5em;
  font-weight: bold;
  position: absolute;
  left: 0.2em;
  top: 0;
  line-height: 100%;
`;

export const CardSuit = styled.img`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translate(-50%, -50%);
  width: 4em;
`;

export const MiniCardSuit = styled.img`
  position: absolute;
  left: 0.2em;
  top: 1.4em;
  width: 1.5em;
`;
