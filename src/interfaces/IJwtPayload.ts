import { IUser } from "./IUser"

export interface JwtPayload {
  data: {
    user: IUser & { _id: string }
  }
}