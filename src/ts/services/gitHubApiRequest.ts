import axios from "axios";
import type { IRepo } from "../models/iRepo";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const GITHUB_API_URL: string = import.meta.env.VITE_APP_GITHUB_URL;

export async function gitHubApiRequest(): Promise<IRepo[]> {
  const response = await axios.get<IRepo[]>(GITHUB_API_URL);
  return response.data;
}
