import axios, { AxiosPromise } from "axios";
import { IRepo } from "../models/iRepo";

export function getData(): Promise<IRepo[]> {
  return axios

    .get("https://api.github.com/users/ayngie/repos")

    .then((response) => {
      console.log(response.data);
      return response.data;
    });
}
