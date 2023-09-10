import { IUser } from "../../interfaces/IUser";

const userMock: IUser = {
  name: "New User",
  email: "user@email.com",
  password: "password",
  role: "user"
}

const userMockWithId: IUser & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  name: "New User",
  email: "user@email.com",
  password: "password",
  role: "user"
}

const updateUserMock = {
  name: 'Updated User',
  role: 'admin'
}

const updatedUserMock: IUser & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  name: 'Updated User',
  email: "user@email.com",
  password: "password",
  role: 'admin'
}

export {
  updateUserMock,
  updatedUserMock, userMock, userMockWithId
};

