import { ICategory } from "../../interfaces/ICategory"

const categoryMock: ICategory = {
  name: "Example",
  description: "Example of a description",
  stamps: ["111111111111111111111111", '999999999999999999999999999']
}

const categoryMockWithId: ICategory & { _id: string} = {
  _id: "64258edafe707e38fcdb2785",
  name: "Example",
  description: "Example of a description",
  stamps: ["111111111111111111111111", '999999999999999999999999999']
}

const updateCategory = {
  name: "Updated Example",
  description: "Updated description"
}

const updatedCategoryMock: ICategory & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  name: "Updated Example",
  description: "Updated description",
  stamps: ["000000000000000000000000","999999999999999999999999"],
}

export {
  categoryMock,
  categoryMockWithId,
  updateCategory,
  updatedCategoryMock
}
