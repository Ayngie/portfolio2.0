import axios from "axios";
import type { IRepoResponse } from "../models/IRepoResponse";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
const GITHUB_API_URL: string = import.meta.env.VITE_APP_GITHUB_URL;

export async function gitHubApiRequest(): Promise<IRepoResponse> {
  const response = await axios.get<IRepoResponse>(GITHUB_API_URL);
  return response.data;
}
