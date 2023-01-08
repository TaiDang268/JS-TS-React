import "./App.css";
import User from "./components/User/User";
import Computer from "./components/Computer/Computer";
import { useState } from "react";
import { ListUser } from "./listUser/ListUser";
import { ICard } from "components/types/card.type";
import { motion } from "framer-motion";
import Card from "components/Card/Card";
import { Button } from "antd";
import styled from "styled-components";
// eslint-disable-next-line
import ReactCardFlip from "react-card-flip";
function App() {
  const FlipCard = styled(Button)`
    background-color: green;
    margin-right: 10px;
    font-weight: bold;
  `;
  const NewGame = styled(Button)`
    background-color: #cb2c1b;
    margin-left: 10px;
    font-weight: bold;
  `;
  const Wrapper = styled.div`
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: -20px;
    left: 45%;
    display: flex;
    justify-content: center;
    flex-direction: row;
    align-items: center;
  `;
  const MotionCard = motion(Card, { forwardMotionProps: true });

  const [isStart, setIsStart] = useState<boolean>(false);
  const [isFlipCard, setIsFlipCard] = useState<boolean>(false);
  // const [isNewGame, setIsNewGame] = useState(false);
  // const handleClick = (e: any) => {
  //   e.preventDefault();
  //   //  return (prevState => ({ isFlipped: !prevState.isFlipped }));
  //   return !isFlipped;
  // };
  const handleFlipCard = () => {
    // setIsStart(false);
    // setIsFlipCard(true);
    if (isStart) {
      setIsFlipCard(true);
    }
  };
  const handleNewGame = () => {
    setIsStart(!isStart);
    setIsFlipCard(false);

    // setIsFlipCard(false);
    // setIsNewGame(!isNewGame);
  };
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsStart(true);
  //   }, 2000);
  //   setTimeout(() => {
  //     setIsFlipCard(true);
  //   }, 7000);
  // }, []);
  const initAnimation = { x: "-50%", y: "-50%", opacity: 1 };
  const USER_ANIMATION_1 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% - 110px)",
      y: "calc(-50% + 200px)",
      transition: { duration: 1, delay: 0.25 },
    },
  };
  const USER_ANIMATION_2 = {
    initial: initAnimation,
    end: {
      x: "-50%",
      y: "calc(-50% + 200px)",
      transition: { duration: 1, delay: 0.5 },
    },
  };
  const USER_ANIMATION_3 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% + 110px)",
      y: "calc(-50% + 200px)",
      transition: { duration: 1, delay: 0.75 },
    },
  };

  const FIRST_BOT_ANIMATION_1 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% - 500px)",
      y: "-50%",
      transition: { duration: 1, delay: 1.25 },
    },
  };
  const FIRST_BOT_ANIMATION_2 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% - 390px)",
      y: "-50%",
      transition: { duration: 1, delay: 1.5 },
    },
  };
  const FIRST_BOT_ANIMATION_3 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% - 280px)",
      y: "-50%",
      transition: { duration: 1, delay: 1.75 },
    },
  };

  const SECOND_BOT_ANIMATION_1 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% - 110px)",
      y: "calc(-50% - 200px)",
      transition: { duration: 1, delay: 2.75 },
    },
  };
  const SECOND_BOT_ANIMATION_2 = {
    initial: initAnimation,
    end: {
      x: "-50%",
      y: "calc(-50% - 200px)",
      transition: { duration: 1, delay: 3 },
    },
  };
  const SECOND_BOT_ANIMATION_3 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% + 110px)",
      y: "calc(-50% - 200px)",
      transition: { duration: 1, delay: 3.25 },
    },
  };

  const THIRD_BOT_ANIMATION_1 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% + 500px)",
      y: "-50%",
      transition: { duration: 1, delay: 2 },
    },
  };
  const THIRD_BOT_ANIMATION_2 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% + 390px)",
      y: "-50%",
      transition: { duration: 1, delay: 2.25 },
    },
  };
  const THIRD_BOT_ANIMATION_3 = {
    initial: initAnimation,
    end: {
      x: "calc(-50% + 280px)",
      y: "-50%",
      transition: { duration: 1, delay: 2.5 },
    },
  };
  const userCard: ICard[] = [
    { value: 6, suit: "hearts" },
    { value: 3, suit: "blades" },
    { value: 8, suit: "clubs" },
  ];
  const bot1Card: ICard[] = [
    { value: 1, suit: "hearts" },
    { value: 3, suit: "clubs" },
    { value: 2, suit: "diamonds" },
  ];
  const bot2Card: ICard[] = [
    { value: 4, suit: "hearts" },
    { value: 7, suit: "blades" },
    { value: 5, suit: "diamonds" },
  ];
  const bot3Card: ICard[] = [
    { value: 8, suit: "hearts" },
    { value: 4, suit: "blades" },
    { value: 9, suit: "diamonds" },
  ];
  return (
    <div className="App">
      <MotionCard
        // belongTo="master
        //     isFlip = {isFlipCard}r"
        initial={{
          x: "calc(-50% + 3px)",
          y: "calc(-50% + 3px)",
        }}
      />
      <MotionCard
        // belongTo="master
        //     isFlip = {isFlipCard}r"
        initial={{
          x: "-50%",
          y: "-50%",
        }}
      />
      <MotionCard
        initial={{
          x: "calc(-50% - 3px)",
          y: "calc(-50% - 3px)",
        }}
        // belongTo="master
        //     isFlip = {isFlipCard}r"
      />

      {userCard.map((card, index) => {
        const variant =
          index === 1
            ? USER_ANIMATION_1
            : index === 2
            ? USER_ANIMATION_2
            : USER_ANIMATION_3;
        return (
          <MotionCard
            key={index}
            belongTo="user"
            initial={isFlipCard ? false : "initial"}
            isFlip={isFlipCard}
            variants={variant}
            animate={!isStart ? "initial" : "end"}
            card={card}
          />
        );
      })}
      {bot1Card.map((card, index) => {
        const variant =
          index === 1
            ? FIRST_BOT_ANIMATION_1
            : index === 2
            ? FIRST_BOT_ANIMATION_2
            : FIRST_BOT_ANIMATION_3;
        return (
          // <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
          //   <div>
          //     This is the front of the card.
          //     <button onClick={handleClick}>Click to flip</button>
          //   </div>
          //   <div></div>
          // </ReactCardFlip>
          <MotionCard
            key={index}
            belongTo="bot1"
            initial={isFlipCard ? false : "initial"}
            isFlip={isFlipCard}
            variants={variant}
            animate={!isStart ? "initial" : "end"}
            card={card}
          />
        );
      })}
      {bot2Card.map((card, index) => {
        const variant =
          index === 1
            ? SECOND_BOT_ANIMATION_1
            : index === 2
            ? SECOND_BOT_ANIMATION_2
            : SECOND_BOT_ANIMATION_3;
        // const arrAnimation = [
        //   SECOND_BOT_ANIMATION_1,
        //   SECOND_BOT_ANIMATION_2,
        //   SECOND_BOT_ANIMATION_1,
        // ];
        // const variant = arrAnimation[index];

        return (
          <MotionCard
            key={index}
            belongTo="bot2"
            initial={isFlipCard ? false : "initial"}
            isFlip={isFlipCard}
            variants={variant}
            animate={!isStart ? "initial" : "end"}
            card={card}
          />
        );
      })}
      {bot3Card.map((card, index) => {
        const variant =
          index === 1
            ? THIRD_BOT_ANIMATION_1
            : index === 2
            ? THIRD_BOT_ANIMATION_2
            : THIRD_BOT_ANIMATION_3;
        return (
          <MotionCard
            key={index}
            belongTo="bot3"
            initial={isFlipCard ? false : "initial"}
            isFlip={isFlipCard}
            variants={variant}
            animate={!isStart ? "initial" : "end"}
            card={card}
          />
        );
      })}
      {ListUser.map((user) => {
        if (user.typeUser === "player") {
          return (
            <Wrapper key={user.id}>
              <FlipCard onClick={handleFlipCard}>LẬT BÀI</FlipCard>
              <User data={user} />
              <NewGame onClick={handleNewGame}>NEW GAME</NewGame>
            </Wrapper>
          );
        }
        return <Computer data={user}></Computer>;
      })}
    </div>
  );
}

export default App;
