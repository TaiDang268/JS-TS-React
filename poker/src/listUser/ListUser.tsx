import { IUser } from "components/types/user.type";
import { images } from "assets/images";
export const ListUser: IUser[] = [
  {
    id: "1",
    name: "TaiDang",
    position: "bottom",
    typeUser: "player",
    avatar: images.player,
    money: 12,
  },
  {
    id: "2",
    name: "Tai2",
    position: "right",
    typeUser: "computer",
    avatar: images.computer,
    money: 12,
  },
  {
    id: "3",
    name: "Tai3",
    position: "left",
    typeUser: "computer",
    avatar: images.computer,
    money: 12,
  },
  {
    id: "4",
    name: "Tai4",
    position: "top",
    typeUser: "computer",
    avatar: images.computer,
    money: 12,
  },
];
