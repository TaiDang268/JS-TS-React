import { ICard } from "./card.type";

export type Position = "top" | "bottom" | "left" | "right";
export interface IUser {
  id?: string;
  name?: string;
  position?: Position;
  card?: ICard[];
  typeUser?: "player" | "computer";
  avatar?: string;
  money?: number;
}
