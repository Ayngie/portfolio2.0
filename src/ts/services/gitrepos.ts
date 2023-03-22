require("dotenv").config();
import axios from "axios";
import { log } from "../helpers/devHelpers";
import type { IRepo } from "../models/IRepo";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const GITHUB_API_URL: string = process.env.GITHUB_URL;

export async function getGitRepos(): Promise<IRepo[]> {
  const response = await axios.get(GITHUB_API_URL);
  log(response.data);
  return response.data;
}
