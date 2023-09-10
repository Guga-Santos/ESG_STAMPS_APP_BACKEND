import { IStamp } from "../../interfaces/IStamp";

const stampMock: IStamp = {
  name: "Example",
  description: "Description Example",
  url: "http://www.stamp.com",
  logo: "http://www.stamp.com/logo.png"
}

const stampMockWithId: IStamp & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  name: "Example",
  description: "Description Example",
  url: "http://www.stamp.com",
  logo: "http://www.stamp.com/logo.png"
}

const updateStamp = {
  name: "Updated Example",
  description: "Updated Example"
}

const updatedStampMock: IStamp & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  name: "Updated Example",
  description: "Updated Example",
  url: "http://www.stamp.com",
  logo: "http://www.stamp.com/logo.png"
}

export {
  stampMock,
  stampMockWithId,
  updateStamp,
  updatedStampMock
};
