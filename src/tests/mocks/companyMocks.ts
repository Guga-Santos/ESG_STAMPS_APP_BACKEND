import { ICompany } from "../../interfaces/ICompany";

const companyMock: ICompany = {
  name: "Example",
  description: "Example of a description",
  url: "http://www.example.com.br",
  email: "example@email.com",
  sector: "Example",
  stamps: ["000000000000000000000000","999999999999999999999999"],
  logo: "http://www.example.com.br/logo.png",
}

const companyMockWithId: ICompany & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  name: "Example",
  description: "Example of a description",
  url: "http://www.example.com.br",
  email: "example@email.com",
  sector: "Example",
  stamps: ["000000000000000000000000","999999999999999999999999"],
  logo: "http://www.example.com.br/logo.png",
}

const updateCompanyMock = {
  name: "Updated Example",
  description: "Updated description"
}

const updatedCompanyMock: ICompany & { _id: string } = {
  _id: "64258edafe707e38fcdb2785",
  name: "Updated Example",
  description: "Updated description",
  url: "http://www.example.com.br",
  email: "example@email.com",
  sector: "Example",
  stamps: ["000000000000000000000000","999999999999999999999999"],
  logo: "http://www.example.com.br/logo.png",
}

export {
  companyMock,
  companyMockWithId,
  updateCompanyMock,
  updatedCompanyMock
};



