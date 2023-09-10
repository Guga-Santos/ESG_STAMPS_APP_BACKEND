import { IUser } from "../../interfaces/IUser";

const userMockWithId: IUser & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  name: "New User",
  email: "user@email.com",
  password: "password",
  role: "user"
}