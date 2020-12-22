import { IPortfolio } from "./IPortfolio";

export interface IUser {
  name: string;

  username: string;

  email: string;

  password: string;

  portfolio: IPortfolio[];
}
